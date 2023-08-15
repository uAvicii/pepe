<script lang="ts" setup>
import { ref, nextTick } from 'vue'
import type { Ref } from 'vue'
import KnowledgeList from './components/KnowledgeList.vue'
import FollowDoctor from './components/FollowDoctor.vue'
import { useUserStore, useConsultStore } from '@/stores'
import { ConsultType } from '@/enums'
import type { IKnowledgeType } from '@/types/consult'
import axios from 'axios'

const store = useUserStore()
const stores = useConsultStore()
const active = ref<IKnowledgeType>('recommend')

const values = ref('') // 搜索框值
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
  values.value = ''
}

const onCancel = () => {
  console.log('cancel')
}
</script>

<template>
  <div class="home-page">
    <div class="home-header">
      <div class="con">
        <h1>养蛙</h1>
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
              placeholder="Search anything you want"
            />
          </template>
        </van-popover>
      </div>
    </div>

    <div class="home-navs">
      <van-row>
        <van-col span="8">
          <router-link to="/" class="nav">
            <cp-icon name="home-doctor"></cp-icon>
            <p class="title">student</p>
            <p class="desc">汤米·谢尔比</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/consult/fast" @click="stores.setType(ConsultType.Fast)" class="nav">
            <cp-icon name="home-graphic"></cp-icon>
            <p class="title">question</p>
            <p class="desc">20s极速回复</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/sos" class="nav">
            <cp-icon name="home-prescribe"></cp-icon>
            <p class="title">sos</p>
            <p class="desc">昆汀·塔伦蒂诺</p>
          </router-link>
        </van-col>
      </van-row>
      <van-row>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-order"></cp-icon>
            <p class="title">Arms Order</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-docs"></cp-icon>
            <p class="title">本拉登</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-rp"></cp-icon>
            <p class="title">鱿鱼须</p>
          </router-link>
        </van-col>
        <van-col span="6">
          <router-link to="/" class="nav min">
            <cp-icon name="home-find"></cp-icon>
            <p class="title">Search</p>
          </router-link>
        </van-col>
      </van-row>
    </div>

    <div class="home-banner">
      <van-swipe indicator-color="#fff" :autoplay="2000">
        <van-swipe-item>
          <img src="@/assets/ad.png" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/ad2.jpg" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-overlay :show="isShow">
      <van-loading />
    </van-overlay>
    <van-tabs shrink sticky v-model:active="active">
      <van-tab title="关注" name="like">
        <follow-doctor></follow-doctor>
        <KnowledgeList type="like" />
      </van-tab>
      <van-tab title="推荐" name="recommend"><KnowledgeList type="recommend" /></van-tab>
      <van-tab title="减脂" name="fatReduction"><KnowledgeList type="fatReduction" /></van-tab>
      <van-tab title="饮食" name="food"><KnowledgeList type="food" /></van-tab>
    </van-tabs>
    <van-popup v-model:show="showCenter" round class="popup"
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
    background: linear-gradient(180deg, rgba(62, 206, 197, 0.85), #26bcc6);
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
      padding-left: 5px;
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
  height: 100px;
  img {
    width: 100%;
    height: 100%;
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
</style>
