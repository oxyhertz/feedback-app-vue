<template>
    <section class="lang-dropdown">

        <div class="flag-wrapper" v-for="flag in flags" :key="flag.id" @click="$emit('selectFlag', flag)">
            <span>{{ flag.lang }}</span>
            <img :src="`/flags/${flag.flag}.png`" alt="">
        </div>

    </section>
</template>
<script>
export default {
    name: '',
    data() {
        return {
            flags: [
                { id: 1, lang: 'אנגלית', flag: 'usa', },
                { id: 3, lang: 'ערבית', flag: 'uae' },
                { id: 5, lang: 'רוסית', flag: 'russia' },
                { id: 4, lang: 'עברית', flag: 'israel' },
            ]
        }
    },
}
</script>
