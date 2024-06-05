

<template>
  <AppHeader v-if="!isDashboard" />
  <main :class="{ 'align-main': !isDashboard }">
    <RouterView :data="{ name: 'test', cars: [], isReal: false }" @prop-update="(data) => console.log('it works', data)" />
  </main>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue';

export default {
  created() {
    this.$store.dispatch({ type: 'loadSurveys' })
  },
  computed: {
    isDashboard() {
      return this.$route.path === '/dashboard';
    },
  },
  components: {
    AppHeader,
  },
}

</script>
<style>
.align-main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}

.align-main h1 {
  font-size: 7rem;
  color: white;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  direction: rtl;
  padding: 0 50px;
}
</style>