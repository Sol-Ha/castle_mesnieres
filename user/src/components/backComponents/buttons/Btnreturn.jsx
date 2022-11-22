import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Btnreturn = ({ urlCard }) => {

  return (
    <Link to = {urlCard} className="btnReturn">
      <div>
        <Image
          src="../../assets/icones/left-arrow.svg"
          alt="image d'une flèche"
        />
        <h4>RETURN</h4>
      </div>
    </Link>
  );
};

export default Btnreturn;
