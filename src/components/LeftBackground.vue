<template>
    <div id="left-bg">
        <div class="left-bg-cover"></div>
        <div class="left-bg"></div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        gsap.to('.left-bg-cover', {
            duration: 2,
            x: -1200,
            delay: 2.1,
        })
    }
}
</script>

<style>
#left-bg {
    width: 50%;
    height: 100vh;
    position: relative;
}
.left-bg-cover {
    width: 100%;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}
.left-bg {
    width: 100%;
    height: 100vh;
    background-color: #3d5a73;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
    overflow: hidden;
}
</style>