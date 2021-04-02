<template>
  <wm-header></wm-header>
  <el-scrollbar>
    <router-view class="pt-4 pb-4" style="min-height: calc(100vh - 60px)"/>
    <wm-footer></wm-footer>
  </el-scrollbar>
</template>

<script>
import wmHeader from './components/base/wm-header'
import wmFooter from './components/base/wm-footer'

export default {
  name: 'App',
  components: {
    wmHeader,
    wmFooter
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6c757d;
  height: 100%;
}
</style>
