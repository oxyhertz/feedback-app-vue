<template lang="">
    <section class="dashboard-container">
        <MainContent />
        <AsideNav />
        <!-- <div class="dashboard-content">
        </div> -->
    </section>
</template>
<script>
import DashboardHeader from '../cmps/dashboard/DashboardHeader.vue';
import AsideNav from '../cmps/dashboard/AsideNav.vue';
import MainContent from '../cmps/dashboard/MainContent.vue';
export default {
    components: {
        DashboardHeader,
        AsideNav,
        MainContent
    }
}
</script>
<style lang="">
    
</style>