import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Award from "./pages/Award";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Season from "./pages/Season";
import MainLayout from "./routes/MainLayout";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = () =>
    createBrowserRouter([
      {
        path: "/",
        element: <MainLayout isLoading={isLoading} />,
        children: [
          {
            path: "/",
            element: (
              <Home
                seasonId={undefined}
                setLoadingHandler={setLoadingHandler}
              />
            ),
          },
          {
            path: "/seasons/:seasonId",
            element: <Season setLoadingHandler={setLoadingHandler} />,
          },
          {
            path: "/requests",
            element: <Request setLoadingHandler={setLoadingHandler} />,
          },
          {
            path: "/awards/:seasonId",
            element: <Award setLoadingHandler={setLoadingHandler} />,
          },
          {
            path: "*",
            element: (
              <Home
                seasonId={undefined}
                setLoadingHandler={setLoadingHandler}
              />
            ),
          },
        ],
      },
    ]);

  const setLoadingHandler = (state: boolean) => {
    setTimeout(() => {
      setIsLoading(state);
    }, 500);
  };

  return <RouterProvider router={router()} />;
};

export default App;
