import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { lazy } from "react";

const Home = lazy(() => import("../components/Home"));
const Learning = lazy(() => import("../components/Learning"));
const Quiz = lazy(() => import("../components/Quiz"));
const Result = lazy(() => import("../components/Result"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/learn",
        element: <Learning />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
