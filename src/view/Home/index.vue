<script lang="ts" setup>
import { ref } from 'vue'
import KnowledgeList from './components/KnowledgeList.vue'
import FollowDoctor from './components/FollowDoctor.vue'

import type { IKnowledgeType } from '@/types/consult'

const active = ref<IKnowledgeType>('recommend')
const value = ref('')
const onSearch = (value: string) => {
  console.log(value)
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
        <van-search
          shape="round"
          v-model="value"
          @search="onSearch"
          @clear="onCancel"
          placeholder="Search anything you want"
        />
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
          <router-link to="/" class="nav">
            <cp-icon name="home-graphic"></cp-icon>
            <p class="title">question</p>
            <p class="desc">20s极速回复</p>
          </router-link>
        </van-col>
        <van-col span="8">
          <router-link to="/" class="nav">
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
    <van-tabs shrink sticky v-model:active="active">
      <van-tab title="关注" name="like">
        <follow-doctor></follow-doctor>
        <KnowledgeList type="like" />
      </van-tab>
      <van-tab title="推荐" name="recommend"><KnowledgeList type="recommend" /></van-tab>
      <van-tab title="减脂" name="fatReduction"><KnowledgeList type="fatReduction" /></van-tab>
      <van-tab title="饮食" name="food"><KnowledgeList type="food" /></van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  padding-bottom: 50px;
  ::v-deep() {
    .van-search {
      padding: 0;
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
</style>
