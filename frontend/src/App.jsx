import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import {
  HashRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Toaster, toast } from "sonner";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import { useEffect } from "react";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (
    <>
      <Toaster richColors position="top-center" />
      <Routes>
        <Route path="/" element={<Navigate to="/admin-dashboard" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/employee-dashboard" element={
          <ProtectedRoute>
            <EmployeeDashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;
