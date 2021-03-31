<template>
  <component :is="layout" />
</template>

<script>
import DefaultLayout from "@/layouts";
export default {
  computed: {
    layout() {
      return this.$router.currentRoute.value.meta.layout || "default-layout";
    },
  },
  components: {
    DefaultLayout,
  },
};
</script>

<style lang="scss">
//  roboto
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");
//  roboto mono
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;500;700&display=swap");
#app {
  font-family: "Roboto", sans-serif;
  color: $white;
  background-color: $bg-black;
}
</style>
