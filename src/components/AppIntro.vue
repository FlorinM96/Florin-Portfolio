<template>
  <div class="app-intro flex">
    <div
      class="left relative overflow-hidden w-2/3 px-6 py-2 md:px-16 lg:px-12 xl:py-6 xxxl:py-8 xxxl:px-24"
    >
      <h5 v-if="preTitle" class="pre-title font-subtitle-s md:font-overline-m">
        {{ preTitle }}
      </h5>
      <h5
        v-if="title"
        class="title font-heading-m md:font-heading-xl max-w-3/4"
      >
        {{ title }}
      </h5>
      <app-line-tracker />
    </div>
    <div class="right w-1/3 flex flex-col min-h-4/4">
      <div class="top"></div>
      <div class="bottom flex flex-col justify-between">
        <p v-if="description" class="description font-paragraph-l">
          {{ description }}
        </p>
        <app-button v-if="to" :to="to" text="see more" class="self-end" />
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
import AppLineTracker from "./AppLineTracker.vue";

export default {
  components: { AppLineTracker, AppButton },
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
    to: {
      type: String,
      default: undefined,
    },
  },
};
</script>

<style lang="scss" scoped>
.app-intro {
  min-height: 35rem;
  border-top: $border;
}
.right {
  .top,
  .bottom {
    min-height: 50%;
    padding: 4rem;
  }
  .bottom {
    border-top: $border;
  }
}
</style>
