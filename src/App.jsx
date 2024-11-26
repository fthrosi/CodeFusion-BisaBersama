import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import DashboardLayout from "./layouts/dashboardLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DashboardLayout />
    </>
  );
}

export default App;
