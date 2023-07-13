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
const CustomerList = lazy(() => import("../pages/customer/CustomerList"));
const CreateCustomer = lazy(() => import("../pages/customer/CreateCustomer"));
const TanningAppointment = lazy(() => import("../pages/TanningAppointment"));

const Router = () => {
  return (
    <AuthState>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/" element={<Master />}>
              <Route
                index
                path="/"
                element={
                  <Protected>
                    <DashboardPage />
                  </Protected>
                }
              />
              {/* <Route path="/customer" element={<Protected><Customer /></Protected>} /> */}
              <Route path="/customer" element={<CustomerList />} />
              <Route
                index
                path="/customer/create"
                element={<CreateCustomer />}
              />
              {/* <Route path="/tanning-appointment" element={<Protected><TanningAppointment /></Protected>} /> */}
              <Route
                path="/tanning-appointment"
                element={<TanningAppointment />}
              />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </AuthState>
  );
};

export default Router;
