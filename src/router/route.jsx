import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layout/Layout";

const router = createBrowserRouter([
  { path: "/", element: <Layout />,children: [
    { path: "", element: <HomePage /> },
  ] },
]);

export default function Route() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
