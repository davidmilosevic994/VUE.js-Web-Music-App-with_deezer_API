const getPlaylist = async function (playlistNumber) {
  try {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/playlist/${playlistNumber}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "74e0f277fdmsh5f2272fd80756abp1b981cjsn4c069e89efa6",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    const responseData = await response.json();
    const array = [...responseData.tracks.data];
    const playlistTracks = [];

    array.forEach((element, index) => {
      const song = {
        id: element.id,
        order: index + 1,
        artist: element.artist.name,
        songName: element.title,
        track: element.preview,
        songImage: element.album.cover_medium,
        duration: element.duration,
      };
      playlistTracks.push(song);
    });

    const playlist = {
      id: responseData.id,
      title: responseData.title,
      creator: responseData.creator.name,
      fans: responseData.fans,
      duration: responseData.duration,
      nb_tracks: responseData.nb_tracks,
      picture: responseData.picture_medium,
      tracks: playlistTracks,
    };

    return playlist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default {
  async loadPlaylists(context) {
    const playlistArray = [];
    const data1 = await getPlaylist(3155776842);
    const data2 = await getPlaylist(6614423884);
    playlistArray.push(data1);
    playlistArray.push(data2);

    console.log("Playlist Object:", playlistArray);

    context.commit("setPlaylists", playlistArray);
  },
};
