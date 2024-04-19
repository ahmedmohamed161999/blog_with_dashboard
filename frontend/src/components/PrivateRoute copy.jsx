
import { Outlet, Navigate } from "react-router-dom";
export default function OnlyAdminPrivateRoute() {
    const currentUser = false;

    return currentUser && currentUser.isAdmin ? (
        <Outlet />
    ): (
        <Navigate to='sign-in'/>
    )
}

