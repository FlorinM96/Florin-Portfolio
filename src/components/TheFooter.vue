<template>
  <div class="the-footer">
    <div
      class="details-wrapper flex flex-col md:flex-row items-start px-8 md:px-16 xxxl:px-24 xxxl:py-24 py-4 md:py-8"
    >
      <div class="details routes-wrapper py-4 md:py-8 md:mr-40">
        <h6 class="font-heading-s pb-2 lg:pb-4">Navigation</h6>
        <router-link
          v-for="(route, i) in routes"
          :key="i"
          :to="route.to"
          class="router-link py-2 opacity-70 hover:opacity-100"
        >
          {{ route.name }}
        </router-link>
      </div>
      <div class="details contact-wrapper py-8 md:mr-40">
        <h6 class="font-heading-s pb-2 lg:pb-4">Contact</h6>
        <a href="tel:+34642316684" class="contact-item">
          <app-icon icon="phone" class="contact-icon" />
          +34 642316684
        </a>
        <a
          href="mailto:florinmihalcea96@gmail.com?subject=Come work for us!"
          class="contact-item"
        >
          <app-icon
            icon="mail"
            class="contact-icon"
          />florinmihalcea96@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/florinmihalcea96/"
          target="_blank"
          class="contact-item"
        >
          <app-icon icon="linkedin" class="contact-icon" />
          Linkedin
        </a>

        <a
          href="https://github.com/FlorinM96"
          target="_blank"
          class="contact-item"
        >
          <app-icon icon="github" class="contact-icon" />
          Github
        </a>
      </div>
    </div>
    <div
      class="copyright-wrapper flex justify-between items-center px-8 md:px-16 xxxl:px-24 xxxl:py-24 py-4 md:py-8 md:h-24 lg:h-32 xxxl:h-48"
    >
      © 2021 Florin Mihalcea
      <app-button type="circle" icon="arrow-up" @click="scrollToTop" />
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
export default {
  components: { AppButton },
  data: () => ({
    routes: [
      {
        name: "Home",
        to: "/",
      },
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
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.details-wrapper,
.copyright-wrapper {
  border-top: $border;
}
.details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact-item {
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  .contact-icon {
    margin-right: 1rem;
  }
}
.router-link {
  &.active {
    opacity: 1;
  }
}
</style>
