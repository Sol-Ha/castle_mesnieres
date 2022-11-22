import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Header from "./components/componentShared/Header";
import Footer from "./components/componentShared/Footer";

// pages user

import Index from "./pages/frontPages/index/Index";
import ParcEtDomaine from "./pages/frontPages/ParcEtDomaine";
import LouerNosSalles from "./pages/frontPages/LouerNosSalles";

// pages admin
import Login from "./pages/backPages/login/Login";
import LoginRecover from "./pages/backPages/login/LoginRecover";
import LoginRecover2 from "./pages/backPages/login/LoginRecover2";

import SelectionMenu from "./pages/backPages/menu/SelectionMenu";

import ManageModerator from "./pages/backPages/moderators/ManageModerator";
import CreateModerator from "./pages/backPages/moderators/CreateModerator";
import EditModerator from "./pages/backPages/moderators/EditModerator";

// articles & news
import PathEventNews from "./pages/backPages/articles/PathEventNews";
import ManageEvents from "./pages/backPages/articles/ManageEvents";
import CreateEvent from "./pages/backPages/articles/CreateEvent";
import EditEvent from "./pages/backPages/articles/EditEvent";
import ManageNews from "./pages/backPages/articles/ManageNews";
import CreateNews from "./pages/backPages/articles/CreateNews";
import EditNews from "./pages/backPages/articles/EditNews";

// partners
import ManagePartners from "./pages/backPages/partners/ManagePartners";
import EditPartner from "./pages/backPages/partners/EditPartner";
import CreatePartner from "./pages/backPages/partners/CreatePartner";

// partners
import ManageHire from "./pages/backPages/hire/ManageHire";
import EditHire from "./pages/backPages/hire/EditHire";
import CreateHire from "./pages/backPages/hire/CreateHire";

// rent castle
import Visit from "./pages/backPages/visit/Visit";

// bedrooms dorms and camping
import PathBedroomDormitory from "./pages/backPages/accomodations/PathBedroomDormitory";
import ManageBedrooms from "./pages/backPages/accomodations/ManageBedrooms";
import ManageDorms from "./pages/backPages/accomodations/ManageDorms";

// rent rooms
import ManageRooms from "./pages/backPages/rentCastle/ManageRooms";

// food
import PathFood from "./pages/backPages/food/PathFood";
import ManageCaterer from "./pages/backPages/food/ManageCaterer";

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* user */}
        <Route path="/" element={<Index />} />
        <Route path="ParcEtDomaine" element={<ParcEtDomaine />} />
        <Route path="LouerNosSalles" element={<LouerNosSalles />} />

        {/* admin */}
        <Route path="/admin/login" element={<Login/>}/>

        <Route path="/admin/login_recover" element={<LoginRecover />} />

        <Route path="/admin/login_recover_userDB" element={<LoginRecover2 />} />

        {/* menu */}
        <Route path="admin/selection_menu" element={ <SelectionMenu />}/>

        {/* moderators */}
        <Route path="admin/manage_moderator" element={ <ManageModerator/>}/>

        <Route path="/admin/create_moderator" element={ <CreateModerator />}/>

        <Route path="/admin/edit_moderator" element={<EditModerator /> }/>

        {/* articles & news */}
        <Route path="admin/path_events&news" element={<PathEventNews />}/>

        <Route path="admin/manage_events" element={<ManageEvents />}/>

        <Route path="admin/edit_event" element={<EditEvent />}/>

        <Route path="admin/create_event" element={<CreateEvent />}/>

        <Route path="admin/manage_news" element={<ManageNews />}/>

        <Route path="admin/create_news" element={<CreateNews />} />

        <Route path="admin/edit_news" element={<EditNews />}/>

        {/* partners */}
        <Route path="admin/manage_partners" element={<ManagePartners />}/>

        <Route path="admin/create_partner" element={<CreatePartner />}/>

        <Route path="admin/edit_partner" element={ <EditPartner />}/>

        {/* hire */}
        <Route path="admin/manage_hire" element={<ManageHire />}/>

        <Route path="admin/create_hire" element={<CreateHire />}/>

        <Route path="admin/edit_hire" element={<EditHire />}/>

        {/* visit */}
        <Route path="admin/visit_castle" element={<Visit />}/>

        {/* bedrooms dorms and camping */}
        <Route path="admin/path_bedroom&dormitory" element={<PathBedroomDormitory />}/>

        <Route path="admin/manage_bedrooms" element={<ManageBedrooms />} />

        <Route path="admin/manage_dorms_and_camping" element={<ManageDorms />}/>
        
        {/* rent rooms */}
        <Route path="admin/rent_rooms" element={<ManageRooms />}/>

        {/* food */}
        <Route path="admin/path_food" element={<PathFood />}/>

        <Route path="admin/manage_caterer" element={<ManageCaterer />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
