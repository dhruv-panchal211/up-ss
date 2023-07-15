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
const AddTanningAppointment = lazy(() =>
  import("../pages/tanningAppoinment/AddTanningAppointment")
);
const TanningAppointmentList = lazy(() =>
  import("../pages/tanningAppoinment/TanningAppointmentList")
);
const AddTanningType = lazy(() =>
  import("../pages/tanningType/AddTanningType")
);
const AddTanningPlan = lazy(() =>
  import("../pages/tanningPlan/AddTanningPlan")
);
const TanningPlanList = lazy(() =>
  import("../pages/tanningPlan/TanningPlanList")
);
const TanningSessionList = lazy(() =>
  import("../pages/tanningSession/TanningSessionList")
);
const AddTanningSession = lazy(() =>
  import("../pages/tanningSession/AddTanningSession")
);

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
              <Route
                index
                path="/customer/edit"
                element={<CreateCustomer mode="edit" />}
              />
              {/* <Route path="/tanning-appointment" element={<Protected><TanningAppointment /></Protected>} /> */}
              <Route
                path="/tanning-appointment"
                element={<TanningAppointmentList />}
              />
              <Route
                path="/tanning-appointment/add"
                element={<AddTanningAppointment />}
              />
              <Route path="/tanning-type/add" element={<AddTanningType />} />
              <Route path="/tanning-plan" element={<TanningPlanList />} />
              <Route path="/tanning-plan/add" element={<AddTanningPlan />} />
              <Route path="/tanning-session" element={<TanningSessionList />} />
              <Route
                path="/tanning-session/add"
                element={<AddTanningSession />}
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
