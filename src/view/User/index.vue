<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getUserInfoAPI } from '@/services/user'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
import { showConfirmDialog } from 'vant'
import type { User } from '@/types/user'

const router = useRouter()
const store = useUserStore()
const userInfo = ref<User>({} as User)

const loadData = async () => {
  const res = await getUserInfoAPI()
  userInfo.value = res.data.data
}

const tools = [
  { label: '阿帕奇', path: '/consult' },
  { label: '本拉登', path: '/' },
  { label: '档案', path: '/patient' },
  { label: '设置', path: '/' }
]

const loginOut = async () => {
  await showConfirmDialog({
    title: '温馨提示',
    message: '您确认要退出洛克希德马丁吗？',
    cancelButtonText: '取消',
    confirmButtonText: '确认'
  })
  store.delUser()
  router.push('/login')
}

const goDetail = (path: any) => {
  router.push(path)
}

// loadData()
onMounted(loadData)
</script>

<template>
  <div class="user-page" v-if="userInfo">
    <!-- 水印标签 -->
    <!-- <van-watermark
      image="/public/x.png"
      :gap-x="10"
      :gap-y="10"
      :width="50"
      :height="50"
      opacity="0.1"
    /> -->

    <div class="user-page">
      <div class="user-page-head">
        <div class="top">
          <van-image round fit="cover" :src="userInfo.avatar" />
          <div class="name">
            <p>{{ userInfo.account }}</p>
            <p><van-icon name="edit" /></p>
          </div>
        </div>
        <van-row>
          <van-col span="6">
            <p>{{ userInfo.collectionNumber }}</p>
            <p>收藏</p>
          </van-col>
          <van-col span="6">
            <p>{{ userInfo.likeNumber }}</p>
            <p>关注</p>
          </van-col>
          <van-col span="6">
            <p>{{ userInfo.score }}</p>
            <p>积分</p>
          </van-col>
          <van-col span="6">
            <p>{{ userInfo.couponNumber }}</p>
            <p>优惠券</p>
          </van-col>
        </van-row>
      </div>
      <div class="user-page-order">
        <div class="head">
          <h3>Arms Order</h3>
          <router-link to="/order">全部订单 <van-icon name="arrow" /></router-link>
        </div>
        <van-row>
          <van-col span="6">
            <van-badge :content="userInfo.orderInfo?.paidNumber || ''">
              <cp-icon name="user-paid" />
            </van-badge>
            <p>待付款</p>
          </van-col>
          <van-col span="6">
            <van-badge :content="userInfo.orderInfo?.shippedNumber || ''">
              <cp-icon name="user-shipped" />
            </van-badge>
            <p>待发货</p>
          </van-col>
          <van-col span="6">
            <van-badge :content="userInfo.orderInfo?.receivedNumber || ''">
              <cp-icon name="user-received" />
            </van-badge>
            <p>待收货</p>
          </van-col>
          <van-col span="6">
            <van-badge :content="userInfo.orderInfo?.finishedNumber || ''">
              <cp-icon name="user-finished" />
            </van-badge>
            <p>已完成</p>
          </van-col>
        </van-row>
      </div>
      <div class="user-page-group">
        <h3>快捷工具</h3>
        <van-cell
          :title="item.label"
          is-link
          :to="item.path"
          :border="false"
          v-for="(item, i) in tools"
          :key="i"
          @click="goDetail(item.path)"
        >
          <template #icon><cp-icon :name="`user-tool-0${i + 1}`" /></template>
        </van-cell>
      </div>
      <a class="logout" href="javascript:;" @click="loginOut">退出登录</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-page {
  background-color: var(--cp-bg);
  min-height: calc(100vh - 150px);
  padding: 0 7.5px 65px;
  // 头部
  &-head {
    height: 200px;
    background: linear-gradient(180deg, rgba(44, 181, 165, 0.46), rgba(44, 181, 165, 0));
    margin: 0 -15px;
    padding: 0 15px;
    .top {
      display: flex;
      padding-top: 50px;
      align-items: center;
      .van-image {
        width: 70px;
        height: 70px;
      }
      .name {
        padding-left: 10px;
        p {
          &:first-child {
            font-size: 18px;
            font-weight: 500;
          }
          &:last-child {
            margin-top: 10px;
            color: var(--cp-primary);
            font-size: 16px;
          }
        }
      }
    }
    .van-row {
      margin: 0 -15px;
      padding-top: 15px;
      p {
        text-align: center;
        &:first-child {
          font-size: 18px;
          font-weight: 500;
        }
        &:last-child {
          color: var(--cp-dark);
          font-size: 12px;
          padding-top: 4px;
        }
      }
    }
  }
  // 订单
  &-order {
    background-color: #fff;
    border-radius: 8px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    .head {
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      padding: 0 15px;
      a {
        color: var(--cp-tip);
      }
    }
    .van-col {
      text-align: center;
      .cp-icon {
        font-size: 28px;
      }
      p {
        font-size: 12px;
        padding-top: 4px;
      }
    }
  }
  // 分组
  &-group {
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
    h3 {
      padding-left: 16px;
      line-height: 44px;
    }
    .van-cell {
      align-items: center;
    }
    .cp-icon {
      font-size: 17px;
      margin-right: 10px;
    }
  }
  .logout {
    display: block;
    margin: 20px auto;
    width: 100px;
    text-align: center;
    color: var(--cp-price);
  }
}
</style>
