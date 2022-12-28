import AuthLayout from "../layout/auth";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const authRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ],
};
export default authRoutes;
