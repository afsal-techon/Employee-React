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
import AdminSummary from "./components/Dashboard/AdminSummary";
import DepartList from "./components/Departments/DepartList";
import AddDepartments from "./components/Departments/AddDepartments";

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
        } >
          

         {/* //route system for admin panel page wiese */}
        <Route index element={<AdminSummary/>}></Route>
        <Route path="/admin-dashboard/departments" element={<DepartList/>}></Route>
         <Route path="/admin-dashboard/add-department" element={<AddDepartments/>}></Route>
          </Route>



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
