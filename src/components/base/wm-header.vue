<template>
  <el-header class="w-100 d-flex align-items-center justify-content-between">
    <router-link to="/" class="header-title logo">水表识别系统</router-link>
    <div class="right-header d-flex align-items-center h-100">
      <router-link :to="head.path" v-for="(head, index) in headList" :key="`head-${index}`" :class="{active: head.active}"
                   class="header-item h-100 mr-1 ml-1 pl-3 pr-3">
        <div class="header-item-text h-100 d-flex align-items-center">{{ head.label }}</div>
      </router-link>
    </div>
  </el-header>
</template>

<script>
import { reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'wm-header',
  setup () {
    const headList = reactive(
      [
        { path: '/', label: '主页', active: false },
        { path: '/about', label: '关于', active: false }
      ]
    )
    const router = useRouter()
    watchEffect(() => {
      headList.forEach(head => {
        head.active = router.currentRoute.value.path === head.path
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
  position: fixed;
  top: 0;
  z-index: 2000;

  .header-title {
    font-size: 1.2rem;
    font-weight: 500;
    color: $--color-primary;
    opacity: 0.6;
  }

  .right-header {
    .header-item {
      cursor: pointer;
      transition: 0.3s all ease;

      .header-item-text {
        position: relative;

        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 2px;
          transition: 0.3s all ease;
        }
      }

      &.active {
        color: $--color-primary;

        .header-item-text {
          &:after {
            background: $--color-primary;
          }
        }
      }

      &:hover {
        color: $--color-primary;
      }
    }
  }
}
</style>
