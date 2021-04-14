<template>
  <div :style="lineStyle" class="line">
    <div class="relative w-full h-full">
      <div ref="tracker" :style="trackerStyle" class="tracker" />
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: {
    position: {
      type: String,
      default: "right",
    },
    orientation: {
      type: String,
      default: "vertical",
    },
  },
  watch: {
    $mq() {
      this.trackerAnimation.kill();
      this.$nextTick(function () {
        this.startTrackerAnimation();
      });
    },
  },
  computed: {
    lineStyle() {
      const absolutePosition = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "1px",
        height: "1px",
      };
      if (this.orientation === "vertical") {
        delete absolutePosition.left;
        delete absolutePosition.right;
        delete absolutePosition.height;
      } else {
        delete absolutePosition.top;
        delete absolutePosition.bottom;
        delete absolutePosition.width;
      }
      absolutePosition[this.position] = "1px";

      return absolutePosition;
    },
    trackerStyle() {
      return this.orientation === "vertical"
        ? {
            bottom: 0,
            width: "3px",
            height: "4rem",
            [this.position]: 0,
          }
        : {
            width: "4rem",
            height: "3px",
            [this.position]: 0,
          };
    },
  },
  mounted() {
    this.startTrackerAnimation();
  },
  methods: {
    startTrackerAnimation() {
      let fromValues = {};
      let toValues = {
        duration: 1,
        repeat: -1,
        repeatDelay: 4,
        ease: "power2.inOut",
      };

      if (this.orientation === "vertical") {
        fromValues = {
          y: "100%",
          x: 0,
          scaleX: 1,
          scaleY: 0.5,
        };
        toValues.y = "-100%";
        toValues.x = 0;
        toValues.scaleX = toValues.scaleY = 1;
        toValues.top = 0;
      } else {
        fromValues = {
          x: "-100%",
          y: 0,
          scaleX: 0.5,
          scaleY: 1,
        };
        toValues.y = 0;
        toValues.x = "100%";
        toValues.scaleX = toValues.scaleY = 1;
        toValues.right = 0;
      }

      this.trackerAnimation = gsap.fromTo(
        this.$refs.tracker,
        fromValues,
        toValues
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.line {
  position: absolute;
  background-color: rgba($white, 0.2);
}
.tracker {
  position: absolute;
  border-radius: 50%;
  background-color: white;
}
</style>
