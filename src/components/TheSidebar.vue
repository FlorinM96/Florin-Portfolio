<template>
  <div
    class="the-sidebar flex flex-shrink-0 justify-between items-center sticky top-0 z-10 h-16 w-full px-4 py-3 md:flex-col md:p-0 md:left-0 md:w-24 md:h-screen lg:w-32 xxxl:w-48"
  >
    <router-link
      to="/"
      class="home flex justify-center items-center h-full md:h-24 lg:h-32 xxxl:h-48"
    >
      <app-icon icon="logo" class="h-2/4 w-auto md:w-1/2 md:h-auto" />
    </router-link>
    <div
      v-if="$mq === 'desktop'"
      class="w-full h-12 pt-px text-sm leading-relaxed tracking-wider whitespace-nowrap transform -rotate-90 xxxl:h-16 text-secondary-text mb-24"
    >
      Florin Mihalcea
      <br />
      Front-end developer
    </div>
    <app-line-tracker
      :position="$mq !== 'desktop' ? 'bottom' : 'right'"
      :orientation="$mq !== 'desktop' ? 'horizontal' : 'vertical'"
    />
  </div>
</template>

<script>
import AppLineTracker from "@/components/AppLineTracker";
export default {
  components: {
    AppLineTracker,
  },
};
</script>

<style lang="scss" scoped>
.the-sidebar {
  overflow: hidden;
}
.home {
  transition: background 0.25s;
  &:hover {
    background: $white-opacity;
  }
}
</style>
