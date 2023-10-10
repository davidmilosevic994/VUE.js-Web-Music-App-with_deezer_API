<template>
  <section class="player">
    <div class="player-container" v-if="currentTrack">
      <h2 class="player-container__title">Player</h2>
      <div class="player-container__details">
        <div class="player-container__details__image-box">
          <img
            :src="currentTrack.songImage"
            alt="Album cover photo"
            class="player-container__image"
          />
        </div>
        <h2 class="player-container__song-name">
          {{ truncatedSongName }}
        </h2>
        <h3 class="player-container__details__artist">
          {{ currentTrack.artist }}
        </h3>
        <p class="player-container__details__album-name">
          {{ truncatedAlbumName }}
        </p>
        <div class="player-container__details__time-container"></div>
      </div>
      <div class="player-container__controls">
        <div class="player-container__controls__icons">
          <button class="player-container__controls__backward">
            <i class="fa-solid fa-backward"></i>
          </button>
          <button class="player-container__controls__play">
            <i
              class="fa-solid"
              :class="isPlaying ? 'fa-pause' : 'fa-play'"
              @click="playOrPauseThisSong(currentTrack)"
            ></i>
          </button>
          <button class="player-container__controls__forward">
            <i class="fa-solid fa-forward"></i>
          </button>
        </div>
      </div>
    </div>
    <div v-else class="player-container-empty">
      <h2 class="player-container-empty__title">Music Player</h2>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    currentTrack() {
      return this.$store.getters.currentTrack;
    },
    audio() {
      return this.$store.getters.audio;
    },
    truncatedSongName() {
      const num = 19;
      return this.truncateString(this.currentTrack.songName, num);
    },
    truncatedAlbumName() {
      const num = 50;
      return this.truncateString(this.currentTrack.album, num);
    },
  },
  methods: {
    playOrPauseThisSong(song) {
      this.$store.dispatch("playOrPauseThisSong", song);
    },
    truncateString(string, num) {
      if (!string) {
        return "";
      }

      if (string.length > num) {
        return string.slice(0, num - 3) + "...";
      }
      return string;
    },
  },
};
</script>

<style scoped>
.player {
  padding: 1.5rem 3rem 3rem 1.5rem;
}

.player-container {
  background-color: #202026;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;
}

.player-container__title {
  padding: 1.5rem 1.5rem 0 1.5rem;
  font-size: 1.2rem;
}

.player-container__details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 3.5rem 2rem 3.5rem;
  gap: 0.8rem;
}

.player-container__details__image-box {
  display: flex;
  align-items: center;
  justify-self: center;
  height: 10rem;
  width: 100%;
  padding: 0 4.6rem;
  transition: 1s;
}

.player-container__image {
  height: 100%;
  width: 100%;
  object-fit: fill;
  border-radius: 0.7rem;
  transition: 1s;
}

.player-container__song-name {
  font-size: 2.4rem;
  transition: 1s;
}

.player-container__details__time-container {
  padding: 1.5rem 0;
}

.player-container__details__album-name {
  color: #b2b6b9;
  transition: 0.3s;
}
.player-container__controls {
  width: 100%;
  height: 100%;
  border-radius: 0.3rem;
  background-color: #516ae8;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 1rem;
}

.player-container__controls__icons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.player-container__controls__backward,
.player-container__controls__forward {
  border: none;
  background-color: transparent;
  color: #fff;
}

.player-container__controls__play {
  border: none;
  background-color: #fff;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.2rem;
  color: #516ae8;
}

.fa-pause {
  color: #516ae8;
}

/* EMPTY PLAYER  */

.player-container-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #202026;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  border-radius: 0.3rem;
}

.player-container-empty__title {
  color: #b2b6b9;
  font-size: 3rem;
}
</style>
