import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Proyek from "./pages/Proyek/Proyek";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/proyek" element={<Proyek />}></Route>
      </Routes>
    </>
  );
}

export default App;
