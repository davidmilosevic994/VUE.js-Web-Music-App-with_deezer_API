<template>
  <section class="artist-detail" v-if="selectedArtist">
    <div class="artist-detail__container">
      <h2 class="artist-detail__container__title">Artist</h2>
      <div class="artist-detail__container__artist-box">
        <div class="artist-detail__container__artist-box__image-box">
          <img
            class="artist-detail__container__artist-box__image-box__image"
            :src="selectedArtist.picture"
            alt="Artist picture"
          />
        </div>
        <div class="artist-detail__container__artist-box__details">
          <h2 class="artist-detail__container__artist-box__details__title">
            {{ selectedArtist.name }}
          </h2>
          <h3 class="artist-detail__container__artist-box__details__fans">
            {{ numberOfFans }}
          </h3>
        </div>
      </div>
      <div class="artist-detail__container__albums-container">
        <h2 class="artist-detail__container__albums-container__title">
          Albums
        </h2>
        <div class="artist-detail__container__albums-container__albums">
          <album-item
            v-for="album in selectedArtist.album"
            :key="album.id"
            :album="album"
          ></album-item>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AlbumItem from "../../components/albums/AlbumItem.vue";

export default {
  components: {
    AlbumItem,
  },
  props: ["id"],
  data() {
    return {
      selectedArtist: null,
    };
  },
  async created() {
    await this.$store.dispatch("topArtists/loadTopArtists");
    const artists = this.$store.getters["topArtists/topArtists"];
    this.selectedArtist = artists.find((artist) => artist.id == this.id);
    console.log(this.selectedArtist);
    console.log(typeof this.id);
  },
  computed: {
    numberOfFans() {
      return this.selectedArtist.fans.toString() + " fans";
    },
  },
};
</script>

<style scoped>
.artist-detail {
  padding: 1.5rem 0 3rem 3rem;
  width: 100%;
  height: calc(100vh - 60px - 260px);
  background-color: transparent;
  border-radius: 0.3rem;
}

.artist-detail__container {
  background-color: #202026;
  border-radius: 0.3rem;
  width: 100%;
  height: 100%;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  color: #fff;
}

.artist-detail__container__title,
.artist-detail__container__albums-container__title {
  font-size: 1.2rem;
  padding-bottom: 1rem;
}

.artist-detail__container__artist-box {
  display: flex;
  align-items: center;
  width: 50rem;
  height: 12rem;
  gap: 3rem;
  margin-bottom: 1.5rem;
}

.artist-detail__container__artist-box__image-box {
  width: 12rem;
  height: 12rem;
}

.artist-detail__container__artist-box__image-box__image {
  width: 100%;
  height: 100%;
  border-radius: 0.7rem;
}

.artist-detail__container__artist-box__details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.artist-detail__container__artist-box__details__title {
  font-size: 3.2rem;
  font-weight: 700;
}

.artist-detail__container__artist-box__details__fans {
  font-size: 1.2rem;
  font-weight: 300;
  color: #b2b6b9;
}

/* ALBUM CONTAINER */

.artist-detail__container__albums-container__albums {
  display: flex;
  gap: 1.5rem;
}

.artist-detail__container__albums-container__albums__item {
  width: 15rem;
  height: 16rem;
}

.artist-detail__container__albums-container__albums__item__image {
  width: 100%;
  height: 12rem;
  border-radius: 0.7rem;
}

.artist-detail__container__albums-container__albums__details {
  padding-top: 0.5rem;
}

.artist-detail__container__albums-container__albums__details__artist-name {
  font-size: 1.1rem;
  color: #b2b6b9;
}
</style>
