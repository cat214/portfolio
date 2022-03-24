<template>
    <div id="nav-menu">
        <div class="nav-cover">
            <router-link to="/about">About me</router-link>
            <router-link to="/works">Works</router-link>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        // gsap.to('.right-bg-cover', {
        //     duration: 1.9,
        //     x: 1000,
        //     delay: 2.1,
        // })
    }
}
</script>

<style>
#nav-menu {
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
}
.nav-cover {
    padding: 30% 20%;
}
.nav-cover a {
    display: block;
    margin: 10% 0;
    font-size: 26px;
    text-decoration: none;
    color: #efecde;
}
.nav-cover a::after{
    content: "";
    width: 30px;
    height: 3px;
    background-color: #efecde;
    margin-top: 15px;
    margin-left: 80px;
    position: absolute;
}
</style>