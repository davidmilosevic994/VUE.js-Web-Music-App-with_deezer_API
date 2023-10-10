<template>
  <router-link :to="albumDetailsLink" class="custom-link">
    <div class="artist-detail__container__albums-container__albums__item">
      <img
        class="artist-detail__container__albums-container__albums__item__image"
        :src="album.albumImage"
        alt="Album cover image"
      />
      <div class="artist-detail__container__albums-container__albums__details">
        <h2
          class="artist-detail__container__albums-container__albums__details__title"
        >
          {{ truncateString(album.title, 20) }}
        </h2>
        <span
          class="artist-detail__container__albums-container__albums__details__artist-name"
          >{{ albumArtist }}</span
        >
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["album"],
  computed: {
    albumArtist() {
      return `by ${this.album.artist.name}`;
    },
    albumDetailsLink() {
      return "/album/" + this.album.id;
    },
  },
  methods: {
    truncateString(string, num) {
      let resultString = "";
      if (string.length > num) {
        resultString = string.slice(0, num - 3) + "...";
        return resultString;
      }
      return string;
    },
  },
};
</script>

<style scoped>
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

.custom-link {
  text-decoration: none;
  color: #fff;
}
</style>
