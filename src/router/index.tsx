import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/RootLayout.tsx";
import DashboardLayout from "../pages/dashboard/DashboardLayout.tsx";
import UserPage from "../pages/dashboard/user/UserPage.tsx";
import HomePage from "../pages/landing/home/page.tsx";

import AuthLayout from "../pages/auth/AuthLayout.tsx";
import SignInPage from "../pages/auth/sign-in/SignInPage.tsx";
import SignUpPage from "../pages/auth/sign-up/SignUpPage.tsx";

import DashboardPage from "../pages/mytest/page.tsx";
import LayoutTesty from "../pages/mytest/layout.tsx";
import TestPage from "../pages/mytest/testy/index.tsx";

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
      //   path: "dashboard",
      //   children: [],
      // },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
          {
            path: "user",
            element: <UserPage />,
            children: [],
          },
          {
            path: "mytest",
            element: <LayoutTesty></LayoutTesty>,
            children: [
              {
                path: "",
                element: <DashboardPage />,
                children: [],
              },
              {
                path: "test",
                element: <TestPage />,
                children: [],
              },
            ],
          },
        ],
      },
      // {
      //   path: "/dashboard/mytest",
      //   element: <DashboardPage />,
      // },
      {
        path: "/mytest",
        element: <LayoutTesty></LayoutTesty>,
        children: [
          {
            path: "user",
            element: <DashboardPage />,
            children: [],
          },
          {
            path: "test",
            element: <TestPage />,
            children: [],
          },
        ],
      },
    ],
  },
]);

export default router;
