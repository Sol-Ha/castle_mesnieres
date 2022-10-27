import { React, useContext, useState } from 'react';
// import { AuthContext } from '../../../context/authContext';
import { Button, Form, Image, Row, Col } from 'react-bootstrap';
import "./login.scss";
import axios from 'axios';

const Login = () => {

  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  // const { dispatch } = useContext(AuthContext);

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async e => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("http://localhost:3000/auth/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };

  return (
    <>
      <section id='login_admin'>
        <h2>CONNEXION</h2>
        <article>
          <Image src="../assets/images/stag.png" alt="Image d'un cerf"></Image>
          <Form>
                      {/* DISPLAY MESSAGE ERROR */}
          <h3>Votre identifiant n'est pas valide</h3>

            <Form.Group className="mb-4" controlId="formGroupPseeudo">
              <Form.Label>Pseudo</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" />
            </Form.Group>
            {/* Ce morceau de code crée une checkbox permettant
            quand elle est cochée de mémoriser le mot de passe :
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Row>
            <a href="" className="mb-5">Vous n'arrivez pas à vous connecter?</a>
            </Row>

            <Button variant="primary" className="mb-5" type="submit">
              SE CONNECTER
            </Button>

          </Form>
        </article>
      </section>
    </>
  );
};

export default Login