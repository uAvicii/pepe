import {
  cancelOrderAPI,
  followDoctorAPI,
  getPrescriptionPicAPI,
  deleteOrderAPI
} from '@/services/consult'
import { showImagePreview } from 'vant'
import type { ConsultOrderItem, IFollowType } from '@/types/consult'
import { ImagePreview, showSuccessToast, showFailToast } from 'vant'
import { OrderType } from '@/enums'
import { ref } from 'vue'

// 封装查看处方逻辑
export const useShowPrescription = () => {
  const showPrescription = async (id?: string) => {
    if (id) {
      const res = await getPrescriptionPicAPI(id)
      showImagePreview([res.data.data.url])
    }
  }
  return { showPrescription }
}

// 封装取消订单逻辑
export const usecancelOrder = () => {
  const loading = ref(false)
  const onCancel = (item: ConsultOrderItem) => {
    loading.value = true
    cancelOrderAPI(item.id)
      .then(() => {
        item.status = OrderType.ConsultCancel
        item.statusValue = '已取消'
        showSuccessToast('取消成功')
      })
      .catch(() => {
        showFailToast('取消失败')
      })
      .finally(() => {
        loading.value = false
      })
  }
  return { loading, onCancel }
}

export const useDelOrder = (cb: () => void) => {
  // 删除订单
  const loadings = ref(false)
  const onDel = async (item: ConsultOrderItem) => {
    loadings.value = true
    try {
      await deleteOrderAPI(item.id)
      // 成功，通知父组件删除这条信息，提示，详情就是跳转列表页面
      showSuccessToast('删除成功')
      cb()
    } catch (e) {
      showFailToast('删除失败')
    } finally {
      loadings.value = false
    }
  }
  return { loadings, onDel }
}
