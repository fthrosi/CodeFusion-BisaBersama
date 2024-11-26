import { useState } from "react";
import { Route, Routes} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LayoutLanding from "./layouts/LandingLayout";


function App() {
  return (
      <Routes>
          <Route path="/" element={<LayoutLanding />}/>
      </Routes>
  );
}

export default App;
