<template>
  <section class="genres-section">
    <h2 class="main__genres-section__title">Genres</h2>
    <div class="main__genres-section__genres-container">
      <genres-item
        v-for="genre in genres"
        :key="genre"
        :genre="genre"
      ></genres-item>
    </div>
  </section>
</template>

<script>
import GenresItem from "./GenresItem.vue";

export default {
  components: {
    GenresItem,
  },
  data() {
    return {
      genres: [
        {
          title: "Pop",
          color: "476A8A",
        },
        {
          title: "Electronic",
          color: "A69984",
        },
        {
          title: "Rap",
          color: "A24C34",
        },
        {
          title: "Metal",
          color: "0D4045",
        },
        {
          title: "R&B",
          color: "A67894",
        },
        {
          title: "Rock",
          color: "5547A5",
        },
        {
          title: "Blues",
          color: "7a8d37",
        },
        {
          title: "Dance & EDM",
          color: "8d373b",
        },
      ],
    };
  },
};
</script>

<style scoped>
.genres-section {
  background-color: #202026;
  border-radius: 0.3rem;
  padding: 1.5rem 1.5rem 0.5rem 1.5rem;
  color: #fff;
  margin-top: 1.5rem;
  margin-right: 1.5rem;
  overflow-y: scroll;
}

.main__genres-section__title {
  font-size: 1.2rem;
  padding-bottom: 1.6rem;
}

.main__genres-section__genres-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

}
</style>
