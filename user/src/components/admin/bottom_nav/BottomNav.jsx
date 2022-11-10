import { useNavigate } from "react-router-dom";
import { Image, Button } from "react-bootstrap";
import "./bottomNav.scss";

// rfce for function
const BottomNav = ({name}) => {

  const navigate = useNavigate();
  return (
    <>
    {/* DISCONNECTING USER */}
    <nav className="bottom_nav">
    <Button onClick={() => navigate("/admin/selection_menu")}>
        <Image src="../assets/icones/stag.svg" alt="icone de retour vers le menu principal" />
        PAGE D'ACCUEIL
        </Button>

      <span></span>
      <h2>{name}</h2>
    </nav>
    </>
  )
}

export default BottomNav
