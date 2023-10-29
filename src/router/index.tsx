import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/RootLayout.tsx";

import HomePage from "../pages/landing/home/page.tsx";

import AuthLayout from "../pages/auth/AuthLayout.tsx";
import SignInPage from "../pages/auth/sign-in/SignInPage.tsx";
import SignUpPage from "../pages/auth/sign-up/SignUpPage.tsx";

import ConfirmEmailPage, {
  loader as confirmEmailLoader,
} from "../pages/auth/confirm-email/ConfirmEmailPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: "/sign-in",
            element: <SignInPage />,
          },
          {
            path: "/sign-up",
            element: <SignUpPage />,
          },
          {
            path: "/confirm-email",
            element: <ConfirmEmailPage />,
            loader: confirmEmailLoader,
          },
        ],
      },
      // {
      //   path: "/dashboard/mytest",
      //   element: <DashboardPage />,
      // },
    ],
  },
]);

export default router;
