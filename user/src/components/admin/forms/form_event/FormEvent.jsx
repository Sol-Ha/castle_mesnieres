import React from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import "./formEvent.scss";

// rfce for function
function FormEvent({subject, button}) {
  return (
    <Form className="formModerator" action="/admin/manage_moderator">
      <h2>{subject}</h2>
      <p>
        <span>* </span>Les champs marqués par une étoile sont obligatoires
      </p>
      <Row>
              <Col>
      <Form.Group className="mb-4" controlId="formGroupLastName">
        <Form.Label>
          <span>* </span>NOM
        </Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          placeholder="exemple: Dupont"
          required
        />
      </Form.Group>
      </Col>
              <Col>
      <Form.Group className="mb-4" controlId="formGroupLastName">
        <Form.Label>
          <span>* </span>PRENOM
        </Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          placeholder="exemple: Jean"
          required
        />
      </Form.Group>
      </Col>
            </Row>

            <Row>
              <Col>
      <Form.Group className="mb-4" controlId="formGroupLastName">
        <Form.Label>
          <span>* </span>DATE DE NAISSANCE
        </Form.Label>
        <Form.Control
          name="birthday_user"
          type="date"
          placeholder="exemple: Dupont"
          required
        />
      </Form.Group>
      </Col>
              <Col>
              <Form.Group className="mb-4" controlId="formGroupEmail">
                  <Form.Label>
                    <span>* </span>E-MAIL
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
              <Col>
      <Form.Group className="mb-5" controlId="formGroupLastName">
        <Form.Label>
          <span>* </span>DATE DE LA FIN DU CONTRAT
        </Form.Label>
        <Form.Control className="inputEndContract"
          name="contract_end"
          type="date"
          placeholder="exemple: 01/01/1990"
          required
        />
      </Form.Group>
      </Col>

      {/* <Button variant="primary" type="submit">
              {button}
            </Button> */}

            {/* SEND INFORMATIONS TO DATABASE */}
    </Form>
  )
}

export default FormEvent