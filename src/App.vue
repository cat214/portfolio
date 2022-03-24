<template>
  <div id="app">
    <LeftBackgorund></LeftBackgorund>
    <CenterLine></CenterLine>
    <RightBackgorund>
    </RightBackgorund>
    <NavMenu></NavMenu>
    <router-view></router-view>
  </div>
</template>

<script>
import 'normalize.css'

import LeftBackgorund from '@/components/LeftBackground.vue'
import RightBackgorund from '@/components/RightBackground.vue'
import CenterLine from '@/components/CenterLine.vue'
import NavMenu from '@/components/NavMenu.vue'

export default {
  name: 'App',
  data: {

  },
  components: {
    LeftBackgorund,
    RightBackgorund,
    CenterLine,
    NavMenu,
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
