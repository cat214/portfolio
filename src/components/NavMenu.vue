<template>
    <div id="nav-menu">
        <div class="nav-cover">
            <router-link class="about-link" to="/about">About me</router-link>
            <router-link class="works-link" to="/works">Works</router-link>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    mounted() {
        gsap.from('.about-link', {
            duration: 2,
            delay: 4.1,
            y: 0.5,
            opacity: 0,
        })
        gsap.from('.works-link', {
            duration: 2,
            delay: 4.2,
            y: 0.5,
            opacity: 0,
        })
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