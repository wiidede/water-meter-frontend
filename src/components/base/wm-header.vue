<template>
  <el-header class="mb-4 d-flex align-items-center justify-content-between">
    <router-link to="/" class="header-title">水表识别系统</router-link>
    <div class="right-header d-flex align-items-center h-100">
      <router-link :to="head.path" v-for="(head, index) in headList" :key="`head-${index}`" :class="{active: head.active}"
                   class="header-item h-100 mr-1 ml-1 pl-3 pr-3">
        <div class="h-100 d-flex align-items-center">{{ head.label }}</div>
      </router-link>
    </div>
  </el-header>
</template>

<script>
import { reactive, watchEffect, getCurrentInstance } from 'vue'

export default {
  name: 'wm-header',
  setup () {
    const headList = reactive(
      [
        { path: '/', label: '主页', active: false },
        { path: '/about', label: '关于', active: false }
      ]
    )
    const { ctx } = getCurrentInstance()
    watchEffect(() => {
      headList.forEach(head => {
        head.active = ctx.$router.currentRoute.value.path === head.path
      })
    })
    return { headList }
  }
}
</script>

<style scoped lang="scss">
@import "../../element-variables";

.el-header {
  background: white;
  box-shadow: 0 0 2rem 0 rgba(41, 48, 66, .1);

  .header-title {
    font-size: 1.2rem;
    font-weight: 500;
    color: $--color-primary;
    opacity: 0.6;
  }

  .right-header {
    .header-item {
      cursor: pointer;

      &.active {
        color: $--color-primary;

        &>div {
          border-bottom: 3px solid $--color-primary;
        }
      }

      &:hover {
        color: $--color-primary;
      }
    }
  }
}
</style>
