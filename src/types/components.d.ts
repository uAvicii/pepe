import CpNavBar from '@/components/CpNavBar.vue'
import CpRadioBtn from '@/components/CpRadioBtn.vue'
import CpIcon from '@/components/CpIcon.vue'


declare module 'vue' {
    interface GlobalComponents {
        CpNavBar: typeof CpNavBar
        CpRadioBtn: typeof CpRadioBtn
        CpIcon: typeof CpIcon
    }
}