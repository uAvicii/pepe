<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { showImagePreview } from 'vant'
import { useI18n } from 'vue-i18n'
import users from '@/mock/index'
const { t } = useI18n()

const image = ref('')
const color = ref('aqua')
const onSubmit = (e: any) => {
  image.value = e.image
}
const showImage = () => {
  showImagePreview({ images: [image.value], showIndex: false })
}
const onClear = () => {
  console.log('onClear')
}
const handerSigning = (e: any) => {
  // 随机颜色
  color.value = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
}

const userList = users
// onMounted(async () => {
//   const res = await axios.get('/api/users')
//   userList.value = res.data.data
// })
</script>

<template>
  <div class="article-page">
    <header>{{ t('message.tipsText') }}:陈述事实杀杀杀三生三世十里桃花杀杀杀</header>
    <van-signature
      @submit="onSubmit"
      @clear="onClear"
      @signing="handerSigning"
      :clear-button-text="t('message.clearText')"
      :confirm-button-text="t('message.submitText')"
      :pen-color="color"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in userList" :key="item.id">
        <img :src="item.imageUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <van-image @click="showImage" v-if="image" :src="image" />
  </div>
</template>

<style lang="scss" scoped></style>
