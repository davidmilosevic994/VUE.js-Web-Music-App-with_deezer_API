<template>
  <router-link :to="artistDetailsLink" class="custom-link">
    <div class="main__top-artists__artists-container__artist-details">
      <img
        class="main__top-artists__artists-container__artist-details__image"
        :src="artist.picture"
        alt="Travis Scott"
      />
      <h3>{{ artist.name }}</h3>
      <p class="main__top-artists__artists-container__artist-details__fans">
        {{ formattedFans }}
      </p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["artist"],
  computed: {
    formattedFans() {
      const fans = this.artist.fans;
      if (fans >= 1000000) {
        return (fans / 1000000).toFixed(1) + " M";
      } else if (fans >= 1000) {
        return (fans / 1000).toFixed(0) + " K";
      } else {
        return fans.toString();
      }
    },
    artistDetailsLink() {
      return '/artist/' + this.artist.id;
    }
  },
};
</script>

<style scoped>
.main__top-artists__artists-container__artist-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
}

.main__top-artists__artists-container__artist-details__image {
  border-radius: 0.7rem;
  width: 5.6rem;
  height: 4.6rem;
}

.main__top-artists__artists-container__artist-details__fans {
  color: #b2b6b9;
}

.custom-link{
  text-decoration: none;
  color: #fff;
}
</style>
