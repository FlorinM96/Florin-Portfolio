<template>
  <div class="font-paragraph-m">
    <div class="header">
      <span>website migration</span>
    </div>
    <div class="etsfactory-video-wrapper min-h-3/4vh relative overflow-hidden">
      <video
        autoplay="autoplay"
        loop="loop"
        muted="muted"
        class="video absolute inset-1/2 transform -translate-y-1/2 -translate-x-1/2 min-w-full min-h-full"
      >
        <source
          src="https://www.etsfactory.com/_nuxt/videos/3644424.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.video {
  filter: contrast(0.5);
}
</style>
