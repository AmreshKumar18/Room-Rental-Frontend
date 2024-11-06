// import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Pages/Client/Layout";
import Home from "./Pages/Client/Home";
import About from "./Pages/Client/About";
import Contact from "./Pages/Client/Contact";
import Rent from "./Pages/Client/Rent";
import RentDetails from "./Pages/Client/RentDetails";
import Error from "./Components/Error";
import AddRent from "./Pages/Admin/AddRent";
import Login from "./Pages/Client/Login";
import Register from "./Pages/Client/Register";
import ForgotPassword from "./Pages/Client/ForgotPassword";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/rent",
          element: <Rent />,
        },
        {
          path: "/room-rent-details/:id",
          element: <RentDetails />,
        },
        {
          path: "/add-rent",
          element: <AddRent />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/reset-password",
          element: <ForgotPassword />,
        },
        {
          path: "*",
          element: <Error />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
