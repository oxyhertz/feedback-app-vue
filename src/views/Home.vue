<template >
    <section class="home">
        <div class="icons-container">
            <component v-for="status in statuses" :key="status.id" :is="status.cmp" @click=" selectStatus(status)">
            </component>
        </div>
    </section>
</template>
<script>
import DissapointedFaceIcon from '../cmps/svgs/DissapointedFaceIcon.vue';
import HappyFaceIcon from '../cmps/svgs/HappyFaceIcon.vue';
import NeutralFaceIcon from '../cmps/svgs/NeutralFaceIcon.vue';
export default {
    created() {
        this.$store.commit({ type: 'setCurrStage', stage: 1 });
    },
    methods: {
        selectStatus(status) {
            this.$store.commit({ type: 'setUserStatus', status });
            this.$router.push(`/${status.path}`);
            console.log("🚀 ~ file: Home.vue:21 ~ statuses ~ statuses:", status)
        }
    },
    computed: {
        statuses() {
            return this.$store.getters.statuses;
        }
    },
    components: {
        DissapointedFaceIcon,
        HappyFaceIcon,
        NeutralFaceIcon
    },
}
</script>