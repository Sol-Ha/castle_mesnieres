import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderUser from "./components/header_admin/HeaderAdmin";
import FooterUser from "./components/footer_admin/FooterAdmin";
// import HeaderAdmin from "./components/header_admin/HeaderAdmin";

// pages

import Index from "./pages/index/Index";
import Login from "./pages/login/Login";

function App() {
  // display differenet admin either header admin or header user
  return (
    <BrowserRouter>
      <HeaderUser />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>

      <FooterUser />
    </BrowserRouter>
  );
}

export default App;
