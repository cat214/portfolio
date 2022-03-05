<template>
  <div id="app">
    <CenterLine></CenterLine>
    <!-- <Hello></Hello> -->
    <!-- <router-link to="/hello">ハロー</router-link>
    <router-link to="/world">ワールド</router-link>
    <router-view/> -->
  </div>
</template>

<script>
import Hello from '@/components/Hello.vue'

export default {
  name: 'App',
  components: {
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
  margin-top: 60px;
}
</style>
