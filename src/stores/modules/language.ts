import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangueStore = defineStore(
  'language',
  () => {
    const langue = ref<User>()
 
    const saveLangue = (u: User) => {
        langue.value = u
    }
 
    return {
      langue,
      saveLangue
    }
  },
  {
    persist: true
  }
)
