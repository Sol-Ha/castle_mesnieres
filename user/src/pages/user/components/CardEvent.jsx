import { Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
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
    <Container fluid className="card_event">
      <div className="card_eventHeader">
        <h4>{title}</h4>
        <h5>{eventType}</h5>
      </div>
      <Container className="card_eventMain">
        <div className="event_img">
          <Image src={image} />
        </div>
        <Link to="/Evemenent" className="event_body">
          <TextTruncate
            line={3}
            text={description}
            truncateText="…"
            // textTruncateChild={<a href="#">Read on</a>}
          />
        </Link>
      </Container>
    </Container>
  );
};

export default CardEvent;
