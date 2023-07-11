import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import required components
import Master from "../layout/Master";
import Protected from "../layout/PrivateRoute";
import AuthState from "../context/AuthState";
import AuthLayout from "../layout/AuthLayout";

// Lazy load pages
const DashboardPage = lazy(() => import("../pages/DashboardPage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const Login = lazy(() => import("../pages/LoginPage"));
const Customer = lazy(() => import("../pages/Customer"));
const TanningAppointment = lazy(() => import("../pages/TanningAppointment"));

const Router = () => {
	return (
		<AuthState>
			<BrowserRouter>
				<AuthLayout>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route path="/login" element={<Login />} />
						</Routes>
					</Suspense>
				</AuthLayout>
				<Master>
					<Suspense fallback={<div>Loading...</div>}>
						<Routes>
							<Route
								path="/"
								element={
									<Protected>
										<DashboardPage />
									</Protected>
								}
							/>
							<Route path="*" element={<PageNotFound />} />
							{/* <Route path="/customer" element={<Protected><Customer /></Protected>} /> */}
							<Route path="/customer" element={<Customer />} />
							{/* <Route path="/tanning-appointment" element={<Protected><TanningAppointment /></Protected>} /> */}
							<Route path="/tanning-appointment" element={<TanningAppointment />} />
						</Routes>
					</Suspense>
				</Master>
			</BrowserRouter>
		</AuthState>
	);
};

export default Router;
