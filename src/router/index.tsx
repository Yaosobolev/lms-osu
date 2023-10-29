import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/RootLayout.tsx";

import HomePage from "../pages/landing/home/page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      //   path: "/dashboard/mytest",
      //   element: <DashboardPage />,
      // },
    ],
  },
]);

export default router;
