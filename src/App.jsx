import { createBrowserRouter } from "react-router-dom";

//diferentes páginas
import { Home } from "./routes/Home";
import NotFound from "./routes/NotFound";
import LayoutPublic from "./layout/LayoutPublic";

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
    ],
  },
]);
