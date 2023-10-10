

const getAlbum = async function (number) {
    try {
      const response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/album/${number}`,
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
      // console.log(responseData);
  
      const array = [...responseData.tracks.data];
      const songs = [];
      for (let i = 0; i < array.length; i++) {
        const song = {
          id: array[i].id,
          order: i + 1,
          artist: array[i].artist.name,
          songName: array[i].title,
          track: array[i].preview,
          songImage: array[i].album.cover_small,
          duration: array[i].duration
        };
        songs.push(song);
      }
  
      const album = {
        id: responseData.id,
        title: responseData.title,
        artist: {
            id: responseData.artist.id,
            name: responseData.artist.name,
            picture: responseData.artist.picture_small
        },
        albumImage: responseData.cover_medium,
        fans: responseData.fans,
        nb_tracks: responseData.nb_tracks,
        tracks: songs
      }

      return album;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

const getArtist = async function (artistNumber, albumNumber) {
  try {
    const response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/artist/${artistNumber}`,
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
    // console.log(responseData);

    const album = await getAlbum(albumNumber);
    const albumArray = [];
    albumArray.push(album);

    const artist = {
        id: responseData.id,
        name: responseData.name,
        fans: responseData.nb_fan,
        picture: responseData.picture_medium,
        album: albumArray
    }

    return artist;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default {
    async loadTopArtists(context) {
        const artistsArray = context.state.artists;
        const topArtists = [];
        for (let i = 0; i < artistsArray.length; i++) {
          const element = artistsArray[i];
          const data = await getArtist(element.artistNumber, element.albumNumber);
          topArtists.push(data);
        }

        console.log("Playlist Object:", topArtists);
    
        context.commit("setTopArtists", topArtists);
    }
};
