<template>
    <div id="center-line">
        <div class="center-line"></div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        gsap.to('.center-line', {
            duration: 2,
            height: "100%",
            delay: 0.1,
        })
    }
}

</script>

<style>
.center-line {
    background-color: black;
    width: 2px;
    height: 0px;
    position: absolute;
    right: 50%;
    top: 0;
}
</style>