import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HeaderAdmin from "./components/header_admin/HeaderAdmin";

// pages
import Login from "./pages/login/Login";

function App() {

  // display different admin either header admin or header user 
return(
<BrowserRouter>
<HeaderAdmin/>
<Routes>
  <Route>
  <Route path="/admin/login" element={<Login/>}/>
  </Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
