<template>
    <div class="inf-card">


        <div class="icon">
            <component :is="svg"></component>
        </div>
        <div class="content">
            <p class="stat-title">{{ statTitle }}</p>
            <div class="stat-content">
                <span class="suffix">{{ suffix }}</span>
                <span class="prefix">{{ prefix }}</span>
                <span class="stat">{{ stat }}</span>
            </div>
        </div>
    </div>
</template>
<script>
import BuyCart from '../svgs/BuyCart.vue';
import ClickIcon from '../svgs/ClickIcon.vue';
import ClientsIcon from '../svgs/ClientsIcon.vue';
import SurveyIcon from '../svgs/SurveyIcon.vue';
import HeartIcon from '../svgs/HeartIcon.vue';
export default {
    name: '',
    props: {
        statTitle: {
            type: String,
            default: 'Today\'s Clicks'
        },
        stat: {
            type: String,
            default: '13,200'
        },
        prefix: {
            type: String,
            default: '+'
        },
        suffix: {
            type: String,
            default: '+10%'
        },
        svg: {
            type: String,
            default: 'BuyCart'
        }
    },
    components: {
        BuyCart,
        ClickIcon,
        ClientsIcon,
        HeartIcon,
        SurveyIcon

    }
}
</script>
