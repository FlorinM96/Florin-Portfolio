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
