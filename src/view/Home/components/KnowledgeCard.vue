<script setup lang="ts">
import { showImagePreview } from 'vant'

const showPhoto = (url: string) => {
  showImagePreview([url])
}
const imgList = [
  'https://image-cdn.neatoshop.com/styleimg/79482/none/gray/default/400251-20;1539015967y.jpg',
  'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
  'https://pbs.twimg.com/media/FvtmITrXsAEZ2gr?format=jpg&name=4096x4096'
]
</script>

<template>
  <div class="knowledge-card van-hairline--bottom">
    <div class="head">
      <van-image
        round
        class="avatar"
        src="./x.png"
      ></van-image>
      <div class="info">
        <p class="name">巴閉超</p>
        <p class="dep van-ellipsis">美利坚 哥潭市</p>
      </div>
      <van-button class="btn" size="small" round>+ 关注</van-button>
    </div>
    <div class="body">
      <h3 class="title van-ellipsis">林黛玉一拳打死鲁智深🤏</h3>
      <p class="tag">
        <span># 正确的</span>
        <span># 中肯的</span>
      </p>
      <p class="intro van-multi-ellipsis--l2">
        6年的时间，不管是减重，还是护肤，我都做到了满分自律 回顾以前，嗯......也有蛮多经验想说说
        不过，话说在前面 ① 玻璃心的别看，我下面会说“狠话”“重话” ② 逻辑会乱，因为想到啥写啥 ③
        以下会有推荐/链接，不是带货（我有工资，不靠这个挣钱） ④ 杠精退退退，你杠就是你对
      </p>
      <div class="imgs">
        <van-image v-for="i in imgList" :key="i" :src="i" @click="showPhoto(i)" />
      </div>
      <p class="logs">
        <span>10 收藏</span>
        <span>50 评论</span>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.knowledge-card {
  padding: 20px 0 16px;
  .head {
    display: flex;
    align-items: center;
    .avatar {
      width: 38px;
      height: 38px;
      margin-right: 10px;
    }
    .info {
      width: 200px;
      padding-right: 10px;
      .name {
        color: var(--cp-text2);
      }
      .dep {
        color: var(--cp-tip);
        font-size: 12px;
      }
    }
    .btn {
      padding: 0 12px;
      border-color: var(--cp-primary);
      color: var(--cp-primary);
      height: 28px;
      width: 72px;
    }
  }
  .body {
    .title {
      font-size: 16px;
      margin-top: 8px;
      font-weight: normal;
    }
    .tag {
      margin-top: 6px;
      > span {
        color: var(--cp-primary);
        margin-right: 20px;
        font-size: 12px;
      }
    }
    .intro {
      margin-top: 7px;
      line-height: 2;
      color: var(--cp-text3);
    }
    .imgs {
      margin-top: 7px;
      display: flex;
      .van-image {
        width: 106px;
        height: 106px;
        margin-right: 12px;
        border-radius: 12px;
        overflow: hidden;
        &:last-child {
          margin-right: 0;
        }
      }
      &.large {
        .van-image {
          width: 185px;
          height: 125px;
        }
      }
    }
    .logs {
      margin-top: 10px;
      > span {
        color: var(--cp-tip);
        margin-right: 16px;
        font-size: 12px;
      }
    }
  }
}
</style>
