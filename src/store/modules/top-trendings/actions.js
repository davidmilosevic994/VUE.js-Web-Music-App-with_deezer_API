export default {
  async loadTopTrendingSongs(context) {
    const url5 = "https://deezerdevs-deezer.p.rapidapi.com/playlist/1282495565";
    const options5 = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "74e0f277fdmsh5f2272fd80756abp1b981cjsn4c069e89efa6",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    const response = await fetch(url5, options5);
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }

    // console.log("API Response Data:", responseData);
    const array = [...responseData.tracks.data];
    const topTrendings = [];

    for (let i = 0; i < 5; i++) {
      const topSong = {
        id: array[i].id,
        order: i + 1,
        artist: array[i].artist.name,
        songName: array[i].title,
        track: array[i].preview,
        songImage: array[i].album.cover_xl,
        duration: array[i].duration,
        album: array[i].album.title
      };
      topTrendings.push(topSong);
    }

    // console.log("Playlist Object:", topTrendings);

    context.commit("setTopTrendingSongs", topTrendings);
  },
};
