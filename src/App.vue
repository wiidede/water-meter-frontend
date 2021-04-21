<template>
  <wm-header></wm-header>
  <el-scrollbar ref="scrollViewRef">
    <router-view v-slot="{ Component }" class="pt-4 pb-4" style="min-height: calc(100vh - 120px)">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
    <wm-footer></wm-footer>
  </el-scrollbar>
</template>

<script>
import { useRouter } from 'vue-router'
import wmHeader from './components/base/wm-header'
import wmFooter from './components/base/wm-footer'
import { ref } from 'vue'

export default {
  name: 'App',
  components: {
    wmHeader,
    wmFooter
  },
  setup () {
    const scrollViewRef = ref(null)
    const router = useRouter()
    router.beforeEach(() => {
      if (scrollViewRef.value) {
        scrollViewRef.value.wrap.scrollTop = 0
      }
    })
    return { scrollViewRef }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  background-color: #f7f9fc;
  box-sizing: border-box;
  height: 100%;
  padding-top: 60px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6c757d;
  height: 100%;
}
</style>
