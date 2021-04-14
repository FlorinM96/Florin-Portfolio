<template>
  <div
    v-if="!to"
    class="button-rectangle inverted"
    :class="`text-${size}`"
    @click="$emit('click')"
  >
    <span class="button-outline-copy"> {{ text }} </span>
    <span class="button-outline-bottom"></span>
  </div>
  <router-link v-else :to="to" class="router-link">
    <div :class="`text-${size}`" class="button-rectangle inverted">
      <span class="button-outline-copy"> {{ text }} </span>
      <span class="button-outline-bottom"></span>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: "sm",
    },
  },
};
</script>

<style lang="scss">
.button-rectangle {
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: 2rem;
  background: 0 0;
  border-right: 1px solid $white-opacity;
  border-left: 1px solid $white-opacity;
  padding: 0;
  z-index: 0;
  text-transform: uppercase;
  .button-outline-copy:after,
  .button-outline-copy:before,
  .button-outline-bottom::after,
  .button-outline-bottom:before {
    content: "";
    position: absolute;
    height: 1px;
    background: $white-opacity;
    left: 0;
    right: 0;
    transition: all 0.6s cubic-bezier(0.19, 1, 0.22, 1) 50ms;
  }
  .button-outline-copy {
    position: relative;
    display: block;
    padding: 0 2.6rem;
    line-height: 2rem;
    &:after,
    &:before {
      top: 0;
    }
    &:before {
      right: calc(38% + 5px);
    }
    &:after {
      left: calc(62% + 5px);
    }
  }
  .button-outline-bottom {
    &:after,
    &:before {
      bottom: 0;
    }
    &:before {
      right: calc(62% + 5px);
    }
    &:after {
      left: calc(38% + 5px);
    }
  }
  &:hover .button-outline-copy:after {
    left: calc(38% + 5px);
  }
  &:hover .button-outline-copy:before {
    right: calc(62% + 5px);
  }
  &:hover .button-outline-bottom:before {
    right: calc(38% + 5px);
  }
  &:hover .button-outline-bottom:after {
    left: calc(62% + 5px);
  }
}
.router-link {
  opacity: 0.8;
  &.active {
    opacity: 1;
    .button-rectangle {
      border-right: 1px solid $white;
      border-left: 1px solid $white;
      .button-outline-copy:after,
      .button-outline-copy:before,
      .button-outline-bottom::after,
      .button-outline-bottom:before {
        background: $white;
      }
    }
  }
}
</style>
