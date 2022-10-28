import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderAdmin from "./components/admin/header_admin/HeaderAdmin";
import FooterAdmin from "./components/admin/footer_admin/FooterAdmin";

// pages user

import Index from "./pages/index/Index";
import ParcEtDomaine from "./pages/parc_et_domaine/ParcEtDomaine";

// pages admin
import Login from "./pages/admin/login/Login";
import SelectionMenu from "./pages/admin/selection_menu/SelectionMenu";
import CreateAdmin from "./pages/admin/admin_create_admin/CreateAdmin";


function App() {
  
  // display differenet admin either header admin or header user
  return (
    <BrowserRouter>
      <HeaderAdmin />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/selection_menu" element={<SelectionMenu />}/>
        <Route path="/admin/create_admin" element={<CreateAdmin />}/>
        <Route path='/ParcEtDomaine' element={<ParcEtDomaine />}/>
      </Routes>

      <FooterAdmin />
    </BrowserRouter>
  );
}

export default App;
