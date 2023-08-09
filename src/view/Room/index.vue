<script setup lang="ts">
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'
import { onMounted, onUnmounted, ref } from 'vue'
import { baseURL } from '@/utils/request'
import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import { MsgType } from '@/enums'
import type { Message, TimeMessages } from '@/types/room'
import RoomStatus from './components/RoomStatus.vue'
import RoomAction from './components/RoomAction.vue'
import RoomMessage from './components/RoomMessage.vue'

const store = useUserStore()
const route = useRoute()

let socket: Socket
const list = ref<Message[]>([])

onMounted(() => {
  socket = io(baseURL, {
    auth: {
      Authorization: `Bearer ${store.user?.token}`
    },
    query: {
      orderId: route.query.orderId
    }
  })
  // 聊天记录
  // socket.on('chatMsgList', ({ data }: { data: TimeMessages[] }) => {
  //   data.length > 0 ? list.value.push(...data[0].items) : ''
  // })
})
onUnmounted(() => {
  socket.close()
})
// socket.on('connect', () => {
//   // 建立连接成功
//   console.log('connect success')
// })
// // 发送消息
// socket.emit('chat message', '消息内容')
// // 接收消息
// socket.on('chat message', (ev) => {
//   // ev 是服务器发送的消息
//   console.log(ev)
// })
</script>

<template>
  <div class="room-page">
    <cp-nav-bar title="面壁室" />
    <room-status />
    <room-message :list="list" />
    <room-action />
  </div>
</template>

<style lang="scss" scoped>
.room-page {
  padding-top: 90px;
  padding-bottom: 60px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--cp-bg);
  .van-pull-refresh {
    width: 100%;
    min-height: calc(100vh - 150px);
  }
}
</style>
