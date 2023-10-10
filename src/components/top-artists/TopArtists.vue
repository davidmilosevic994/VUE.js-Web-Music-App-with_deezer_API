<template>
  <section class="main__top-artists" v-if="topArtists && topArtists.length > 0">
    <h2 class="main__top-artists__title">Top Artists</h2>
    <div class="main__top-artists__artists-container" >
      <top-artists-item v-for="artist in topArtists" :key="artist.id" :artist="artist"></top-artists-item>
    </div>
  </section>
</template>

<script>
import TopArtistsItem from "./TopArtistsItem.vue";

export default {
  components: {
    TopArtistsItem,
  },
  created() {
    this.loadTopArtists();
  },
  computed: {
    topArtists() {
      return this.$store.getters["topArtists/topArtists"];
    },
  },
  methods: {
    async loadTopArtists() {
      await this.$store.dispatch("topArtists/loadTopArtists");
    },
  },
};
</script>

<style scoped>
.main__top-artists {
  grid-column: 1 / -1;
  background-color: #202026;
  border-radius: 0.3rem;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  color: #fff;
}

.main__top-artists__title {
  font-size: 1.2rem;
  padding-bottom: 1.6rem;
}

.main__top-artists__artists-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
