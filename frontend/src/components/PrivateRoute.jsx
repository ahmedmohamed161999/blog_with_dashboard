
import { Outlet, Navigate } from "react-router-dom";
export default function PrivateRoute() {
    const currentUser = false;
    return currentUser ? <Outlet /> : <Navigate to='sign-in'/>;
}

