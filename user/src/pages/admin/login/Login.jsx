// import { useContext, useState } from "react";
// import { AuthContext } from '../../../context/authContext';
import { Button, Form, Image, Row } from 'react-bootstrap';
import "./login.scss";
// import axios from 'axios';

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
          <Image src="../../assets/images/stag.png" alt="Image d'un cerf"></Image>
          <Form>
                      {/* DISPLAY MESSAGE ERROR */}
          <h3>Votre identifiant n'est pas valide</h3>

            <Form.Group className="mb-4">
              <Form.Label>Pseudo</Form.Label>
              <Form.Control type="text" name='login_pseudo'/>
            </Form.Group>
            <Form.Group className="mb-5">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" name='login_password'/>
            </Form.Group>
            {/* Ce morceau de code crée une checkbox permettant
            quand elle est cochée de mémoriser le mot de passe :
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Row>
            <a href="/admin/login_recover" className="mb-5">Vous n'arrivez pas à vous connecter?</a>
            </Row>

            {/* security */}
            <a href="/admin/selection_menu">
            <Button variant="primary" className="mb-5">
              SE CONNECTER
            </Button>
            </a>
          </Form>
        </article>
      </section>
    </>
  );
};

export default Login