import DefaultLayout from "../layout/default";
import Home from "../pages/Home";
import Prices from "../pages/Prices";
import Price from "../pages/Price";
import Learn from "../pages/Learn";
import Exchanges from "../pages/Exchanges";
import Exchange from "../pages/Exchange";
import News from "../pages/News";
const mainRoutes = {
  path: "/",
  element: <DefaultLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/prices",
      element: <Prices />,
    },
    {
      path: "/price/:id",
      element: <Price />,
    },
    {
      path: "/exchange",
      element: <Exchanges />,
    },
    {
      path: "/exchange/:id",
      element: <Exchange />,
    },
    {
      path: "/learn",
      element: <Learn />,
    },
    {
      path: "/news",
      element: <News />,
    },
  ],
};
export default mainRoutes;
