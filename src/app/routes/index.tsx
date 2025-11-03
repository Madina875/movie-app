import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Reviews } from "../../pages/movie-detail/review";
import { Cast } from "../../pages/movie-detail/cast";
import { Others } from "../../pages/movie-detail/others";
import CrewDetail from "../../pages/crew-detail";
const Home = lazy(() => import("@/pages/home"));
const Search = lazy(() => import("@/pages/search"));
const Movie = lazy(() => import("@/pages/movie"));
const Tickets = lazy(() => import("@/pages/tickets"));
const MovieDetail = lazy(() => import("@/pages/movie-detail"));

const AppRouter = () => {
  const router = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "/movie", element: <Movie /> },
        { path: "/search", element: <Search /> },
        { path: "/tickets", element: <Tickets /> },
        { path: "*", element: <div>NotFound</div> },
        {
          path: "/movie/:id",
          element: <MovieDetail />,
          children: [
            { path: "review", element: <Reviews /> },
            { index: true, element: <Cast /> },
            { path: "others", element: <Others /> },
          ],
        },
        { path: "/crew/:id", element: <CrewDetail /> },
      ],
    },
  ]);
  return router;
};

export default memo(AppRouter);
