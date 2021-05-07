<template>
  <template v-if="type === 'rectangle'">
    <div
      v-if="!to"
      class="button-rectangle inverted"
      :class="`text-${size}`"
      @click="$emit('click')"
    >
      <span class="button-outline-copy font-button"> {{ text }} </span>
      <span class="button-outline-bottom"></span>
    </div>
    <router-link v-else :to="to" class="router-link">
      <div :class="`text-${size}`" class="button-rectangle inverted">
        <span class="button-outline-copy font-button"> {{ text }} </span>
        <span class="button-outline-bottom"></span>
      </div>
    </router-link>
  </template>
  <template v-else>
    <div
      v-if="!to"
      class="button-circle inverted w-8 h-8 md:w-16 md:h-16"
      @click="$emit('click')"
    >
      <svg class="circle-svg button-icon-outline" viewBox="0 0 100 100">
        <circle
          class="circle"
          cx="50"
          cy="50"
          r="47"
          fill="none"
          stroke="#dbdbdb"
          stroke-width="1.2"
          vector-effect="non-scaling-stroke"
        ></circle>
      </svg>
      <span v-if="text" class="text">
        {{ text }}
      </span>
      <app-icon v-else-if="icon" :icon="icon" class="icon" />
    </div>
    <router-link
      v-else
      :to="to"
      class="button-circle inverted router-link w-8 h-8 md:w-16 md:h-16"
    >
      <svg class="circle-svg button-icon-outline" viewBox="0 0 100 100">
        <circle
          class="circle"
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="#dbdbdb"
          stroke-width="1.2"
          vector-effect="non-scaling-stroke"
        ></circle>
      </svg>
      <span v-if="text" class="text">
        {{ text }}
      </span>
      <app-icon v-else-if="icon" :icon="icon" class="icon" />
    </router-link>
  </template>
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
      default: undefined,
    },
    size: {
      type: String,
      default: "sm",
    },
    type: {
      type: String,
      default: "rectangle",
      validator: (value) => {
        return ["rectangle", "circle"].indexOf(value) !== -1;
      },
    },
    icon: {
      type: String,
      default: undefined,
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
  border-right: 1px solid $white-primary;
  border-left: 1px solid $white-primary;
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
    background: $white-primary;
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
      border-right: 1px solid $white-primary;
      border-left: 1px solid $white-primary;
      .button-outline-copy:after,
      .button-outline-copy:before,
      .button-outline-bottom::after,
      .button-outline-bottom:before {
        background: $white-primary;
      }
    }
  }
}
.button-circle {
  cursor: pointer;
  position: relative;
  display: inline-block;
  padding: 0;
  z-index: 0;
  display: block;
  opacity: 1 !important;
  .circle-svg {
    height: 100%;
    width: 100%;
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    @include tablet {
      height: 100%;
      width: 100%;
    }
  }
  .circle {
    stroke-dasharray: 100;
    stroke-dashoffset: 0;
    stroke-width: 2px;
    transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
    @include tablet {
      stroke-dasharray: 80 15;
      stroke-dashoffset: 26;
    }
  }
  &:hover .circle {
    stroke-dashoffset: 111;
  }
  .text,
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
