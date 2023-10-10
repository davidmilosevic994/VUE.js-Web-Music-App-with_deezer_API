<template>
  <the-nav></the-nav>
  <the-header></the-header>
  <the-carousel></the-carousel>
  <router-view></router-view>
  <music-player></music-player>
</template>

<script>
import TheNav from "./components/layout/TheNav.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheCarousel from "./components/carousel/TheCarousel.vue";
import MusicPlayer from "./components/player/MusicPlayer.vue";


export default {
  components: {
    TheNav,
    TheHeader,
    TheCarousel,
    MusicPlayer,
  },
  mounted() {
    this.$store.commit("setIsPlaying", false);
  },
  computed: {
    isPlaying() {
      return this.$store.getters.isPlaying;
    }
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Almarai", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #737373;
}

#app {
  height: 100vh;
  display: grid;
  grid-template-columns: 240px 1fr 340px;
  grid-template-rows: 60px 260px calc(100% - 60px - 260px);
  background: linear-gradient(to top, rgba(24, 24, 29, 1), rgba(6, 6, 6, 1));
}

.main {
  padding: 1.5rem 0 3rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 140px calc(100% - 140px);
}

/* CHARTS */
</style>
