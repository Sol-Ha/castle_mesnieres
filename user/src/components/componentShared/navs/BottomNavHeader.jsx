import { useNavigate } from "react-router-dom";
import { Image, Button } from "react-bootstrap";

// rfce for function
const BottomNavHeader = ({name, urlNav}) => {

  const navigate = useNavigate({urlNav});
  return (
    <>
    {/* DISCONNECTING USER */}
    <nav className="bottom_nav">
    <Button onClick={() => navigate(urlNav)}>
        <Image src="../../assets/icones/stag.svg" alt="icone de retour vers le menu principal" />
        PAGE D'ACCUEIL
        </Button>

      <span></span>
      <h2>{name}</h2>
    </nav>
    </>
  )
}

export default BottomNavHeader
