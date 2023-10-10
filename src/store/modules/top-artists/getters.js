export default {
  topArtists(state) {
    const topArtists = state.topArtists;
    console.log("Getter Playlist:", topArtists); // Add this line to log the playlist data

    return topArtists;
  },
};
