<template>
    <header class="app-header">
        <div>
            <BackIcon :class="{ hidden: isHomePage }" @click="$router.go(-1)" />
            <ExpandIcon @click="toggleFullScreen" />
        </div>
        <img class="logo" src="/icons/logo-clalit-newsite.svg" width="300" height="300" alt="clalit logo">
        <LangDropdown v-if="isDropOpen" @selectFlag="selectFlag" />
        <div class="img-container" @click="isDropOpen = !isDropOpen">
            <img :src="`/flags/${lang.flag}.png`" :alt="lang.lang">
        </div>
    </header>
</template>
<script>
import ExpandIcon from './svgs/ExpandIcon.vue';
import BackIcon from './svgs/BackIcon.vue';
import LangDropdown from './LangDropdown.vue';
export default {
    name: 'AppHeader',
    data() {
        return {
            isDropOpen: false
        }
    },
    created() {
    },
    computed: {
        isHomePage() {
            return this.$route.path === '/';
        },
        lang() {
            return this.$store.getters.lang;
        }
    },
    methods: {
        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        },
        selectFlag(flag) {
            this.isDropOpen = false;
            this.$store.commit({ type: 'setLang', flag });
        },

    },
    components: {
        ExpandIcon,
        BackIcon,
        LangDropdown
    },
}
</script>
