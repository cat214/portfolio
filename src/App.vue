<template>
  <div id="app">
    <LeftBackgorund></LeftBackgorund>
    <CenterLine></CenterLine>
    <RightBackgorund></RightBackgorund>
    <NavMenu></NavMenu>
    <router-view id="router-view"></router-view>
  </div>
</template>

<script>
import gsap from 'gsap'

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
  },

  mounted() {
    gsap.from('#router-view', {
        duration: 2,
        delay: 4.1,
        opacity: 0,
    })
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

#router-view  {
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
}
</style>
