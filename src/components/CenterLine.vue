<template>
    <div id="center-line">
        <div class="center-line"></div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        var tl = gsap.timeline();
        tl.to('.center-line', {
            duration: 2,
            height: "100%",
            delay: 0.1,
        })
        tl.to('.center-line', {
            duration: 1,
            opacity: 0,
        })
    }
}
</script>

<style>
.center-line {
    background-color: #efecde;
    width: 1px;
    height: 0px;
    position: absolute;
    right: 50%;
    top: 0;
    z-index: 100;
}
</style>