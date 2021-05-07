<template>
  <div class="projects">
    <app-header
      preTitle="projects"
      title="Here are some of the projects that Florin has been involved in during his studies and work."
    />
    <app-intro
      pre-title="Website migration"
      title="ETS Factory public website"
      description="Florin has been in charge of migrating an old, outdated .NET project to a Single Page Application using Nuxt.js"
      to="/projects/etsfactory"
    />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppIntro from "../components/AppIntro.vue";
export default {
  components: { AppIntro, AppHeader },
};
</script>

<style lang="scss" scoped></style>
