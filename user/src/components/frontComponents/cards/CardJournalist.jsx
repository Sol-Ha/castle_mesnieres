import { Card } from "antd";
import { Container } from "react-bootstrap";
import TextTruncate from "react-text-truncate";

const CardJournalist = ({ name, content, videoYoutube }) => {
  return (
    <Container fluid id="card_new_journalist">
      <div className="journalist_title">
        <h3>{name}</h3>
      </div>
      <Card hoverable className="journalist_body">
          <TextTruncate
            className="card_media_txt"
            line={10}
            text={content}
            truncateText="…"
          />
          <iframe
            className="card_media_video"
            src={videoYoutube}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </Card>
    </Container>
  );
};

export default CardJournalist;
