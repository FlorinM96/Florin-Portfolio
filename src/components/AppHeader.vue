<template>
  <div
    class="app-header flex flex-col px-6 py-8 md:px-16 lg:px-24 xl:py-20 xxxl:py-32 xxxl:px-32"
  >
    <h5
      v-if="preTitle"
      class="pre-title mb-4 font-subtitle-s md:font-subtitle-m"
    >
      {{ preTitle }}
    </h5>
    <h5 v-if="title" class="title font-heading-s md:font-heading-s">
      {{ title }}
    </h5>
    <p v-if="description" class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    preTitle: {
      type: String,
      default: undefined,
    },
    title: {
      type: String,
      default: undefined,
    },
    description: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped></style>
