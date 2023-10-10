import { createRouter, createWebHistory } from "vue-router";

import HomeMain from "./pages/home/HomeMain.vue";
import ArtistDetail from "./pages/artist/ArtistDetail.vue";
import AlbumDetails from "./pages/album/AlbumDetails.vue";
import PlaylistDetails from "./pages/playlist/PlaylistDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeMain },
    { path: "/artist/:id", component: ArtistDetail, props: true },
    { path: "/album/:id", component: AlbumDetails, props: true },
    { path: "/playlist/:id", component: PlaylistDetails, props: true },
  ],
});

export default router;
