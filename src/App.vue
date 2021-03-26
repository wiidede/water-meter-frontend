<template>
  <wm-header></wm-header>
  <router-view/>
</template>

<script>
import wmHeader from './components/base/wm-header'

export default {
  name: 'App',
  components: {
    wmHeader
  }
}
</script>

<style>
body {
  background-color: #f7f9fc;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #6c757d;
}
</style>
