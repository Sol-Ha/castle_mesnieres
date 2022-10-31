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

import ManageModerator from "./pages/admin/create_moderator/ManageModerator";
import CreateModerator from "./pages/admin/create_moderator/CreateModerator";
import EditModerator from "./pages/admin/create_moderator/EditModerator";

import PathBedroomDormitory from "./pages/admin/path_bedrooms_dormitory/PathBedroomDormitory";

import PathEventNews from "./pages/admin/create_eventsAndNews/PathEventNews";
import ManageEvents from "./pages/admin/create_eventsAndNews/ManageEvents";
import CreateEvent from "./pages/admin/create_eventsAndNews/CreateEvent";
import EditEvent from "./pages/admin/create_eventsAndNews/EditEvent";

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
        <Route path="/admin/edit_moderator" element={<EditModerator />}/>

        <Route path='/admin/path_events&news' element={<PathEventNews />}/>
        <Route path="/admin/manage_events" element={<ManageEvents />}/>
        <Route path="/admin/edit_event" element={<EditEvent />}/>
        <Route path="/admin/create_event" element={<CreateEvent />}/>

        <Route path='/admin/path_bedroom&dormitory' element={<PathBedroomDormitory />}/>

      </Routes>

      <FooterAdmin />
    </BrowserRouter>
  );
}

export default App;
