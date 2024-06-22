import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Login, UserDetails } from "./pages";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/users",
    element: <Dashboard />,
  },
  {
    path: "/users/:id",
    element: <UserDetails />,
  },
]);
