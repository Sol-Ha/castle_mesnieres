import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/userAuthContext";

// components
import Header from "./components/componentShared/Header";
import Footer from "./components/componentShared/Footer";

// pages user

import Index from "./pages/user/index/Index";
import ParcEtDomaine from "./pages/user/ParcEtDomaine";
import LouerNosSalles from "./pages/user/LouerNosSalles";

// pages admin
import Login from "./pages/admin/login/Login";
import LoginRecover from "./pages/admin/login/LoginRecover";
import LoginRecover2 from "./pages/admin/login/LoginRecover2";

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

// partners
import ManagePartners from "./pages/admin/partners/ManagePartners";
import EditPartner from "./pages/admin/partners/EditPartner";
import CreatePartner from "./pages/admin/partners/CreatePartner";

// partners
import ManageHire from "./pages/admin/hire/ManageHire";
import EditHire from "./pages/admin/hire/EditHire";
import CreateHire from "./pages/admin/hire/CreateHire";

// rent castle
import Visit from "./pages/admin/visit/Visit";

// bedrooms dorms and camping
import PathBedroomDormitory from "./pages/admin/accomodations/PathBedroomDormitory";
import ManageBedrooms from "./pages/admin/accomodations/ManageBedrooms";
import ManageDorms from "./pages/admin/accomodations/ManageDorms";

// rent rooms
import ManageRooms from "./pages/admin/rentCastle/ManageRooms";

// food
import PathFood from "./pages/admin/food/PathFood";
import ManageCaterer from "./pages/admin/food/ManageCaterer";

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* user */}
        <Route path="/" element={<Index />} />
        <Route path="ParcEtDomaine" element={<ParcEtDomaine />} />
        <Route path="LouerNosSalles" element={<LouerNosSalles />} />

        {/* admin */}
        <Route
          path="/admin/login"
          // if admin true you can login but if admin false return to index
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        <Route path="/admin/login_recover" element={<LoginRecover />} />

        <Route path="/admin/login_recover_userDB" element={<LoginRecover2 />} />

        {/* menu */}
        <Route
          path="admin/selection_menu"
          element={!user ? <SelectionMenu /> : <Navigate to="/admin/login" />}
        />

        {/* moderators */}
        <Route
          path="admin/manage_moderator"
          element={!user ? <ManageModerator /> : <Navigate to="/" />}
        />

        <Route
          path="/admin/create_moderator"
          element={!user ? <CreateModerator /> : <Navigate to="/" />}
        />

        <Route
          path="/admin/edit_moderator"
          element={!user ? <EditModerator /> : <Navigate to="/" />}
        />

        {/* articles & news */}
        <Route
          path="admin/path_events&news"
          element={!user ? <PathEventNews /> : <Navigate to="/" />}
        />

        <Route
          path="admin/manage_events"
          element={!user ? <ManageEvents /> : <Navigate to="/" />}
        />

        <Route
          path="admin/edit_event"
          element={!user ? <EditEvent /> : <Navigate to="/" />}
        />

        <Route
          path="admin/create_event"
          element={!user ? <CreateEvent /> : <Navigate to="/" />}
        />

        <Route
          path="admin/manage_news"
          element={!user ? <ManageNews /> : <Navigate to="/" />}
        />

        <Route
          path="admin/create_news"
          element={!user ? <CreateNews /> : <Navigate to="/" />}
        />

        <Route
          path="admin/edit_news"
          element={!user ? <EditNews /> : <Navigate to="/" />}
        />

        {/* partners */}
        <Route
          path="admin/manage_partners"
          element={!user ? <ManagePartners /> : <Navigate to="/" />}
        />

        <Route
          path="admin/create_partner"
          element={!user ? <CreatePartner /> : <Navigate to="/" />}
        />

        <Route
          path="admin/edit_partner"
          element={!user ? <EditPartner /> : <Navigate to="/" />}
        />

        {/* hire */}
        <Route
          path="admin/manage_hire"
          element={!user ? <ManageHire /> : <Navigate to="/" />}
        />

        <Route
          path="admin/create_hire"
          element={!user ? <CreateHire /> : <Navigate to="/" />}
        />

        <Route
          path="admin/edit_hire"
          element={!user ? <EditHire /> : <Navigate to="/" />}
        />

        {/* visit */}
        <Route
          path="admin/visit_castle"
          element={!user ? <Visit /> : <Navigate to="/" />}
        />

        {/* bedrooms dorms and camping */}
        <Route
          path="admin/path_bedroom&dormitory"
          element={!user ? <PathBedroomDormitory /> : <Navigate to="/" />}
        />

        <Route path="admin/manage_bedrooms" element={<ManageBedrooms />} />

        <Route
          path="admin/manage_dorms_and_camping"
          element={!user ? <ManageDorms /> : <Navigate to="/" />}
        />
        {/* rent rooms */}
        <Route
          path="admin/rent_rooms"
          element={!user ? <ManageRooms /> : <Navigate to="/" />}
        />

        {/* food */}
        <Route
          path="admin/path_food"
          element={!user ? <PathFood /> : <Navigate to="/" />}
        />
        <Route
          path="admin/manage_caterer"
          element={!user ? <ManageCaterer /> : <Navigate to="/" />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
