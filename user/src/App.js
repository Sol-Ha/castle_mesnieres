import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderAdmin from "./components/admin/header_admin/HeaderAdmin";
import FooterAdmin from "./components/admin/footer_admin/FooterAdmin";

// pages user

import Index from "./pages/user/index/Index";
import ParcEtDomaine from "./pages/user/parc_et_domaine/ParcEtDomaine";

// pages admin
import Login from "./pages/admin/login/Login";
import SelectionMenu from "./pages/admin/selection_menu/SelectionMenu";

import ManageModerator from "./pages/admin/manage_moderator/ManageModerator";
import CreateModerator from "./pages/admin/create_moderator/CreateModerator";
import PathBedroomDormitory from "./pages/admin/path_bedrooms_dormitory/PathBedroomDormitory";
import PathEventNews from "./pages/admin/path_event_news/PathEventNews";

function App() {
  
  // display differenet admin either header admin or header user
  return (
    <BrowserRouter>
      <HeaderAdmin />

      <Routes>
        {/* user */}
        <Route path="/" element={<Index />} />
        <Route path='/ParcEtDomaine' element={<ParcEtDomaine />}/>
        {/* admin */}
        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/selection_menu" element={<SelectionMenu />}/>

        <Route path="/admin/manage_moderator" element={<ManageModerator />}/>
        <Route path="/admin/create_moderator" element={<CreateModerator />}/>

        <Route path='/admin/path_events&news' element={<PathEventNews />}/>

        <Route path='/admin/path_bedroom&dormitory' element={<PathBedroomDormitory />}/>

      </Routes>

      <FooterAdmin />
    </BrowserRouter>
  );
}

export default App;
