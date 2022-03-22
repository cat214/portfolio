<template>
    <div id="right-bg">
        <div class="right-bg-cover"></div>
        <div class="right-bg"></div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        gsap.to('.right-bg-cover', {
            duration: 1.9,
            x: 1000,
            delay: 2.1,
        })
    }
}
</script>

<style>
#right-bg {
    width: 50%;
    height: 100vh;
    position: relative;
}
.right-bg-cover {
    width: 100%;
    height: 100vh;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
}
.right-bg {
    width: 100%;
    height: 100vh;
    background-color: #ac3434;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    overflow: hidden;
}
</style>