<template>
  <div
    ref="menu"
    class="themenu fixed inset-0 transform translate-x-full px-6 md:-translate-x-full z-10 flex flex-col justify-center items-end md:items-start w-screen min-w-full h-screen min-h-full md:pl-24 lg:pl-32 xxxl:pl-48"
  >
    <router-link
      v-for="(route, i) in routes"
      :key="i"
      :to="route.to"
      class="router-link font-heading-s px-2 lg:px-4 lg:ml-8 opacity-70 hover:opacity-100 md:font-heading-l"
      :class="{ 'opacity-100	': $route.name === route.name }"
    >
      <span @click="toggleMenuState"> {{ route.name }} </span>
    </router-link>
  </div>
</template>

<script>
import gsap from "gsap";
import { mapState, mapMutations } from "vuex";
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
      if (newVal !== oldVal)
        newVal ? this.toggleMenu.play() : this.toggleMenu.reverse();
    },
    $route() {
      if (this.isMenuOpened) this.toggleMenuState();
    },
  },
  computed: {
    ...mapState(["isMenuOpened"]),
  },
  mounted() {
    this.toggleMenu = gsap.to(this.$refs.menu, {
      duration: 0.75,
      x: 0,
      ease: "power2.in",
      paused: true,
    });
  },
  methods: {
    ...mapMutations(["toggleMenuState"]),
  },
};
</script>

<style lang="scss" scoped>
.themenu {
  background-color: $bg-black;
}
.router-link {
  transition: all 0.25s;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
    transform: translateX(5%);
  }
}
</style>
