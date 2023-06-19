

<template>
  <AppHeader />
  <main>
    <RouterView />
  </main>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
}

</script>
