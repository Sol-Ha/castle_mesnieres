import { Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const CardEvent = ({
  title,
  eventType,
  image,
  description,
  date,
  author,
}) => {

  return (

    <Container fluid className="card_new_event">
      <div className="new_event">
        <h3>{title}</h3>
        <h4>{eventType}</h4>
      </div>
      <Container className="card_eventMain">
        <div className="event_img">
          <Image src={image} alt="Evenement en cours"/>
        </div>
        <div className="event_body">
          <TextTruncate
            line={3}
            text={description}
            truncateText="…"
          />
          <footer>
          <Link to="/Evemenent">En savoir plus</Link>
          </footer>
        </div>
      </Container>
    </Container>
  );
};

export default CardEvent;
