

<template>
  <AppHeader />
  <main>
    <Transition>
      <RouterView />
    </Transition>
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
