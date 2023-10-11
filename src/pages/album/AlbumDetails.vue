<template>
  <section class="album-detail" v-if="selectedAlbum">
    <div class="album-detail__container">
      <h2 class="album-detail__container__title">Album</h2>
      <div class="album-detail__container__album-box">
        <div class="album-detail__container__album-box__details">
          <div class="album-detail__container__album-box__details__image-box">
            <img
              class="album-detail__container__album-box__details__image-box__image"
              :src="selectedAlbum.albumImage"
              alt="Album cover picture"
            />
          </div>
          <h2
            class="album-detail__container__album-box__details__image-box__title"
          >
            {{ selectedAlbum.title }}
          </h2>
          <div
            class="album-detail__container__album-box__details__image-box__artist-box"
          >
            <img
              class="album-detail__container__album-box__details__image-box__artist-box__image"
              :src="selectedAlbum.artist.picture"
              alt="Artist picture"
            />
            <h3
              class="album-detail__container__album-box__details__image-box__artist-box__artist"
            >
              {{ selectedAlbum.artist.name }}
            </h3>
          </div>
          <div
            class="album-detail__container__album-box__details__image-box__artist-box__album-specifics"
          >
            <span
              class="album-detail__container__album-box__details__image-box__artist-box__album-specifics__tracks"
            >
              {{ formattedTracks }}
            </span>
            <span
              class="album-detail__container__album-box__details__image-box__artist-box__album-specifics__fans"
              >{{ formattedFans }}</span
            >
          </div>
        </div>
        <section class="album-detail__container__album-box__playlist">
          <div
            class="album-detail__container__album-box__playlist__item"
            v-for="track in selectedAlbum.tracks"
            :key="track.id"
          >
            <h3
              class="album-detail__container__album-box__playlist__item-number"
            >
              {{ track.order }}
            </h3>
            <img
              class="album-detail__container__album-box__playlist__item-image"
              :src="track.songImage"
              alt="Album cover picture"
            />
            <h3
              class="album-detail__container__album-box__playlist__item-title"
            >
              {{ track.songName }}
            </h3>
            <p class="album-detail__container__album-box__playlist__item-time">
              3:45
            </p>
            <button
              class="album-detail__container__album-box__playlist__item-play-button"
              v-if="!isPlaying"
              @click="playOrPauseThisSong(track)"
            >
              <i class="fa-solid fa-play fa-2xs play-button"></i>
            </button>
            <button
              class="album-detail__container__album-box__playlist__item-play-button"
              v-else-if="isPlaying && currentTrack.songName !== track.songName"
              @click="loadSong(track)"
            >
              <i class="fa-solid fa-play fa-2xs play-button"></i>
            </button>
            <button
              class="album-detail__container__album-box__playlist__item-play-button"
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
      selectedAlbum: null,
    };
  },
  async created() {
    await this.$store.dispatch("topArtists/loadTopArtists");
    const topArtists = this.$store.getters["topArtists/topArtists"];
    const allAlbums = [];
    topArtists.forEach((artist) => {
      if (artist.album) {
        allAlbums.push(artist.album);
      }
    });
    function findAlbumById(albums, id) {
      for (const album of albums) {
        if (album.id == id) {
          return album;
        }
        if (Array.isArray(album)) {
          const found = findAlbumById(album, id);
          if (found) {
            return found;
          }
        }
      }
      return undefined;
    }
    this.selectedAlbum = findAlbumById(allAlbums, this.id);
    console.log(allAlbums);
    console.log(this.selectedAlbum);
    console.log(this.id);

    console.log(typeof this.id);
  },
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    },
    currentTrack() {
      return this.$store.getters.currentTrack;
    },
    formattedTracks() {
      return `${this.selectedAlbum.nb_tracks} tracks |`;
    },
    formattedFans() {
      return ` ${this.selectedAlbum.fans} fans`;
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
.album-detail {
  padding: 1.5rem 0 3rem 3rem;
  width: 100%;
  height: calc(100vh - 60px - 260px);
  background-color: transparent;
  border-radius: 0.3rem;
}

.album-detail__container {
  background-color: #202026;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  color: #fff;
  overflow: auto;
}

.album-detail__container__title {
  font-size: 1.2rem;
  padding-bottom: 1rem;
}

.album-detail__container__album-box {
  display: flex;
}

/* ALBUM DETAILS */

.album-detail__container__album-box__details {
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 0.1rem solid #b2b6b9;
}

.album-detail__container__album-box__details__image-box {
  width: 20rem;
  height: 20rem;
}

.album-detail__container__album-box__details__image-box__image {
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
}

.album-detail__container__album-box__details__image-box__title {
  font-size: 3rem;
}

.album-detail__container__album-box__details__image-box__artist-box {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.album-detail__container__album-box__details__image-box__artist-box__image {
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.3rem;
}

.album-detail__container__album-box__details__image-box__artist-box__artist {
  font-weight: 300;
  font-size: 1.3rem;
}

.album-detail__container__album-box__details__image-box__artist-box__album-specifics {
  font-size: 1.2rem;
  color: #b2b6b9;
}

/* PLAYLIST */

.album-detail__container__album-box__playlist__item {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 2rem;
  padding: 0.5rem 0 0.5rem 0.5rem;
  margin-left: 2rem;
}

.album-detail__container__album-box__playlist__item:hover{
  background-color: #2e2e37;
}

.album-detail__container__album-box__playlist__item-number {
  width: 1rem;
  font-size: 1rem;
  color: #b2b6b9;
}

.album-detail__container__album-box__playlist__item-image {
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 0.7rem;
}

.album-detail__container__album-box__playlist__item-title {
  font-size: 1.2rem;
  width: 28rem;
}

.album-detail__container__album-box__playlist__item-time {
  width: 2rem;
}

.album-detail__container__album-box__playlist__item-play-button {
  background-color: #3f3f4e;
  border: 0.1rem solid #666768;
  border-radius: 0.3rem;
  width: 2rem;
  height: 2rem;
}

.play-button {
  color: #516ae8;
}

.album-detail__container__album-box__playlist__item-play-button:hover {
  transform: scale(1.1);
  transition: 0.2s;
}
</style>
