import { createStore } from "vuex";

import topTrendingsModule from "./modules/top-trendings/index.js";
import topChartsModule from "./modules/top-charts/index.js";
import topArtistsModule from "./modules/top-artists/index.js";
import playlistModule from "./modules/playlist/index.js";

const store = createStore({
  modules: {
    topTrendings: topTrendingsModule,
    topCharts: topChartsModule,
    topArtists: topArtistsModule,
    playlist: playlistModule,
  },
  state() {
    return {
      isPlaying: false,
      audio: null,
      currentTrack: null,
    };
  },
  mutations: {
    setCurrentTrack(state, song) {
      state.currentTrack = song;
    },
    setIsPlaying(state, payload) {
      state.isPlaying = payload;
    },
    setAudio(state, payload) {
      state.audio = payload;
    },
  },
  actions: {
    loadSong(context, song) {
      context.commit("setCurrentTrack", song);

      if (context.state.audio && context.state.audio.src) {
        context.state.audio.pause();
        context.commit("setIsPlaying", false);
        context.state.audio.src = "";
      }

      const audio = new Audio();
      audio.src = song.track;
      context.commit("setAudio", audio);
      setTimeout(() => {
        context.commit("setIsPlaying", true);
        context.state.audio.play();
      }, 200);
    },
    playOrPauseSong(context) {
      if (context.state.audio.paused) {
        context.commit("setIsPlaying", true);
        context.state.audio.play();
      } else {
        context.commit("setIsPlaying", false);
        context.state.audio.pause();
      }
    },
    playOrPauseThisSong(context, song) {
      if (
        !context.state.audio ||
        !context.state.audio.src ||
        context.state.currentTrack.id !== song.id
      ) {
        context.dispatch("loadSong", song);
        return;
      }
      context.dispatch("playOrPauseSong");
    },
  },
  getters: {
    isPlaying(state) {
      return state.isPlaying;
    },
    currentTrack(state) {
      return state.currentTrack;
    },
    audio(state) {
      return state.audio;
    },
  },
});

export default store;
