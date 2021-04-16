<template>
  <figure class="button-icon themenuicon" @click="toggleMenuState">
    <svg ref="svg" width="35" height="25" viewBox="0 0 32 22">
      <g
        ref="lines"
        :class="{ activeButton: isMenuOpened }"
        class="button-icon-stroke"
        fill="none"
        stroke-width="3"
        stroke-linecap="round"
      >
        <line
          ref="top"
          x1="0"
          y1="1"
          x2="30"
          y2="1"
          stroke-dasharray="30"
          class="line"
        ></line>
        <line
          ref="mid"
          x1="0"
          y1="11"
          x2="30"
          y2="11"
          stroke-dasharray="30"
          class="line"
        ></line>
        <line
          ref="bot"
          x1="0"
          y1="21"
          x2="30"
          y2="21"
          stroke-dasharray="30"
          class="line"
        ></line>
      </g>
    </svg>
  </figure>
</template>

<script>
import gsap from "gsap";
import { mapState, mapMutations } from "vuex";
export default {
  watch: {
    isMenuOpened(newValue) {
      newValue ? this.clickAnimation.play() : this.clickAnimation.reverse();
    },
  },
  computed: {
    ...mapState(["isMenuOpened"]),
  },
  mounted() {
    const lines = {
      top: this.$refs.top,
      mid: this.$refs.mid,
      bot: this.$refs.bot,
    };
    this.loadTween = new gsap.timeline({ paused: true, reversed: false })
      .to(lines.top, 0.25, { strokeDashoffset: -14, ease: "Power2.InOut" }, 0)
      .to(lines.mid, 0.25, { strokeDashoffset: 0, ease: "Power2.InOut" }, 0.1)
      .to(lines.bot, 0.25, { strokeDashoffset: -9, ease: "Power2.InOut" }, 0.2);

    this.clickAnimation = new gsap.timeline({ paused: true, reversed: true })
      .to(lines.top, 0.1, { y: 10, ease: "Power2.InOut" })
      .to(lines.bot, 0.1, { y: -10, ease: "Power2.InOut" }, "=-0.1")
      .to(lines.mid, 0.1, { scale: 0, ease: "Power2.InOut" }, "=+0.3")
      .to(
        lines.top,
        0.1,
        { rotationZ: 45, transformOrigin: "50% 50%", ease: "Power2.InOut" },
        "rotate"
      )
      .to(
        lines.bot,
        0.1,
        { rotationZ: -45, transformOrigin: "50% 50%", ease: "Power2.InOut" },
        "rotate"
      );
    this.loadTween.play();
  },
  methods: {
    ...mapMutations(["toggleMenuState"]),
  },
};
</script>

<style lang="scss" scoped>
.themenuicon {
  cursor: pointer;
  align-items: center;
  &:hover {
    .button-icon-stroke > * {
      stroke-dashoffset: 0px !important;
    }
    .button-text:after {
      transform: scaleX(1);
    }
  }
}
.line {
  stroke-dashoffset: -30px;
}
.button-icon {
  flex-shrink: 0;
}
.button-icon-stroke {
  stroke: $white;
  > * {
    transition: all 0.25s;
  }
}
.activeButton {
  & > * {
    stroke-dashoffset: 0px !important;
  }
}
</style>
