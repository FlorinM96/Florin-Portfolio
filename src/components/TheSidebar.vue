<template>
  <div
    class="the-sidebar z-20 flex flex-shrink-0 justify-between items-center sticky top-0 z-10 h-16 w-full px-4 py-3 md:flex-col md:p-0 md:left-0 md:w-24 md:h-screen lg:w-32 xxxl:w-48"
  >
    <router-link to="/" class="home flex justify-center items-center h-full md:h-24 lg:h-32 xxxl:h-48">
      <app-icon icon="logo" class="h-2/4 w-auto md:w-1/2 md:h-auto" />
    </router-link>
    <transition name="fade">
      <the-menu-icon v-show="showMenuButton" class="" />
    </transition>
    <div
      v-if="$mq === 'desktop'"
      class="w-full h-12 pt-px text-sm leading-relaxed tracking-wider whitespace-nowrap transform -rotate-90 xxxl:h-16 text-secondary-text mb-24"
    >
      Florin Mihalcea
      <br />
      Front-end developer
    </div>
    <app-line-tracker :position="$mq !== 'desktop' ? 'bottom' : 'right'" :orientation="$mq !== 'desktop' ? 'horizontal' : 'vertical'" />
  </div>
</template>

<script>
import AppLineTracker from "@/components/AppLineTracker";
import TheMenuIcon from "@/components/TheMenu/TheMenuIcon";
export default {
  components: {
    AppLineTracker,
    TheMenuIcon,
  },
  computed: {
    showMenuButton() {
      return (
        //if page is scrolled
        this.$mq === "mobile" || this.$mq === "tablet" || (this.$mq === "desktop" && true)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.the-sidebar {
  overflow: hidden;
  background: $bg-black;
}
.home {
  transition: background 0.25s;
  &:hover {
    background: $white-opacity;
  }
}
</style>
