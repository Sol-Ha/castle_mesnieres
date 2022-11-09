import { Row, Form, Col, Button } from "react-bootstrap";
import "./formAccomodation.scss";

const formAccomodation = ({ title, image, message, lowSeason, highSeason }) => {
  return (
    <>
      <Form className="formAccomodation">
        <h3>{title}</h3>
        <p>
          <span>* </span>Les champs marqués par une étoile sont obligatoires
        </p>

        {/* title */}
        <Col>
          <Form.Group className="mb-4">
            <Form.Label>
              <span>* </span>TITRE
            </Form.Label>
            <Form.Control
              name={title}
              type="text"
              placeholder="exemple: Suite"
              required
            />
          </Form.Group>
        </Col>

        {/* image */}
        <Col>
          <Form.Group controlId="formFileLg" className="mb-4 inputhalf">
            <Form.Label>
              <span>* </span>INSERER UNE IMAGE
            </Form.Label>
            <Form.Control type="file" size="lg" name={image} required />
          </Form.Group>
        </Col>

        {/* article's inner */}
        <Col>
          <Form.Group className="mb-4">
            <Form.Label>
              <span>* </span>CONTENU
            </Form.Label>
            <Form.Control
              name={message}
              className="mb-4"
              as="textarea"
              rows={"10"}
              placeholder="Entrer votre texte..."
              required
            />
          </Form.Group>
        </Col>
        {/* money low season */}
        <Form.Group className="mb-5">
          <Row>
            <Col>
              <Form.Label>
                <span>* </span>PRIX BASSE SAISON ( € )
              </Form.Label>
              <Form.Control
                name={lowSeason}
                type="number"
                placeholder="exemple: 10,80"
                required
              />
            </Col>
            <Col>
              {/* money high season */}
              <Form.Label>
                <span>* </span>PRIX HAUTE SAISON ( € )
              </Form.Label>
              <Form.Control
                name={highSeason}
                type="number"
                placeholder="exemple: 10,80"
                required
              />
            </Col>
          </Row>
        </Form.Group>

        <Button variant="primary" type="submit">
          MODIFIER
        </Button>
      </Form>
    </>
  );
};

export default formAccomodation;
