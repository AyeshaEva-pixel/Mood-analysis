import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ResetPassword from "../pages/Auth/ResetPassword";
import Login from "../pages/Auth/Login";
import ForgetPassword from "../pages/Auth/ForgetPassword";
import Register from "../pages/Auth/RegisterSeller";
import ProtectedRoute from "../Layout/ProtectedRoute";
import routeGenerator from "../utils/routesGenerator";
import { adminPaths } from "./admin.routes";
import { sellerPaths } from "./seller.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />, // Redirect to /dashboard
  },
  {
    path: "/superAdmin",
    element: (
      <ProtectedRoute role={"superAdmin"}>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role={"admin"}>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(adminPaths),
  },
  {
    path: "/seller",
    element: (
      <ProtectedRoute role={"seller"}>
        <MainLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(sellerPaths),
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
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
    path: "/forget-password",
    element: <ForgetPassword />,
  },
]);

export default router;
