export default {
    async loadTopChartsSongs(context) {
        const url = "https://deezerdevs-deezer.p.rapidapi.com/playlist/3155776842";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "74e0f277fdmsh5f2272fd80756abp1b981cjsn4c069e89efa6",
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          },
        };
    
        const response = await fetch(url, options);
        const responseData = await response.json();
    
        if (!response.ok) {
          const error = new Error(responseData.message || "Failed to fetch!");
          throw error;
        }
    
        // console.log("API Response Data:", responseData);
        const array = [...responseData.tracks.data];
        const topCharts = [];
    
        for (let i = 0; i < 10; i++) {
          const topChart = {
            id: array[i].id,
            order: i + 1,
            artist: array[i].artist.name,
            songName: array[i].title,
            track: array[i].preview,
            songImage: array[i].album.cover_medium,
            duration: array[i].duration,
            album: array[i].album.title
          };
          topCharts.push(topChart);
        }
    
        // console.log("Playlist Object:", topCharts);
    
        context.commit("setTopChartsSongs", topCharts);
      },
};
