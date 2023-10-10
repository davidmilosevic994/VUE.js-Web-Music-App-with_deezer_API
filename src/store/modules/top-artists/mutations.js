export default {
    setTopArtists(state, payload) {
        console.log("State before mutation:", state);
        state.topArtists = payload;
        console.log("State after mutation:", state);
      },
};
