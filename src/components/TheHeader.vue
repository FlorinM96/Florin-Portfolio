<template>
  <div
    class="the-header flex justify-end align-center md:px-16 md:py-8 lg:px-24 lg:py-16 xxxl:px-32 xxxl:py-24"
  >
    <router-link
      v-for="(route, i) in routes"
      :key="i"
      :to="route.to"
      class="router-link p-2 lg:px-4 lg:py-2 lg:ml-8 opacity-70 hover:opacity-100"
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

<style></style>
