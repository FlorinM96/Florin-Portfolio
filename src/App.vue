<template>
  <section class="flex flex-col md:flex-row bg-black">
    <the-sidebar />
    <router-view />
  </section>
</template>

<script>
import TheSidebar from "@/components/TheSidebar.vue";
export default {
  components: {
    TheSidebar,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
