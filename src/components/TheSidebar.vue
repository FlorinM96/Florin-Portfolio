<template>
  <div
    class="the-sidebar flex flex-col justify-between items-center sticky top-0 z-10 w-full px-4 py-3 md:px-8 md:py-16 md:left-0 md:w-24 md:h-screen lg:w-32 xxxl:w-48"
  >
    <router-link to="/">
      <app-icon icon="logo" class="logo" />
    </router-link>
    <div
      class="hidden w-full h-12 pt-px text-sm leading-relaxed tracking-wider whitespace-nowrap transform -rotate-90 xxxl:h-16 text-secondary-text md:block md:order-3"
    >
      Florin Mihalcea
      <br />
      Front-end developer
    </div>
    <div class="line" />
    <div ref="tracker" class="tracker" />
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  mounted() {
    gsap.fromTo(
      this.$refs.tracker,
      {
        bottom: 0,
        y: "100%",
        scaleY: 0.5,
      },
      {
        duration: 1.5,
        repeat: -1,
        repeatDelay: 3,
        ease: "power2.inOut",
        scaleY: 1,
        top: 0,
        y: "-100%",
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.the-sidebar {
  overflow: hidden;
}
.logo {
  max-width: 100%;
  height: auto;
  cursor: pointer;
}
.line {
  position: absolute;
  right: 1px;
  top: 0;
  bottom: 0;
  width: 1px;
  background-color: white;
}
.tracker {
  position: absolute;
  right: 0px;
  border-radius: 1.5px;
  width: 3px;
  height: 2rem;
  background-color: white;
  bottom: 0;
}
</style>
