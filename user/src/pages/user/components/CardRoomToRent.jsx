import "../../../styles/userComponents.scss";
import { Container, Image } from "react-bootstrap";

const CardRoomToRent = ({presentation}) => {
  return (
    <Container className="cardRooom">
        <header></header>
        <article>
            <Image></Image>
            <div>
            <p>{presentation}</p>
            </div>
        </article>
    </Container>
  )
}

export default CardRoomToRent