<template>
  <div id="app">
    <common-map></common-map>
  </div>
</template>

<script>

import CommonMap from "./components/common-map.vue"

export default {
  name: 'App',
  components: {
    CommonMap,
  }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100%;
}
</style>
