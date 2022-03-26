<template>
    <div id="nav-menu">
        <div class="nav-cover">
            <router-link
                v-on:mouseover.native="mouseOverAction('about')" v-on:mouseleave.native="mouseLeaveAction('about')"
                class="about-link" to="/about"
            >About me</router-link>
            <transition name="hover">
                <span v-if="aboutHoverFlag" class="about-line nav-line"></span>
            </transition>
            <router-link
                v-on:mouseover.native="mouseOverAction('works')" v-on:mouseleave.native="mouseLeaveAction('works')"
                class="works-link" to="/works"
            >Works</router-link>
            <transition name="hover">
                <span v-if="worksHoverFlag" class="works-line nav-line"></span>
            </transition>
        </div>
    </div>
</template>

<script>
import gsap from 'gsap'

export default {
    data: () => {
        return {
            aboutHoverFlag: false,
            worksHoverFlag: false,
        }
    },

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
    },

    methods: {
        mouseOverAction(flag){
            if(flag == 'about') {
                this.aboutHoverFlag = true
            }else if(flag == 'works') {
                this.worksHoverFlag = true
            }
        },
        mouseLeaveAction(flag){
            if(flag == 'about') {
                this.aboutHoverFlag = false
            }else if(flag == 'works') {
                this.worksHoverFlag = false
            }
        }
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
    margin: 100px 0;
    font-size: 26px;
    text-decoration: none;
    color: #efecde;
}
.nav-line {
    width: 30px;
    height: 3px;
    background-color: #efecde;
    position: absolute;
}
.about-line {
    top: 40%;
    left: 70%;
}
.works-line {
    height: 2px;
    top: 54%;
    left: 70%;
}

.hover-enter-active {
    transition: opacity 1s;
    opacity: 0;
}
.hover-enter-to {
  opacity: 1;
}

.hover-leave-active {
  transition: opacity 1s;
  opacity: 0;
}
.hover-leave-to {
  opacity: 0;
}
</style>