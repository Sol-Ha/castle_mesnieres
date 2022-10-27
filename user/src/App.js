import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderAdmin from "./components/header_admin/HeaderAdmin";
import FooterAdmin from "./components/footer_admin/FooterAdmin";
import SelectionMenu from "./pages/selection_menu/SelectionMenu";
// import HeaderAdmin from "./components/header_admin/HeaderAdmin";

// pages

import Index from "./pages/index/Index";
import Login from "./pages/login/Login";
import ParcEtDomaine from "./pages/parc_et_domaine/ParcEtDomaine";


function App() {
  
  // display differenet admin either header admin or header user
  return (
    <BrowserRouter>
      <HeaderAdmin />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/selection_menu" element={<SelectionMenu/>}/>
        <Route path='/ParcEtDomaine' element={<ParcEtDomaine />}/>
      </Routes>

      <FooterAdmin />
    </BrowserRouter>
  );
}

export default App;
