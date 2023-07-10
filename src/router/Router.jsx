import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import required components
import Master from "../layout/Master";
import Protected from "../layout/PrivateRoute";
import AuthState from "../context/AuthState";

// Lazy load pages
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Login = lazy(() => import("../pages/LoginPage"));

const Router = () => {
  return (
    <AuthState>
      <BrowserRouter>
        <Master>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <Protected>
                    <DashboardPage />
                  </Protected>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </Master>
      </BrowserRouter>
    </AuthState>
  );
};

export default Router;
