import { Container, Image } from "react-bootstrap";
import "./_card.scss";

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