import { createBrowserRouter } from "react-router-dom";

//diferentes páginas
import { Home } from "./routes/Home";
import NotFound from "./routes/NotFound";
import LayoutPublic from "./layout/LayoutPublic";
import Country, { loaderCountry } from "./routes/Country";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/country/:id",
        element: <Country />,
        loader: loaderCountry,
      },
    ],
  },
]);
