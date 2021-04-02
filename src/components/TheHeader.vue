<template>
  <div
    class="the-header flex justify-end items-center md:px-16 lg:px-24 xxxl:px-32 xxxl:py-24 py-4 md:py-8 md:h-24 lg:h-32 xxxl:h-48"
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
};
</script>

<style lang="scss" scoped>
.the-header {
  border-bottom: 1px solid $white-opacity;
}
</style>
