<template>
    <main class="main">
    <top-artists></top-artists>
    <the-genres></the-genres>
    <top-charts></top-charts>
  </main>
</template>

<script>
import TheGenres from '../../components/layout/TheGenres.vue'
import TopArtists from "../../components/top-artists/TopArtists.vue";
import TopCharts from "../../components/top-charts/TopCharts.vue";

export default {
    components: {
        TheGenres,
        TopArtists,
        TopCharts
    }
}
</script>

<style scoped>
.main {
  padding: 1.5rem 0 3rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 140px calc(100% - 140px);
}
</style>