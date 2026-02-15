import { ROUTES } from "@/shered/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { App } from "@/app/App";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import("@/features/pages/home-pages"),
      },
      {
        path: ROUTES.ROOMS,
        lazy: () => import("@/features/pages/rooms-pages"),
      },
      //   {
      //     path: ROUTES.HOME,
      //     loader: () => redirect(ROUTES.BOARDS),
      //   },
    ],
  },
]);
