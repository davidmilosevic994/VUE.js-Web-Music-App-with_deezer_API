<template>
  <section class="playlist-detail" v-if="selectedPlaylist">
    <div class="playlist-detail__container">
      <h2 class="playlist-detail__container__title">Playlist</h2>
      <div class="playlist-detail__container__playlist-box">
        <div class="playlist-detail__container__playlist-box__details">
          <div
            class="playlist-detail__container__playlist-box__details__image-box"
          >
            <img
              class="playlist-detail__container__playlist-box__details__image-box__image"
              :src="selectedPlaylist.picture"
              alt="Playlist cover picture"
            />
          </div>
          <h2 class="playlist-detail__container__playlist-box__details__title">
            {{ selectedPlaylist.title }}
          </h2>
          <h3
            class="playlist-detail__container__playlist-box__details__creator"
          >
            {{ selectedPlaylist.creator }}
          </h3>
          <div
            class="playlist-detail__container__playlist-box__details__playlist-specifics"
          >
            <span
              class="playlist-detail__container__playlist-box__details__playlist-specifics__tracks"
            >
              {{ formattedTracks }}
            </span>
            <span
              class="playlist-detail__container__playlist-box__details__playlist-specifics__duration"
            >
              {{ formattedDuration }}</span
            >
            <span
              class="playlist-detail__container__playlist-box__details__playlist-specifics__fans"
            >
              {{ formattedFans }}</span
            >
          </div>
        </div>
        <section
          class="playlist-detail__container__playlist-box__playlist-list"
        >
          <div
            class="playlist-detail__container__playlist-box__playlist-list__item"
            v-for="track in selectedPlaylist.tracks"
            :key="track.id"
          >
            <h3
              class="playlist-detail__container__playlist-box__playlist-list__item-number"
            >
              {{ track.order }}
            </h3>
            <img
              class="playlist-detail__container__playlist-box__playlist-list__item-image"
              :src="track.songImage"
              alt="Album cover picture"
            />
            <div
              class="playlist-detail__container__playlist-box__playlist-list__item-chart-details"
            >
              <h3
                class="playlist-detail__container__playlist-box__playlist-list__item-chart-details__title"
              >
                {{ track.songName }}
              </h3>
              <p
                class="playlist-detail__container__playlist-box__playlist-list__item-chart-details__artist"
              >
                {{ track.artist }}
              </p>
            </div>
            <p
              class="playlist-detail__container__playlist-box__playlist-list__item-time"
            >
              3:45
            </p>
            <button
              class="playlist-detail__container__playlist-box__playlist-list__item-play-button"
              v-if="!isPlaying"
              @click="playOrPauseThisSong(track)"
            >
              <i class="fa-solid fa-play fa-2xs play-button"></i>
            </button>
            <button
              class="playlist-detail__container__playlist-box__playlist-list__item-play-button"
              v-else-if="isPlaying && currentTrack.songName !== track.songName"
              @click="loadSong(track)"
            >
              <i class="fa-solid fa-play fa-2xs play-button"></i>
            </button>
            <button
              class="playlist-detail__container__playlist-box__playlist-list__item-play-button"
              v-else
              @click="playOrPauseSong()"
            >
              <i class="fa-solid fa-pause fa-2xs play-button"></i>
            </button>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      selectedPlaylist: null,
    };
  },
  async created() {
    // This code will run when the component is initially created.
    // You can use it to fetch and initialize data based on the route parameters.
    await this.fetchPlaylistData(this.$route.params.id);
  },
  methods: {
    async fetchPlaylistData(playlistId) {
      // Fetch data for the initial route based on the route parameters.
      // Example using a Vuex action:
      await this.$store.dispatch("playlist/loadPlaylists");
      const playlists = this.$store.getters["playlist/playlist"];
      this.selectedPlaylist = playlists.find(
        (playlist) => playlist.id == playlistId
      );
    },
    playOrPauseThisSong(track) {
      this.$store.dispatch("playOrPauseThisSong", track);
    },
    loadSong(track) {
      this.$store.dispatch("loadSong", track);
    },
    playOrPauseSong() {
      this.$store.dispatch("playOrPauseSong");
    },
  },
  async beforeRouteUpdate(to, from, next) {
    // This code will run when the route parameters change.
    // You can use it to update the component's data based on the new route.
    const playlistId = to.params.id;
    await this.fetchPlaylistData(playlistId);
    next();
  },
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    currentTrack() {
      return this.$store.getters.currentTrack;
    },
    formattedTracks() {
      return `${this.selectedPlaylist.nb_tracks} tracks |`;
    },
    formattedDuration() {
      const duration = this.selectedPlaylist.duration;
      const hours = Math.floor(duration / 3600);
      const minutes = Math.floor((duration % 3600) / 60);
      let string = "";
      if (hours > 0) {
        string = ` ${string}${hours}h `;
      }
      if (minutes > 0) {
        string = string + minutes + "min |";
      }

      return string;
    },
    formattedFans() {
      return ` ${this.selectedPlaylist.fans} fans`;
    },
  },
};
</script>

<style scoped>
.playlist-detail {
  padding: 1.5rem 0 3rem 3rem;
  width: 100%;
  height: calc(100vh - 60px - 260px);
  background-color: transparent;
  border-radius: 0.3rem;
}

.playlist-detail__container {
  background-color: #202026;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  color: #fff;
  overflow: auto;
}

.playlist-detail__container__title {
  font-size: 1.2rem;
  padding-bottom: 1rem;
}

.playlist-detail__container__playlist-box {
  display: flex;
}

/* PLAYLIST DETAILS */

.playlist-detail__container__playlist-box__details {
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 0.1rem solid #b2b6b9;
}

.playlist-detail__container__playlist-box__details__image-box {
  width: 20rem;
  height: 20rem;
}

.playlist-detail__container__playlist-box__details__image-box__image {
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
}

.playlist-detail__container__playlist-box__details__title {
  font-size: 3rem;
}

.playlist-detail__container__playlist-box__details__creator {
  font-weight: 300;
  font-size: 1.3rem;
}

.playlist-detail__container__playlist-box__details__playlist-specifics {
  font-size: 1.2rem;
  color: #b2b6b9;
}

/* PLAYLIST LIST  */

.playlist-detail__container__playlist-box__playlist-list__item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 0.5rem 0;
  margin-left: 2rem;
}

.playlist-detail__container__playlist-box__playlist-list__item-number {
  width: 1rem;
  font-size: 1rem;
  color: #b2b6b9;
}

.playlist-detail__container__playlist-box__playlist-list__item-image {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.7rem;
}

.playlist-detail__container__playlist-box__playlist-list__item-chart-details {
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.playlist-detail__container__playlist-box__playlist-list__item-chart-details__title {
  font-size: 1.2rem;
}

.playlist-detail__container__playlist-box__playlist-list__item-chart-details__artist {
  font-size: 1rem;
  color: #b2b6b9;
}

.playlist-detail__container__playlist-box__playlist-list__item-time {
  width: 2rem;
}

.playlist-detail__container__playlist-box__playlist-list__item-play-button {
  background-color: #3f3f4e;
  border: 0.1rem solid #666768;
  border-radius: 0.3rem;
  width: 2rem;
  height: 2rem;
}

.play-button {
  color: #516ae8;
}

.playlist-detail__container__playlist-box__playlist-list__item-play-button:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
