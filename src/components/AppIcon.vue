<template>
  <component :is="icon" v-bind="$props" class="app-icon" />
</template>

<script>
import { defineAsyncComponent, defineComponent } from "vue";

let components = {};
let iconNames = [];
const requireComponent = require.context("../assets/icons", true, /\w+\.svg$/);

iconNames = requireComponent
  .keys()
  .map((file) => file.replace(/(^.\/)|(\.svg$)/g, ""));
iconNames.forEach((icon) => {
  //component represents the component name
  components[icon] = defineAsyncComponent(() =>
    //import each component dynamically
    import("@/assets/icons/" + icon + ".svg")
  );
});

export default defineComponent({
  components,
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
});
</script>
