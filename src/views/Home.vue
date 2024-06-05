<template >
    <section class="home">
        <h1>איך היית מדרג את השירות שקיבלת היום</h1>
        <div class="icons-container">
            <div v-for="status in statuses" :key="status.id">
                <component :is="status.cmp" @click=" selectStatus(status)">
                </component>
            </div>
        </div>
        <input type="text" v-model="dataCopy.title">
    </section>
</template>


<script>

import { surveyService } from '../services/survey.service.local';
import DissapointedFaceIcon from '../cmps/svgs/DissapointedFaceIcon.vue';
import HappyFaceIcon from '../cmps/svgs/HappyFaceIcon.vue';
import NeutralFaceIcon from '../cmps/svgs/NeutralFaceIcon.vue';
import usePropVmodel from '../composables/usePropVmodel';

export default {
    emits: ['prop-update'],
    setup({ data }, context) {
        const dataCopy = usePropVmodel(data, context);
        return {
            dataCopy
        }
    },
    props: {
        data: Object
    },
    data() {
        return {
            surveyToAdd: surveyService.getEmptySurvey()
        }
    },
    mounted() {
        this.$store.commit({ type: 'setCurrStage', stage: 1 });

    },
    methods: {
        selectStatus(status) {
            this.$store.commit({ type: 'setUserStatus', status });

            if (status.status === 'happy') this.$router.push(`/dashboard`);
            else {
                this.$router.push(`/${status.path}`);
            }
            this.addSurvey(status.rate);
        },
        async addSurvey(rate) {
            try {
                await this.$store.dispatch({ type: 'addSurvey', survey: { ...this.surveyToAdd, rate, branch: "עפולה" } })
                this.surveyToAdd = surveyService.getEmptySurvey()
            } catch (err) {
                console.log(err)
                showErrorMsg('Cannot add survey')
            }
        },
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

