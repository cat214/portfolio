<template>
  <div id="app">
    <LeftBackgorund></LeftBackgorund>
    <NavMenu></NavMenu>
    <CenterLine></CenterLine>
    <RightBackgorund></RightBackgorund>
    <transition name="fade">
      <router-view id="router-view"></router-view>
    </transition>
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
  display: flex;
  color: #efecde;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

#router-view  {
  width: 50%;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  overflow: scroll;
}

.fade-enter-active {
  transition: opacity 0.5s;
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-active {
  transition: opacity 0.5s;
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
</style>
