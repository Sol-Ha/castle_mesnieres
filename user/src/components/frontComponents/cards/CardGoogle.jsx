import TextTruncate from "react-text-truncate";
import { Card, Col, Row, Rate, Avatar } from "antd";

// link to redirect
// use of library antd with parameters to display for the api

const CardGoogle = ({link, content, rate, name, logo }) => {
  return (
    <Card className="card_google" hoverable>
      <a href={link}>
        <Row span={2} justify="space-between" align="middle" value={80}>
          <Avatar span={2} src={logo} size={50} />
          <Rate disabled defaultValue={rate} />
          <Col span={2} offset={5}>
            <Avatar src="../assets/icones/google.svg" size={30} />
          </Col>
        </Row>

        <Row>
          <TextTruncate className="card_google_body"
          line={7} 
          text={content} 
          truncateText="…" />
        </Row>

        <Row justify="end">
          <Col style={{ textAlign: "end" }}>{name}</Col>
        </Row>
      </a >
    </Card>
  );
};

export default CardGoogle;
