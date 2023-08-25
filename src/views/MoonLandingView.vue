<template>
  <video
    v-show="!showingUntoldStory"
    src="../assets/videos/1969.mp4"
    autoplay muted loop
    @click="onClick"
    @keydown="onClick"
    @timeupdate="onTimeUpdate"
    ref="videoPlayer"
  />

  <video
    v-show="showingUntoldStory"
    src="../assets/videos/the-untold-story.mp4"
    ref="untoldStoryVideoPlayer"
    controls
    @ended="onStoryEnded"
  />
</template>

<script>
export default {
  name: 'MoonLanding',

  data() {
    return {
      showingUntoldStory: false,
    };
  },

  methods: {
    onClick(event) {
      const { target: videoPlayer } = event;

      if (videoPlayer.currentTime >= 15 && videoPlayer.currentTime <= 25) {
        videoPlayer.pause();
        this.showingUntoldStory = true;
        this.$refs.videoPlayer.currentTime = 0;
        this.$refs.untoldStoryVideoPlayer.play();
      }
    },

    onStoryEnded() {
      this.showingUntoldStory = false;
      this.$refs.videoPlayer.play();
    },
  },
};
</script>
