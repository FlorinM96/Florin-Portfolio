<template>
  <section class="flex flex-col md:flex-row">
    <the-sidebar />
    <section class="main">
      <the-header v-if="$mq === 'desktop'" />
      <router-view />
    </section>
  </section>
</template>

<script>
import TheSidebar from "@/components/TheSidebar.vue";
import TheHeader from "@/components/TheHeader.vue";
export default {
  components: {
    TheSidebar,
    TheHeader,
  },
};
</script>

<style lang="scss">
.main {
  width: 100%;
}
</style>
