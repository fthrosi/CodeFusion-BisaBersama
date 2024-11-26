import { Routes, Route } from "react-router-dom";
import DashboardPage from "../pages/Dashboard/dashboardPage";

const DashboardLayout = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};

export default DashboardLayout;
