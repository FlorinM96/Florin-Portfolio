<template>
  <div
    ref="menu"
    class="themenu fixed inset-0 transform -translate-x-full z-10 flex flex-col justify-center w-screen min-w-full h-screen min-h-full"
  >
    <router-link
      v-for="(route, i) in routes"
      :key="i"
      :to="route.to"
      class="router-link px-2 lg:px-4 lg:ml-8 opacity-70 hover:opacity-100"
      :class="{ 'opacity-100	': $route.name === route.name }"
    >
      {{ route.name }}
    </router-link>
  </div>
</template>

<script>
import gsap from "gsap";
import { mapState } from "vuex";
export default {
  data: () => ({
    routes: [
      {
        name: "About",
        to: "/about",
      },
      {
        name: "Projects",
        to: "/projects",
      },
      {
        name: "Education",
        to: "/education",
      },
      {
        name: "Contact",
        to: "/contact",
      },
    ],
  }),
  watch: {
    isMenuOpened(newVal, oldVal) {
      if (newVal !== oldVal) this.toggleMenu();
    },
  },
  methods: {
    toggleMenu() {
      gsap.to(this.$refs.menu, {
        duration: 0.5,
        x: this.isMenuOpened ? 0 : "-100%",
        ease: "power2.in",
      });
    },
  },
  computed: {
    ...mapState(["isMenuOpened"]),
  },
};
</script>

<style lang="scss" scoped>
.themenu {
  background-color: $white;
}
</style>
