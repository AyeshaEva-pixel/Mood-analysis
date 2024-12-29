import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import {
  getUserInfo,
  removeFromLocalStorage,
} from "../utils/localStorageAuthManagemet";
import { JwtPayload, verifyToken } from "../utils/verifyToken";
import { useAppDispatch } from "../redux/hooks";
import { Logout } from "../redux/features/auth/authSlice";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = getUserInfo();
  const dispatch = useAppDispatch();

  let user: JwtPayload | undefined;

  if (token !== null && typeof token === "string") {
    user = verifyToken(token);
  }

  if (user?.role !== undefined && role !== user?.role) {
    removeFromLocalStorage();
    dispatch(Logout());
    return <Navigate to="/login" replace={true} />;
  }

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
