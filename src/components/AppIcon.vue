<template>
  <component
    :is="require(`@/assets/icons/${icon}.svg`).default"
    v-bind="$props"
    fill="#fff"
  />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
