<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import type { Ref } from 'vue'
import KnowledgeList from './components/KnowledgeList.vue'
import FollowDoctor from './components/FollowDoctor.vue'
import { useUserStore, useConsultStore, useLangueStore } from '@/stores'
import { ConsultType } from '@/enums'
import type { IKnowledgeType } from '@/types/consult'
import axios from 'axios'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const store = useUserStore()
const stores = useConsultStore()
const langStores = useLangueStore()
const active = ref<IKnowledgeType>('recommend')

let values = ref('') // 搜索框值
let showCenter = ref(false) // 显示搜索结果
let historyList = ref<string[]>([]) // 历史记录列表
const searchResult = ref('') // 搜索结果
const isShow = ref(false) // loading
const showPopover = ref(false) // 历史记录显示
let actions = ref<any[]>([]) // 历史记录列表
const showHistory = ref(false) // 显示历史记录
const searchs = ref<Ref | null>(null) // ref

// 聚焦 显示 历史记录
const onFocus = () => {
  setTimeout(() => {
    if (values.value) return (showPopover.value = false)
    showPopover.value = true

    actions.value = store.searchHistory.slice(0, 9).map((item: any) => {
      return { text: item }
    })
  })
}

// 输入框值改变
const updateValues = (value: string) => {
  showPopover.value = true
  actions.value = actions.value.filter((item: any) => {
    return item.text.indexOf(value) > -1
  })

  if (!value) {
    actions.value = store.searchHistory.slice(0, 9).map((item: any) => {
      return { text: item }
    })
  }
}

// 历史记录选中
const onSelect = async (e: any) => {
  values.value = e.text
  // 聚焦
  searchs.value!.focus()

  await nextTick()

  const inputElement = searchs.value.$el.querySelector('input') // 获取输入框的 DOM 元素
  const inputValueLength = inputElement.value.length
  inputElement.selectionStart = inputValueLength // 将光标位置设置到输入框的末尾
  inputElement.selectionEnd = inputValueLength
}

// 搜索
const onSearch = (value: string) => {
  isShow.value = true
  store.saveSearchHistory(value)
  axios.get(`https://rj9gijf3ua.us.aircode.run/chat?question=${value}`).then((res) => {
    if (res) isShow.value = false
    showCenter.value = true
    searchResult.value = res.data.reply
  })
  historyList.value = store.searchHistory
  historyList.value = historyList.value.reverse()
}

// 关闭历史记录弹窗
const handerClose = () => {
  // 清空搜索框
  values.value = ''
}

const onCancel = () => {
  console.log('cancel')
}
const jiGe = ref('')
const handerZhiyin = () => {
  jiGe.value = 'zhiYin'
}

// 国际化
const handerChangeL = () => {
  let lang = locale.value === 'en' ? 'zh' : 'en'
  langStores.saveLangue(lang)
  locale.value = lang
}
</script>

<template>
  <div class="home-page">
    <div class="home-header">
      <div class="con">
        <h1 @click="handerChangeL">{{ $t('home.title') }}</h1>
        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          @select="onSelect"
          placement="bottom-start"
          style="width: 300px"
        >
          <template #reference>
            <van-search
              ref="searchs"
              autocomplete="off"
              shape="round"
              v-model="values"
              @update:model-value="updateValues"
              @focus="onFocus"
              @blur="showPopover = false"
              @search="onSearch"
              @clear="onCancel"
              :placeholder="t('home.searchText')"
            />
          </template>
        </van-popover>
      </div>
    </div>

    <div class="home-navs">
      <van-row>
        <van-col span="8">
          <router-link to="/" class="nav">
            <cp-icon name="home-bicycle"></cp-icon>
            <p class="title">{{ t('home.userText') }}</p>
            <p class="desc">{{ t('home.userText2') }}</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/consult/fast" @click="stores.setType(ConsultType.Fast)" class="nav">
            <cp-icon name="home-olympic"></cp-icon>
            <p class="title">{{ t('home.oText') }}</p>
            <p class="desc">{{ t('home.oText2') }}</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/sos" class="nav">
            <cp-icon name="home-tree" class="zhiYin" @mouseover="handerZhiyin"></cp-icon>
            <p class="title">{{ t('home.rText') }}</p>
            <p class="desc">{{ t('home.rText2') }}</p>
          </router-link>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-goggles"></cp-icon>
            <p class="title">{{ t('home.bannerText1') }}</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-baseball"></cp-icon>
            <p class="title">{{ t('home.bannerText2') }}</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-boxing"></cp-icon>
            <p class="title">{{ t('home.bannerText3') }}</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-kayak"></cp-icon>
            <p class="title">{{ t('home.bannerText4') }}</p>
          </router-link>
        </van-col>
      </van-row>
    </div>

    <div class="home-banner">
      <van-swipe indicator-color="#fff" :autoplay="2000">
        <!-- <van-swipe-item v-for="index in 9" :key="index">
          <img :src="'src/assets/pepe'+index+'.jpg'" />
        </van-swipe-item> -->

        <van-swipe-item>
          <img src="@/assets/pepe1.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe2.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe3.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe4.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe5.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe6.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe7.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe8.jpg" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/pepe9.jpg" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-tabs shrink sticky v-model:active="active">
      <van-tab :title="t('home.tabText1')" name="like">
        <!-- <follow-doctor></follow-doctor> -->
        <KnowledgeList type="like" />
      </van-tab>
      <van-tab :title="t('home.tabText2')" name="recommend"
        ><KnowledgeList type="recommend"
      /></van-tab>
      <van-tab :title="t('home.tabText3')" name="fatReduction"
        ><KnowledgeList type="fatReduction"
      /></van-tab>
      <van-tab :title="t('home.tabText4')" name="food"><KnowledgeList type="food" /></van-tab>
    </van-tabs>

    <van-overlay :show="isShow">
      <van-loading />
    </van-overlay>
    <van-popup v-model:show="showCenter" @close="handerClose" round class="popup"
      >{{ searchResult }}
      <van-button type="primary" size="mini" @click="showHistory = true"
        >历史记录</van-button
      ></van-popup
    >
    <van-popup
      v-model:show="showHistory"
      :style="{ marginTop: '200px', maxHeight: '300px' }"
      round
      position="center"
    >
      {{ historyList }}</van-popup
    >
    <van-back-top right="7.5vw" bottom="15vh" />
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding-bottom: 50px;
  ::v-deep() {
    .van-search {
      padding: 0;
      width: 345px;
      transform: translateY(-10px);
      background-color: transparent;
    }
  }
}
.home-header {
  height: 100px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 90px;
    background: linear-gradient(180deg, #ef9ac6, #e3ebf5);
    border-bottom-left-radius: 150px 20px;
    border-bottom-right-radius: 150px 20px;
  }
  .con {
    position: relative;
    padding: 0 15px;
    > h1 {
      font-size: 18px;
      color: #fff;
      font-weight: normal;
      padding: 20px 0;
      line-height: 1;
      // float: right;
      display: inline-block;
    }
    .search {
      height: 40px;
      border-radius: 20px;
      box-shadow: 0px 15px 22px -7px rgba(224, 236, 250, 0.8);
      background-color: #fff;
      display: flex;
      align-items: center;
      padding: 0 20px;
      color: var(--cp-dark);
      font-size: 13px;
      .cp-icon {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
}

.home-navs {
  padding: 10px 15px 0 15px;
  .nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    .cp-icon {
      font-size: 48px;
    }
    .zhiYin {
      // animation: v-bind(jiGe) 2s infinite;
      animation: zhiYin 2s infinite;
    }
    @keyframes zhiYin {
      0% {
        transform: scale(1);
      }
      25% {
        transform: translate(10px, -10px);
      }
      50% {
        transform: translate(0, 0);
      }
      75% {
        transform: translate(-10px, -10px);
      }
      100% {
        transform: scale(1);
      }
    }
    .title {
      font-weight: 500;
      margin-top: 5px;
      color: var(--cp-text1);
    }
    .desc {
      font-size: 11px;
      color: var(--cp-tag);
      margin-top: 2px;
    }
    &.min {
      .cp-icon {
        font-size: 31px;
      }
      .title {
        font-size: 13px;
        color: var(--cp-text2);
        font-weight: normal;
      }
    }
  }
}

.home-banner {
  padding: 10px 15px;
  height: 200px;
  img {
    width: 100%;
    height: 200px;
  }
}
::v-deep .van-popup {
  width: 300px;
  max-height: 500px;
  // 换行
  white-space: pre-wrap;
  word-wrap: break-word;

  background-color: aqua;
  padding: 5px 5px;
  transform: translateY(-244.2px);
}
::v-deep .van-overlay {
  z-index: 999999;
}
::v-deep .van-loading {
  position: absolute;
  left: 51%;
  top: 19%;
  transform: translateX(-50%);
}
</style>

<style lang="scss">
.van-popup {
  .van-popover__arrow {
    color: aqua;
  }
  .van-popover__content {
    .van-popover__action {
      width: 100%;
      height: auto;
      background-color: aqua;
      .van-popover__action-text {
        justify-content: start;
      }
    }
  }
}
.van-tabs {
  .van-tab {
    padding: 0 8px;
  }
  .van-tabs__line {
    width: 30px;
    background-color: var(--cp-primary);
  }
}
.van-back-top {
  background-color: #ebb0d3;
}
</style>
