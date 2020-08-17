<template>
  <div id="app">
    <router-view/>
    <router-link class="router-link" to="/">首頁</router-link>
    <router-link class="router-link" to="/demo">Demo頁</router-link>
    <router-link class="router-link" to="/mobile">Mobile頁</router-link>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss" scoped>

#app {
  .router-link {
    margin: 0 10px;
  }
}
</style>
