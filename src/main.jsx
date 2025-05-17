import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./Layouts/MainLayout.jsx";
import Home from "./Component/Home.jsx";
import AddCoffee from "./Component/AddCoffee.jsx";
import UpdateCoffee from "./Component/UpdateCoffee.jsx";
import CoffeeDetails from "./Pages/CoffeeDetails.jsx";
import SignIn from "./Pages/SignIn.jsx";
import SignUp from "./Pages/SignUp.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import AllUsers from "./Pages/AllUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch("https://espresso-emporium-server-one-omega.vercel.app/coffees"),
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffees/:id",
        loader: ({ params }) =>
          fetch(`https://espresso-emporium-server-one-omega.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails,
      },
      {
        path: "/updateCoffee/:id",
        loader: ({ params }) =>
          fetch(`https://espresso-emporium-server-one-omega.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee,
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: '/users',
        loader: () => fetch('https://espresso-emporium-server-one-omega.vercel.app/users'),
        Component: AllUsers
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
