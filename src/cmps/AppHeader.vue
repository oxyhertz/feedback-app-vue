<template>
    <header class="app-header">
        <div>
            <BackIcon :class="{ hidden: isHomePage }" @click="$router.go(-1)" />
            <ExpandIcon @click="toggleFullScreen" />
        </div>
        <LangDropdown v-if="isDropOpen" @selectFlag="isDropOpen = false" />
        <div class="img-container" @click="isDropOpen = !isDropOpen">
            <img src="/icons/israel-flag.png" alt="israel-flag">
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
        }
    },
    methods: {
        toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen();
            } else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    },
    components: {
        ExpandIcon,
        BackIcon,
        LangDropdown
    },
}
</script>
