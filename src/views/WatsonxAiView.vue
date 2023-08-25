<template>
  <video
    v-show="!showingArticle"
    src="../assets/videos/2023.mp4"
    muted loop
    @click="onClick"
    @keydown="onClick"
    ref="videoPlayer"
  />

  <div v-show="showingArticle" class="overlay">
    <div class="nav">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>

      Back
    </div>

    <div class="article">
      <iframe src="https://research.ibm.com/blog/geospatial-models-nasa-ai" frameborder="0" title="Earth’s climate is changing. IBM’s new geospatial foundation model could help track and adapt to a new landscape"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WatsonxAiView',

  data() {
    return {
      showingArticle: true,
    };
  },

  methods: {
    onClick(event) {
      const { target: videoPlayer } = event;

      if (videoPlayer.currentTime >= 15 && videoPlayer.currentTime <= 25) {
        videoPlayer.pause();
        this.showingArticle = true;
      }
    },
  },
};
</script>

<style scoped>
.overlay {
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    display: flex;
    flex-direction: column;
}

.nav {
    background-color: #0530ad;
    color: #fff;
    display: flex;
    align-items: center;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1.3rem;
    padding: 1rem;
}

.nav svg {
    height: 1.25rem;
    width: 1.25rem;
    margin-right: 0.5rem;
}
</style>
