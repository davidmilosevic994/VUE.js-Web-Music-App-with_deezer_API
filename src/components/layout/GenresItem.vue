<template>
  <div class="main__genres-section__genres-container__detail" :style="genreStyle">
    <h2 class="main__genres-section__genres-container__detail-name">
      {{ genre.title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ["genre"],
  computed: {
    genreStyle() {
        return { 'background-color': `#${this.genre.color}` };
    }
  }
};
</script>

<style scoped>
.main__genres-section__genres-container__detail {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 20px;
  background-color: pink;
  border-radius: 0.7rem;
}
</style>
