<script setup lang="ts">
import { ref } from 'vue'
import { showImagePreview } from 'vant'
import { useI18n } from 'vue-i18n'
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
</script>

<template>
  <div class="article-page">
    <header>{{ t('message.tipsText') }}:</header>
    <!-- <p>{{ t('message.homeText') }} {{ t('message.mineText') }}</p> -->
    <van-signature
      @submit="onSubmit"
      @clear="onClear"
      @signing="handerSigning"
      :clear-button-text="t('message.clearText')"
      :confirm-button-text="t('message.submitText')"
      :pen-color="color"
    />
    <van-image @click="showImage" v-if="image" :src="image" />
  </div>
</template>

<style lang="scss" scoped></style>
