import { User } from "parse";

import { Navigate, Outlet } from "react-router";

export default function RequireAuth() {
  if (!User.current()) {
    // Redirect to the /login page,
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
