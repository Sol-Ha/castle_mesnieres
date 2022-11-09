import { Row, Form, Col, Button } from "react-bootstrap";
import "../form_accomodations/formAccomodation.scss";

const FormRentRoom = ({
  room_title,
  room_message,
  room_priceLow,
  room_priceHigh,
  room_access,
  room_maxPers,
  room_minPers,
  room_size,
  room_heating,
  room_cooling,
  room_cocktail,
  room_banquet,
  room_U,
  room_seminary,
}) => {
  return (
    <Form className="formAccomodation">
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
            name={room_title}
            type="text"
            placeholder="exemple: Suite"
            required
          />
        </Form.Group>
      </Col>

      {/* article's inner */}
      <Col>
        <Form.Group className="mb-4">
          <Form.Label>
            <span>* </span>CONTENU
          </Form.Label>
          <Form.Control
            name={room_message}
            className="mb-4"
            as="textarea"
            rows={"8"}
            placeholder="Entrer votre texte..."
            required
          />
        </Form.Group>
      </Col>

      {/* min people */}
      <Form.Group className="mb-5">
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>NOMBRE DE PERSONNE MIN.
            </Form.Label>
            <Form.Control
              name={room_minPers}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
          <Col>
            {/* max people */}
            <Form.Label>
              <span>* </span>NOMBRE DE PERSONNE MAX.
            </Form.Label>
            <Form.Control
              name={room_maxPers}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      {/* money low season */}
      <Form.Group className="mb-5">
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>PRIX BASSE SAISON ( € )
            </Form.Label>
            <Form.Control
              name={room_priceLow}
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
              name={room_priceHigh}
              type="number"
              placeholder="exemple: 10,80"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      {/* access */}
      <Col>
        <Form.Group className="mb-4">
          <Form.Label>
            <span>* </span>ACCES
          </Form.Label>
          <Form.Control
            name={room_access}
            className="mb-4"
            as="textarea"
            rows={"3"}
            placeholder="Entrer votre texte..."
            required
          />
        </Form.Group>
      </Col>

      {/* heating cooling radio */}

 {/* radios one answer submit */}
 <Form.Group className="mb-5">
 <Form.Label>
            <span>* </span>BONUS DE LA SALLE
          </Form.Label>

                <Row>
                  <Col>
              <Form.Check
                label="CHAUFFER"
                name ={room_heating}

              />
                  </Col>
                  <Col>
              <Form.Check
                label="CLIMATISER"
                name ={room_cooling}

              />
                  </Col>
              </Row>
      </Form.Group>

      {/* size */}

      <Col>
        <Form.Group className="mb-4 halfsize">
          <Form.Label>
            <span>* </span>TAILLE DE LA SALLE
          </Form.Label>
          <Form.Control
              name={room_size}
              type="number"
              placeholder="exemple: 100"
              required
          />
        </Form.Group>
      </Col>

      {/* cocktail + banquet*/}
      <Form.Group className="mb-5">
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>MAX PERSONNES: "COCKTAIL"
            </Form.Label>
            <Form.Control
              name={room_cocktail}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
          <Col>

            <Form.Label>
              <span>* </span>MAX PERSONNES: "BANQUET"
            </Form.Label>
            <Form.Control
              name={room_banquet}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      {/* u shape seminary */}
            <Form.Group className="mb-5">
        <Row>
          <Col>
            <Form.Label>
              <span>* </span>MAX PERSONNES: "TABLES U"
            </Form.Label>
            <Form.Control
              name={room_U}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
          <Col>

            <Form.Label>
              <span>* </span>MAX PERSONNES: "SEMINAIRE"
            </Form.Label>
            <Form.Control
              name={room_seminary}
              type="number"
              placeholder="exemple: 100"
              required
            />
          </Col>
        </Row>
      </Form.Group>

      <Button variant="primary" type="submit">
          MODIFIER
        </Button>
    </Form>
  );
};

export default FormRentRoom;
