<script setup lang="ts">
import { ref } from 'vue'
import edc1 from '@/assets/edc1.jpg'
import edc2 from '@/assets/edc2.jpg'

const imgList = [edc1, edc2, edc1, edc2, edc1, edc2, edc1, edc2]

let lineHeight = ref('')
let lineColor = ref('')
setInterval(() => {
  // 随机数 最大600 最小0
  lineHeight.value = Math.floor(Math.random() * 600) + 'px'
  // 随机颜色
  lineColor.value = '#' + Math.floor(Math.random() * 16777215).toString(16)
}, 600)
</script>

<template>
  <p>ss</p>
  <div class="content">
    <div v-for="(url, index) in imgList" :key="index">
      <van-image :src="url"></van-image>
    </div>
  </div>
  <div class="line">s</div>
</template>

<style lang="scss" scoped>
.content {
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    width: 49.5%;
    height: 130px;
    // background-color: aqua;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    // 第偶数个子元素
    &:nth-child(2n) {
      justify-content: start;
      .van-image {
        animation: imgR 2s infinite;
      }
    }
    // 第奇数个子元素
    &:nth-child(2n + 1) {
      justify-content: end;
      .van-image {
        animation: imgL 2s infinite;
      }
    }
    &:nth-child(1) .van-image {
      animation: imgL 1.5s infinite;
    }
    &:nth-child(2) .van-image {
      animation: imgR 1.5s infinite;
    }
    &:nth-child(3) .van-image {
      animation: imgL 2s infinite;
    }
    &:nth-child(4) .van-image {
      animation: imgR 0.5s infinite;
    }
    &:nth-child(5) .van-image {
      animation: imgL 0.5s infinite;
    }
    &:nth-child(6) .van-image {
      animation: imgR 2.5s infinite;
    }
    &:nth-child(7) .van-image {
      animation: imgL 3s infinite;
    }
    &:nth-child(8) .van-image {
      animation: imgR 3s infinite;
    }
    .van-image {
      width: 99px;
      height: 99px;
    }
    @keyframes imgL {
      0% {
        transform: translateX(0) scale(1);
      }
      50% {
        transform: translateX(-60%) scale(1.2);
      }
      100% {
        transform: translateX(0) scale(1);
      }
    }
    @keyframes imgR {
      0% {
        transform: translateX(0) scale(1);
      }
      50% {
        transform: translateX(60%) scale(1.2);
      }
      100% {
        transform: translateX(0) scale(1);
      }
    }
  }
}
.line {
  position: fixed;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
  height: v-bind(lineHeight);
  background-color: v-bind(lineColor);
  border-radius: 50%;
  transition: all 1s;
}
</style>
