<template>
  <el-footer class="d-flex align-items-center justify-content-between">
    <div>水表识别系统</div>
    <div>Copyrights © {{ copyrightsYear }} 王子羽</div>
  </el-footer>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'wm-footer',
  setup () {
    const coYearFrom = String(2021)
    const coYearNow = String(new Date().getFullYear())
    const copyrightsYear = ref(coYearFrom === coYearNow ? coYearNow : coYearFrom + '-' + coYearNow)
    return { copyrightsYear }
  }
}
</script>

<style scoped lang="scss">
.el-footer {
  background: #fff;
  border-top: 1px solid #dee6ed;
  padding: 1rem .75rem;
}
</style>
