import { Image } from "react-bootstrap";
import TextTruncate from "react-text-truncate";
import { Card, Col, Row, Rate, Avatar } from "antd";
import "./Card.scss";

const CardGoogle = ({ content, title, name, logo }) => {
  return (
    <Card className="card_google" hoverable>
    <Row span={2} justify="space-between" align="middle" value={80}>
      <Avatar span={2} src={logo} size={50}/> 
      <Rate span={1} offset={2} disabled defaultValue={5} /> 
      <Col span={2} offset={5}>
      <Avatar src="../assets/icones/google.svg"  size={30}/>
      </Col>
    </Row>
    <Row>
    <TextTruncate
        line={5}
        text={content}
        truncateText="…"
        // textTruncateChild={<a href="#">Read on</a>}
      />
    </Row>
      {/* <header>
        <div>
          <Image src={logo} />
          <h5>{title}</h5>
        </div>
        <Image src="../assets/icones/google.svg" />
      </header>
      <TextTruncate
        line={5}
        text={content}
        truncateText="…"
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <footer>
        <p>{name}</p>
      </footer> */}
    </Card>
  );
};

export default CardGoogle;
