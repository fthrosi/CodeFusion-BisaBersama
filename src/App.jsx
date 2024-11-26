import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MyProject from './pages/myproject';
import DetailProject from './pages/myproject/detail';


export default function App() {
  return (
    <>
    <Routes>
      <Route path="/dashboard/myproject" element={<MyProject />} />
      <Route path="/dashboard/myproject/:id" element={<DetailProject />} />
    </Routes>
    </>
  );
}
