<script setup lang="ts">
import { getPatientListAPI, addPatientAPI, editPatientAPI, delPatientAPI } from '@/services/user'
import type { Patient, IAddPatient } from '@/types/user'
import { ref, onMounted, computed, watch } from 'vue'
import { showToast, showSuccessToast, showConfirmDialog } from 'vant'
import Validator from 'id-validator'

const isShow = ref(false)
const list = ref<Patient[]>([])
const loadData = async () => {
  const res = await getPatientListAPI()
  list.value = res.data.data
}

// 新增弹出层数据
const options = [
  { label: '男', value: 1 },
  { label: '女', value: 0 }
]
const initFormData: IAddPatient = {
  name: '',
  idCard: '',
  gender: 1,
  defaultFlag: 0
}
const formData = ref<IAddPatient>({ ...initFormData })
// 默认值需要转换
const defaultFlag = computed({
  get() {
    return formData.value.defaultFlag === 1 ? true : false
  },
  set(value) {
    formData.value.defaultFlag = value ? 1 : 0
  }
})
// 关闭弹出层时，还原表单初始值
watch(isShow, (newValue) => {
  if (!newValue) {
    // 还原表单的初始值
    formData.value = { ...initFormData }
  }
})
const submit = async () => {
  if (!formData.value.name) return showToast('请输入真实姓名')
  if (!formData.value.idCard) return showToast('请输入身份证号')
  // 校验身份证
  const validate = new Validator()
  if (!validate.isValid(formData.value.idCard)) return showToast('身份证格式错误')
  const { sex } = validate.getInfo(formData.value.idCard)
  if (formData.value.gender !== sex) return showToast('性别和身份证不符')

  formData.value.id ? await editPatientAPI(formData.value) : await addPatientAPI(formData.value)

  isShow.value = false
  loadData()
  showSuccessToast(formData.value.id ? '编辑成功' : '添加成功')
}

// 编辑
const showEdit = (item: Patient) => {
  isShow.value = true
  const { id, gender, name, idCard, defaultFlag } = item
  formData.value = { id, gender, name, idCard, defaultFlag }
}

// 删除
const delById = async () => {
  await showConfirmDialog({
    title: '温馨提示',
    message: `您确认要删除 ${formData.value.name} 患者信息吗 ？`,
    cancelButtonText: '取消',
    confirmButtonText: '确认'
  })
  await delPatientAPI(formData.value.id as string)
  isShow.value = false
  loadData()
  showSuccessToast('删除成功')
}
onMounted(() => {
  loadData()
})
</script>

<template>
  <div class="patient-page">
    <cp-nav-bar title="家庭档案" />
    <div class="patient-list">
      <div class="patient-item" v-for="item in list" :key="item.id">
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="id">{{ item.idCard }}</span>
          <span>{{ item.genderValue }}</span>
          <span>{{ item.age }}</span>
        </div>
        <div class="icon"><cp-icon name="user-edit" @click="showEdit(item)" /></div>
        <div class="tag" v-if="item.defaultFlag === 1">默认</div>
      </div>
      <div class="patient-add" @click="isShow = true">
        <cp-icon name="user-add" />
        <p>添加killer</p>
      </div>
      <div class="patient-tip">最多可添加 6 人</div>
    </div>
    <van-popup v-model:show="isShow" position="right">
      <cp-nav-bar
        :title="formData.id ? '编辑killer' : '添加killer'"
        right-text="保存"
        @click-right="submit"
      />
      <van-form autocomplete="off">
        <van-field label="真实姓名" placeholder="请输入真实姓名" v-model="formData.name" />
        <van-field label="身份证号" placeholder="请输入身份证号" v-model="formData.idCard" />
        <van-field label="性别">
          <!-- 单选按钮组件 -->
          <template #input>
            <cp-radio-btn :options="options" v-model="formData.gender"></cp-radio-btn>
          </template>
        </van-field>
        <van-field label="默认就诊人">
          <template #input>
            <van-checkbox round v-model="defaultFlag" />
          </template>
        </van-field>
      </van-form>
      <van-action-bar v-if="formData.id">
        <van-action-bar-button @click="delById">删除</van-action-bar-button>
      </van-action-bar>
    </van-popup>
  </div>
</template>

<style lang="scss" scoped>
.patient-page {
  padding: 0 0 80px;
  ::v-deep() {
    .van-popup {
      width: 100%;
      height: 100%;
    }
  }
}
.patient-list {
  padding: 15px;
}
.patient-item {
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: var(--cp-bg);
  border-radius: 8px;
  margin-bottom: 15px;
  position: relative;
  border: 1px solid var(--cp-bg);
  transition: all 0.3s;
  overflow: hidden;
  .info {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    span {
      color: var(--cp-tip);
      margin-right: 20px;
      line-height: 30px;
      &.name {
        font-size: 16px;
        color: var(--cp-text1);
        width: 80px;
        margin-right: 0;
      }
      &.id {
        color: var(--cp-text2);
        width: 180px;
      }
    }
  }
  .icon {
    color: var(--cp-tag);
    width: 20px;
    text-align: center;
  }
  .tag {
    position: absolute;
    right: 60px;
    top: 21px;
    width: 30px;
    height: 16px;
    font-size: 10px;
    color: #fff;
    background-color: var(--cp-primary);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.selected {
    border-color: var(--cp-primary);
    background-color: var(--cp-plain);
    .icon {
      color: var(--cp-primary);
    }
  }
}
.patient-add {
  background-color: var(--cp-bg);
  color: var(--cp-primary);
  text-align: center;
  padding: 15px 0;
  border-radius: 8px;
  .cp-icon {
    font-size: 24px;
  }
}
.patient-tip {
  color: var(--cp-tag);
  padding: 12px 0;
}
// 底部操作栏
.van-action-bar {
  padding: 0 10px;
  margin-bottom: 10px;
  .van-button {
    color: var(--cp-price);
    background-color: var(--cp-bg);
  }
}
</style>
