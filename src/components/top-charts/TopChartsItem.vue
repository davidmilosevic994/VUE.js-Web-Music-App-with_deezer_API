<template>
  <div class="main__top-charts__charts-container__item">
    <h3 class="main__top-charts__charts-container__item-number">
      {{ chart.order }}
    </h3>
    <img
      class="main__top-charts__charts-container__item-image"
      :src="chart.songImage"
      alt="Album cover pisture"
    />
    <div class="main__top-charts__charts-container__item-chart-details">
      <h3 class="main__top-charts__charts-container__item-chart-details__title">
        {{ chart.songName }}
      </h3>
      <p class="main__top-charts__charts-container__item-chart-details__artist">
        {{ chart.artist }}
      </p>
    </div>
    <p class="main__top-charts__charts-container__item-time">
      {{ formattedDuration }}
    </p>
    <button
      class="main__top-charts__charts-container__item-play-button"
      v-if="!isPlaying"
      @click="playOrPauseThisSong(chart)"
    >
      <i class="fa-solid fa-play fa-2xs play-button"></i>
    </button>
    <button
      class="main__top-charts__charts-container__item-play-button"
      v-else-if="isPlaying && currentTrack.songName !== chart.songName"
      @click="loadSong(chart)"
    >
      <i class="fa-solid fa-play fa-2xs play-button"></i>
    </button>
    <button
      class="main__top-charts__charts-container__item-play-button"
      v-else
      @click="playOrPauseSong()"
    >
      <i class="fa-solid fa-pause fa-2xs play-button"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: ["chart"],
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    currentTrack() {
      return this.$store.getters.currentTrack;
    },
    formattedDuration() {
      const duration = this.chart.duration;
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
  methods: {
    playOrPauseThisSong(song) {
      this.$store.dispatch("playOrPauseThisSong", song);
    },
    loadSong(song) {
      this.$store.dispatch("loadSong", song);
    },
    playOrPauseSong() {
      this.$store.dispatch("playOrPauseSong");
    },
  },
};
</script>

<style scoped>
.main__top-charts__charts-container__item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 0.5rem 0;
}

.main__top-charts__charts-container__item-image {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.7rem;
}

.main__top-charts__charts-container__item-number {
  width: 1rem;
  font-size: 1rem;
  color: #b2b6b9;
}

.main__top-charts__charts-container__item-chart-details {
  width: 18rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.main__top-charts__charts-container__item-chart-details__title {
  font-size: 1.2rem;
}

.main__top-charts__charts-container__item-chart-details__artist {
  font-size: 1rem;
  color: #b2b6b9;
}

.main__top-charts__charts-container__item-time {
  width: 2rem;
}

.main__top-charts__charts-container__item-play-button {
  background-color: #3f3f4e;
  border: 0.1rem solid #666768;
  border-radius: 0.3rem;
  width: 2rem;
  height: 2rem;
}

.main__top-charts__charts-container__item-play-button:hover {
   transform: scale(1.1);
   transition: 0.2s;
}

.play-button {
  color: #516ae8;
}
</style>
