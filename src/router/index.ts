import { createRouter, createWebHistory, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/view/Login/index.vue'), meta: { title: '登录' } },
    {
      path: '/login/callback',
      component: () => import('@/view/Login/LoginCallback.vue'),
      meta: { title: '扣扣登录-绑定手机' }
    },
    {
      path: '/register',
      component: () => import('@/view/Register/index.vue'),
      meta: { title: '注册' }
    },
    {
      path: '/',
      component: () => import('@/view/Layout/index.vue'),
      redirect: '/home',
      children: [
        { path: 'home', component: () => import('@/view/Home/index.vue'), meta: { title: '首页' } },
        {
          path: 'article',
          component: () => import('@/view/Article/index.vue'),
          meta: { title: '健康百科' }
        },
        {
          path: 'notify',
          component: () => import('@/view/Notify/index.vue'),
          meta: { title: '消息通知' }
        },
        {
          path: 'user',
          component: () => import('@/view/User/index.vue'),
          meta: { title: '个人中心' }
          // children: [
          //   { path: "consult", component: () => import("@/view/User/consult/index.vue"), meta: { title: '我的问诊' }, name: "Consult", },
          //   { path: "patient", component: () => import("@/view/User/patient.vue"), meta: { title: '家庭档案' }, name: "patient", },
          //   { path: "address", component: () => import("@/view/User/address.vue"), meta: { title: '地址管理' }, name: "address", },
          // ],
        }
      ]
    },
    {
      path: '/consult',
      component: () => import('@/view/Consult/ConsultRecord.vue'),
      meta: { title: '问诊' },
      name: 'Consult'
    },
    {
      path:'/sunny',
      component:()=>import('@/view/Sunny/index.vue'),
      meta:{title:'bick'},
      name:'sunny'
    },
    {
      path: '/patient',
      component: () => import('@/view/User/patient/index.vue'),
      meta: { title: '档案' },
      name: 'patient'
    },
    {
      path: '/address',
      component: () => import('@/view/User/address/index.vue'),
      meta: { title: '地址' },
      name: 'address'
    },
    { path: '/order', component: () => import('@/view/Order/index.vue'), meta: { title: '订单' } },
    {
      path: '/consult/fast',
      component: () => import('@/view/Consult/ConsultFast.vue'),
      meta: { title: '极速拍档' }
    },
    {
      path: '/consult/dep',
      component: () => import('@/view/Consult/ConsultDep.vue'),
      meta: { title: '选择装备' }
    },
    {
      path: '/consult/illness',
      component: () => import('@/view/Consult/ConsultIllness.vue'),
      meta: { title: '战况描述' }
    },
    {
      path: '/consult/pay',
      component: () => import('@/view/Consult/ConsultPay.vue'),
      meta: { title: '知识付费' }
    },
    {
      path: '/consult/:id',
      component: () => import('@/view/Consult/ConsultDetail.vue'),
      meta: { title: '问诊详情' }
    },
    {
      path: '/room',
      component: () => import('@/view/Room/index.vue'),
      meta: { title: '面壁室' },
      beforeEnter(to) {
        if (to.query.payResult === 'false') return '/consult'
      }
    },
    {
      path: '/order/pay',
      component: () => import('@/view/Order/OrderPay.vue'),
      meta: { title: '魔法支付' }
    },
    {
      path: '/order/:id',
      component: () => import('@/view/Order/OrderDetail.vue'),
      meta: { title: '订单详情' }
    },
    {
      path: '/order/logistics/:id',
      component: () => import('@/view/Order/OrderLogistics.vue'),
      meta: { title: '物流详情' }
    },
    {
      path: '/sos',
      component: () => import('@/view/Sos/index.vue'),
      meta: { title: 'iKun' }
    }
  ]
})

// 访问权限控制
router.beforeEach((to: any) => {
  NProgress.start()
  // 1. 定义白名单
  const whiteList = ['/login', '/register', '/login/callback']
  // 用户仓库
  const store = useUserStore()
  // 2. 如果没有登录且不在白名单内，去登录
  if (!store.user?.token && !whiteList.includes(to.path)) return '/login'
})
//显示加载进度条
router.afterEach((to: any) => {
  document.title = `佩-${to.meta.title || ''}`
  NProgress.done()
})

export default router
