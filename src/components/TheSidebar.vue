<template>
  <div
    class="the-sidebar z-20 flex flex-shrink-0 justify-between items-center sticky top-0 z-10 h-16 w-full px-4 py-3 md:flex-col md:p-0 md:left-0 md:w-24 md:h-screen lg:w-32 xxxl:w-48"
  >
    <router-link
      to="/"
      class="home flex justify-center items-center h-full md:h-24 lg:h-32 xxxl:h-48"
    >
      <app-icon icon="logo" class="h-2/4 w-auto md:w-1/2 md:h-auto" />
    </router-link>
    <transition name="fade">
      <the-menu-icon
        v-if="showMenuButton"
        class="transform scale-75 md:scale-100 origin-right"
      />
    </transition>
    <div v-if="$mq === 'desktop'" class="flex flex-col items-center mb-8">
      <div
        class="w-full h-12 pt-px text-sm leading-relaxed tracking-wider whitespace-nowrap transform -rotate-90 xxxl:h-16 text-secondary-text mb-20"
      >
        Florin Mihalcea
        <br />
        Front-end developer
      </div>
      <app-button
        v-if="$route.name !== 'contact'"
        to="/contact"
        type="circle"
        icon="message"
        title="Let's talk"
      />
    </div>
    <app-line-tracker
      :position="$mq !== 'desktop' ? 'bottom' : 'right'"
      :orientation="$mq !== 'desktop' ? 'horizontal' : 'vertical'"
    />
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import AppLineTracker from "@/components/AppLineTracker";
import TheMenuIcon from "@/components/TheMenu/TheMenuIcon";
import AppButton from "../components/AppButton.vue";

export default {
  components: {
    AppLineTracker,
    TheMenuIcon,
    AppButton,
  },
  data: () => ({
    isUserScrolling: false,
  }),
  computed: {
    showMenuButton() {
      return (
        //if page is scrolled
        this.$mq === "mobile" ||
        this.$mq === "tablet" ||
        (this.$mq === "desktop" && this.isUserScrolling)
      );
    },
  },

  created() {
    this.handleDebouncedScroll = debounce(this.handleScroll, 100);
    window.addEventListener("scroll", this.handleDebouncedScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleDebouncedScroll);
  },
  methods: {
    handleScroll() {
      this.isUserScrolling = window.scrollY > 0;
    },
  },
};
</script>

<style lang="scss" scoped>
.the-sidebar {
  overflow: hidden;
  background: $bg-black;
  @include tablet {
    background: transparent;
  }
}
.home {
  transition: background 0.25s;
  &:hover {
    background: $white-opacity;
  }
}
</style>
