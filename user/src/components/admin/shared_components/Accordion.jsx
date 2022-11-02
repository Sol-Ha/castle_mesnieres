import { Image } from "react-bootstrap";
import "./accordion.scss";

const DropDown = ({title}) => {



  return (
    <article className="dropDownA">
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <Image src="../../assets/icones/edit_create.svg" alt="image d'un stylo"/>
      </div>
    </article>
  )
}

export default DropDown