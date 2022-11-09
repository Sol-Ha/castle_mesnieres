import { Image } from "react-bootstrap";
import "./cardTime.scss";

const cardTime = ({url, date, firstName, lastName}) => {
  return (
    <a href={url} className="cardTime">
    <article>
      <div>
        <p>{date}</p>
        </div>
      <div>
        <p>{firstName} &nbsp; &nbsp;</p>
        <p>{lastName}</p>
      </div>
      <div>
        <Image src="../../assets/icones/edit_create.svg" alt="image d'un stylo"/>
      </div>
    </article>
    </a>
  )
}

export default cardTime