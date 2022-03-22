<template>
  <div id="app">
    <LeftBackgorund></LeftBackgorund>
    <CenterLine></CenterLine>
    <RightBackgorund></RightBackgorund>
    <!-- <router-link to="/hello">ハロー</router-link>
    <router-link to="/world">ワールド</router-link>
    <router-view/> -->
  </div>
</template>

<script>
import 'normalize.css'

import LeftBackgorund from '@/components/LeftBackground.vue'
import RightBackgorund from '@/components/RightBackground.vue'
import CenterLine from '@/components/CenterLine.vue'

export default {
  name: 'App',
  data: {

  },
  components: {
    LeftBackgorund,
    RightBackgorund,
    CenterLine,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
}
</style>
