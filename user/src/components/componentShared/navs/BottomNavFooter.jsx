import { Link } from "react-router-dom";

const BottomNavFooter = () => {
  return (
    <nav id="nav_bottomFooter">
      <Link className="linkFooter" to="/mentionsLegales">
        MENTIONS LEGALES
      </Link>

      <Link className="linkFooter" to="/emplois&stages">
        OFFRES EMPLOIS / STAGES
      </Link>

      <Link className="linkFooter" to="/credits">
        CREDITS
      </Link>

      <Link className="linkFooter" to="/nosPartenaires">
        NOS PARTENAIRES
      </Link>
    </nav>
  );
};

export default BottomNavFooter;
