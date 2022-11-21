import Home from "../pages/home";
import Personal from "../pages/personal";
import Radio from "../pages/radio";
import ZingChart from "../pages/zingchart";
import Search from "../pages/search";
import Artists from "../pages/artists";
const publicRouter = [
  { id: 1, path: "/", component: Home },
  { id: 2, path: "/personal", component: Personal },
  { id: 3, path: "/radio", component: Radio },
  { id: 4, path: "/zingchart", component: ZingChart },
  { id: 5, path: "/search", component: Search },
  { id: 6, path: "/artists/:id", component: Artists },
];
const privateRouter = [];

export { publicRouter, privateRouter };
