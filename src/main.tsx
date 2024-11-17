
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

