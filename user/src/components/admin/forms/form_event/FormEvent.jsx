import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import "./formEvent.scss";

// rfce for function
function FormEvent({ subject, button }) {
  return (
    <Form className="formEvent" action="/admin/manage_event">
      <h2>{subject}</h2>
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>
      <Row>
        <Col>
          <Form.Group className="mb-4" controlId="formGroupLastName">
            <Form.Label>
              <span>* </span>TITRE
            </Form.Label>
            <Form.Control
              name="title"
              type="text"
              placeholder="exemple: Expo au château"
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-4" controlId="formGroupLastName">
            <Form.Label>
              <span className="noAsterix">* </span>URL
            </Form.Label>
            <Form.Control
              name="firstName"
              type="text"
              placeholder="exemple: https://Mesnieres-en-bray.fr"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-4" controlId="formGroupLastName">
            <Form.Label>
              <span>* </span>DATE DE L'EVEMENENT
            </Form.Label>
            <Form.Control name="event_date" type="date" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-5" controlId="formGroupLastName">
            <Form.Label>
            <Col>
            <span className="noAsterix">* </span>
          <Form.Check
            className="mb-1"
            inline
            label="INFORMATIONS COMPLEMENTAIRES"
            name="infosPlus"
            type="switch"
          />
        </Col>
            </Form.Label>
            <Form.Control name="event_date" type="date" required />
          </Form.Group>
        </Col>
      </Row>
      <Col>
      
{/* IMAGE */}
      <Form.Group controlId="formFileLg" className="mb-5">
        <Form.Label>INSERER UNE IMAGE</Form.Label>
        <Form.Control type="file" size="lg" />
      </Form.Group>

        <Form.Group className="mb-4" controlId="formGroupLastName">
          <Form.Label>
            <span>* </span>CONTENU
          </Form.Label>
          <Form.Control
            name="message"
            className="mb-4"
            as="textarea"
            rows={"10"}
            placeholder="Entrer votre texte..."
            required
          />
        </Form.Group>
      </Col>

      {/* radios one answer submit */}
      <Form.Group as={Row} className="mb-5">
        <Form.Label className="mb-4">
          <span>* </span>TYPE D'EVENEMENT:
        </Form.Label>
        <Col className="col-sm">
          <Row>
            <Col>
              <Form.Check
                type="radio"
                label="CULTURE"
                name="culture"
                className="radio"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="SPORT"
                name="sport"
                className="radio"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="CONCERT"
                name="concert"
                className="radio"
              />
            </Col>

            <Col>
              <Form.Check
                type="radio"
                label="PATRIMOINE"
                name="patrimoine"
                className="radio"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="FESTIVAL"
                name="festival"
                className="radio"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                label="NATURE"
                name="nature"
                className="radio"
              />
            </Col>
          </Row>
        </Col>
      </Form.Group>

      {/* INFOS + */}
      <Form.Group as={Row} className="mb-4">
        <Col>
          <Form.Check
            className="mb-3"
            inline
            label="INFORMATIONS COMPLEMENTAIRES"
            name="infosPlus"
            type="switch"
          />
        </Col>
        <Row>
          {" "}
          <Col>
            <Form.Group className="mb-4" controlId="formGroupPhone">
              <Form.Label>
                <span className="noAsterix">* </span>TELEPHONE
              </Form.Label>
              <Form.Control
                name="phone"
                type="tel"
                placeholder="exemple: 02 32 00 00 00"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-4" controlId="formGroupEmail">
              <Form.Label>
                <span className="noAsterix">* </span>E-MAIL
              </Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="exemple: dupont@chateau.com"
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-5" controlId="formGroupLastName">
          <Form.Label>
            <span className="noAsterix">* </span>DATE LIMITE
          </Form.Label>
          <Form.Control className="inputhalf" name="event_date" type="date" required />
        </Form.Group>
      </Form.Group>

      <Button variant="primary" type="submit">
        {button}
      </Button>
    </Form>
  );
}

export default FormEvent;
