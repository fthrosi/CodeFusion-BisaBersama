import { Routes, Route } from "react-router-dom";
import MyProject from "./pages/myproject";
import DetailProject from "./pages/myproject/detail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import TestSkill from "./pages/test_skill/TestSkillPage";
import Test from "./pages/test_skill/Test";
import Detail_Test from "./pages/test_skill/Detail_Test";
import Proyek from "./pages/Proyek/Proyek";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard/myproject" element={<MyProject />} />
        <Route path="/dashboard/myproject/:id" element={<DetailProject />} />
        <Route path="/tests" element={<TestSkill />} />
        <Route path="/detail-test" element={<Detail_Test />} />
        <Route path="/test" element={<Test />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/proyek" element={<Proyek />}></Route>
      </Routes>
    </>
  );
}
