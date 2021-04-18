<template>
  <section ref="layout" class="flex flex-col md:flex-row">
    <the-sidebar />
    <the-menu />
    <section class="main">
      <the-header v-if="$mq === 'desktop'" />
      <!-- to remove padding -->
      <section class="p-6 md:p-8">
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
      </section>
      <the-footer />
    </section>
  </section>
</template>

<script>
import TheSidebar from "@/components/TheSidebar.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMenu from "@/components/TheMenu";
import TheFooter from "@/components/TheFooter";
import * as animator from "@/assets/animations.js";
export default {
  components: {
    TheSidebar,
    TheHeader,
    TheMenu,
    TheFooter,
  },
  mounted() {
    const context = animator.createBackgroundContext(document.body);
    context.init();
    context.animate();
    // console.log(context);
  },
};
</script>

<style lang="scss">
.main {
  width: 100%;
}
.cta-text {
  padding: 0 16px 0 0;
}
</style>
