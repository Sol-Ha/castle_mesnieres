import { Image, Container } from "react-bootstrap";
import "../../../styles/userComponents.scss";

const CardEvent = ({
  title,
  eventType,
  image,
  description,
  urlEvent,
  date,
  author,
}) => {
  return (
    <Container className="card_event">
      <div className="card_eventHeader">
      <h4>{title}</h4>
      <h5>{eventType}</h5>
      </div>
      <Container className="card_eventMain">
      <div className="event_img">
        <Image
          src={image}
        />
      </div>
      <div className="event_body">
        <p>{description}</p>
      </div>
      </Container>
    </Container>
  );
};

export default CardEvent;
