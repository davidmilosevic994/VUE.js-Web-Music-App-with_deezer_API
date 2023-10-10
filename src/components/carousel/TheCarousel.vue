<template>
  <section
    class="carousel"
    v-if="topTrendingSongs && topTrendingSongs.length > 0"
  >
    <div
      class="carousel__image"
      :style="{
        'background-image': 'url(' + topTrendingSongs[slideID].songImage + ')',
      }"
    ></div>
    <button class="carousel__arrow-left" @click="slideLeft">
      <i class="fa-solid fa-circle-chevron-up"></i>
    </button>
    <button class="carousel__arrow-right" @click="slideRight">
      <i class="fa-solid fa-circle-chevron-down"></i>
    </button>
    <h2 class="carousel__title">Top Trending Hits</h2>
    <div class="carousel__details">
      <h2 class="carousel__details__song-name">
        {{ topTrendingSongs[slideID].songName }}
      </h2>
      <h3 class="carousel__details__artist-name">
        {{ topTrendingSongs[slideID].artist }}
      </h3>
      <button
        class="carousel__details__button-play"
        v-if="!isPlaying"
        @click="playOrPauseThisSong(topTrendingSongs[slideID])"
      >
        Listen Now
      </button>
      <button
        class="carousel__details__button-play"
        v-else-if="
          isPlaying &&
          currentTrack.songName !== topTrendingSongs[slideID].songName
        "
        @click="loadSong(topTrendingSongs[slideID])"
      >
        Listen Now
      </button>
      <button class="carousel__details__button-play" v-else>Listen Now</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slideID: 0,
      songs: null,
    };
  },
  created() {
    this.loadTopTrendingSongs();
    // console.log(this.topTrendingsSongs);
  },
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    currentTrack() {
      return this.$store.getters.currentTrack;
    },
    topTrendingSongs() {
      // console.log("Updated getter State:", this.$store.state.topTrendingsSongs);
      return this.$store.getters["topTrendings/topTrendingsSongs"];
    },
  },
  methods: {
    async loadTopTrendingSongs() {
      try {
        await this.$store.dispatch("topTrendings/loadTopTrendingSongs");
        // console.log("Updated State:", this.$store.state.topTrendingsSongs);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    },
    playOrPauseThisSong(song) {
      this.$store.dispatch("playOrPauseThisSong", song);
    },
    loadSong(song) {
      this.$store.dispatch("loadSong", song);
    },
    playOrPauseSong() {
      this.$store.dispatch("playOrPauseSong");
    },
    slideLeft() {
      if (this.slideID > 0) {
        this.slideID--;
      } else {
        this.slideID = this.topTrendingSongs.length - 1;
      }
    },
    slideRight() {
      if (this.slideID < this.topTrendingSongs.length - 1) {
        this.slideID++;
      } else {
        this.slideID = 0;
      }
    },
  },
};
</script>

<style scoped>
.carousel {
  grid-column: 2 / -1;
  position: relative;
  padding: 4rem 3rem 0 3rem;
}

.carousel__image {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center bottom -55rem;
  background-size: cover;
  transition: 0.3s;
  border-radius: 0.3rem;
}

.carousel__title {
  position: absolute;
  left: 3rem;
  top: 2.4rem;
  font-size: 1.4rem;
  color: #fff;
}

.carousel__details {
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 5rem;
  bottom: 6rem;
  gap: 1rem;
  color: #fff;
}

.carousel__details__song-name {
  font-size: 3.6rem;
  font-weight: 800;
}

.carousel__details__artist-name {
  font-size: 1.6rem;
  font-weight: 700;
}

.carousel__arrow-left,
.carousel__arrow-right {
  position: absolute;
  background-color: transparent;
  border: none;
  top: 50%;
  right: 5rem;
  cursor: pointer;
}

.carousel__arrow-left {
  transform: translateY(-60%);
}
.carousel__arrow-right {
  transform: translateY(110%);
}



.fa-solid {
  color: #fff;
}

.carousel__details__button-play {
  display: inline-block;
  background-color: #516ae8;
  color: #fff;
  border: none;
  width: 100px;
  padding: 0.5rem 0;
  margin-top: 1rem;
  border-radius: 20px;
}

.carousel__details__button-play:hover {
  cursor: pointer;
}

.carousel__details__button-play:hover {
  background-color: #697fea;
  transition: 0.3s;
}
</style>
