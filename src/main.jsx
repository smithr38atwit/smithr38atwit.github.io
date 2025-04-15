import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from "./routes/app/app.jsx";
import "./index.css";
import ErrorPage from "./error_page.jsx";
import Home from "./routes/home/home.jsx";
import Projects from "./routes/projects/projects.jsx";
import Experience from "./routes/experience/experience.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      // {
      //   path: "about",
      //   element: <About />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
