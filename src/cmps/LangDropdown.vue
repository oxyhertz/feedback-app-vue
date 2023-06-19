<template>
    <section class="lang-dropdown">

        <div v-for="flag in flags" :key="flag.id" @click="$emit('selectFlag')">
            <img :src="`/icons/${flag.flag}.png`" alt="">
        </div>

    </section>
</template>
<script>
export default {
    name: '',
    data() {
        return {
            flags: [
                { id: 1, lang: 'en', flag: 'united-states' },
                { id: 3, lang: 'ar', flag: 'uae' },
                { id: 5, lang: 'ru', flag: 'russia' },
            ]
        }
    },
}
</script>
