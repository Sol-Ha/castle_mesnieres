import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderAdmin from "./components/admin/header_admin/HeaderAdmin";
import FooterAdmin from "./components/admin/footer_admin/FooterAdmin";

// pages user

import Index from "./pages/user/index/Index";
import ParcEtDomaine from "./pages/user/parc_et_domaine/ParcEtDomaine";

// pages admin
import Login from "./pages/admin/login/Login";
import SelectionMenu from "./pages/admin/menu/SelectionMenu";

import ManageModerator from "./pages/admin/moderators/ManageModerator";
import CreateModerator from "./pages/admin/moderators/CreateModerator";
import EditModerator from "./pages/admin/moderators/EditModerator";
// articles & news
import PathEventNews from "./pages/admin/articles/PathEventNews";
import ManageEvents from "./pages/admin/articles/ManageEvents";
import CreateEvent from "./pages/admin/articles/CreateEvent";
import EditEvent from "./pages/admin/articles/EditEvent";
import ManageNews from "./pages/admin/articles/ManageNews";
import CreateNews from "./pages/admin/articles/CreateNews";
import EditNews from "./pages/admin/articles/EditNews";
// bedrooms dorms and camping
import PathBedroomDormitory from "./pages/admin/accomodations/PathBedroomDormitory";
import ManageBedrooms from "./pages/admin/accomodations/ManageBedrooms";
import ManageDorms from "./pages/admin/accomodations/ManageDorms";

// rent rooms
import ManageRooms from "./pages/admin/rentCastle/ManageRooms";

function App() {
  // display differenet admin either header admin or header user
  return (
    <BrowserRouter>
      <HeaderAdmin />

      <Routes>
        {/* user */}
        <Route path="/" element={<Index />} />
        <Route path="/ParcEtDomaine" element={<ParcEtDomaine />} />
        {/* admin */}
        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/selection_menu" element={<SelectionMenu />} />

        <Route path="/admin/manage_moderator" element={<ManageModerator />} />
        <Route path="/admin/create_moderator" element={<CreateModerator />} />
        <Route path="/admin/edit_moderator" element={<EditModerator />} />

        {/* articles & news */}
        <Route path="/admin/path_events&news" element={<PathEventNews />} />
        <Route path="/admin/manage_events" element={<ManageEvents />} />
        <Route path="/admin/edit_event" element={<EditEvent />} />
        <Route path="/admin/create_event" element={<CreateEvent />} />
        <Route path="/admin/manage_news" element={<ManageNews />} />
        <Route path="/admin/create_news" element={<CreateNews />} />
        <Route path="/admin/edit_news" element={<EditNews />} />
        {/* bedrooms dorms and camping */}
        <Route
          path="/admin/path_bedroom&dormitory"
          element={<PathBedroomDormitory />}
        />
        <Route path="/admin/manage_bedrooms" element={<ManageBedrooms />} />
        <Route
          path="/admin/manage_dorms_and_camping"
          element={<ManageDorms />}
        />
        {/* rent rooms */}
        <Route path="/admin/rent_rooms" element={<ManageRooms />} />
      </Routes>

      <FooterAdmin />
    </BrowserRouter>
  );
}

export default App;
