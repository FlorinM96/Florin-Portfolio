<template>
  <section class="flex flex-col md:flex-row">
    <the-sidebar />
    <the-menu />
    <section class="main">
      <the-header v-if="$mq === 'desktop'" />
      <section class="p-6 md:p-8">
        <router-view />
      </section>
      <div
        v-if="$route.name !== 'contact' && $mq !== 'mobile'"
        class="cta cursor-pointer fixed bottom-10 right-10 flex items-center"
        @click="$router.push('/contact')"
      >
        <span class="cta-text">Let's talk!</span>
        <app-button
          to="/contact"
          type="circle"
          icon="message"
          class="cta-icon"
        />
      </div>
    </section>
  </section>
</template>

<script>
import TheSidebar from "@/components/TheSidebar.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheMenu from "@/components/TheMenu";
import AppButton from "../components/AppButton.vue";
export default {
  components: {
    TheSidebar,
    TheHeader,
    TheMenu,
    AppButton,
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
.cta-icon {
  background-color: $bg-black;
  border-radius: 50%;
}
</style>
