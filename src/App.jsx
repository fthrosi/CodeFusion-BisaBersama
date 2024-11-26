import { Routes, Route } from 'react-router-dom'
import MyProject from './pages/myproject';
import DetailProject from './pages/myproject/detail';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/dashboard/myproject" element={<MyProject />} />
      <Route path="/dashboard/myproject/:id" element={<DetailProject />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </>
  );
}
