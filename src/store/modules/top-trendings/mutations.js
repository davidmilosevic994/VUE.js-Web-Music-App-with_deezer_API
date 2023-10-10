export default {
  setTopTrendingSongs(state, payload) {
    // console.log("State before mutation:", state);
    state.topTrendingsSongs = payload;
    // console.log("State after mutation:", state);

  },
};
