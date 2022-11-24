import Home from "../pages/home";
import Personal from "../pages/personal";
import Radio from "../pages/radio";
import ZingChart from "../pages/zingchart";
import Search from "../pages/search";
import Artists from "../pages/artists";
import ArtistsAll from "../components/artistsMenu/artistsAll";
import ArtistsSong from "../components/artistsMenu/artistsSong";
import ArtistsSingle from "../components/artistsMenu/artistsSingle";
import ArtistsAlbum from "../components/artistsMenu/artistsAlbum";
import ArtistsMv from "../components/artistsMenu/artistsMv";
const publicRouter = [
  { id: 1, path: "/", component: Home },
  { id: 2, path: "/personal", component: Personal },
  { id: 3, path: "/radio", component: Radio },
  { id: 4, path: "/zingchart", component: ZingChart },
  { id: 5, path: "/search", component: Search },
  {
    id: 6,
    path: "/artists/:id",
    component: Artists,
    children: [
      { id: 6.1, path: "/artists/:id/", component: ArtistsAll },
      { id: 6.2, path: "/artists/:id/song", component: ArtistsSong },
      { id: 6.3, path: "/artists/:id/single", component: ArtistsSingle },
      { id: 6.4, path: "/artists/:id/album", component: ArtistsAlbum },
      { id: 6.5, path: "/artists/:id/mv", component: ArtistsMv },
    ],
  },
];
const privateRouter = [];

export { publicRouter, privateRouter };
