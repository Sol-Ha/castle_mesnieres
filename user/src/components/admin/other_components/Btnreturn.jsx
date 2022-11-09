import { Image } from "react-bootstrap";
import "./btn_return.scss";

const Btnreturn = ({urlCard}) => {
  return (
    <a href={urlCard} className="btnReturn">
    <div>
        <Image src="../../assets/icones/left-arrow.svg" alt="image d'une flèche"/>
    <h4>RETURN</h4>
    </div>
    </a>
  )
}

export default Btnreturn