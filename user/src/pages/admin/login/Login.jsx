import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from '../../../context/authContext';
import { Button, Form, Image } from 'react-bootstrap';
import "../../../styles/pages.scss";
import axios from 'axios';

const Login = () => {

  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

<<<<<<< HEAD
  const { user, loading, error, dispatch } = useContext(AuthContext);
=======
  // change route
  const navigate = useNavigate();

  const { loading, error, dispatch } = useContext(AuthContext);
>>>>>>> 1b13d0e4eed570e8c7e9c0c02b7ab2b786305cd6

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

<<<<<<< HEAD
  const handleClick = async e => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/admin/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };
=======
  // const handleClick = async e => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("http://localhost:3000/admin/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };
>>>>>>> 1b13d0e4eed570e8c7e9c0c02b7ab2b786305cd6

console.log(user)

  return (
    <>
      <section id="login_admin">
        <h2>CONNEXION</h2>
        <article>
          <Image
            src="../../assets/images/stag.png"
            alt="Image d'un cerf"
            width={250}
            height={430}
          ></Image>
          <Form>
            {/* DISPLAY MESSAGE ERROR */}
            <h3>Votre identifiant n'est pas valide</h3>

            <Form.Group>
              <Form.Label>Pseudo</Form.Label>
<<<<<<< HEAD
              <Form.Control onChange={handleChange} type="text" name='login_pseudo'/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control onChange={handleChange} type="password" name='login_password'/>
=======
              <Form.Control type="text" name="user_pseudo" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" name="user_password" />
>>>>>>> 1b13d0e4eed570e8c7e9c0c02b7ab2b786305cd6
            </Form.Group>
            {/* Ce morceau de code crée une checkbox permettant quand elle est cochée de mémoriser le mot de passe :
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}

            <Link id="a_recover_up" to="/admin/login_recover">Vous n'arrivez pas à vous connecter?</Link>

            {/* security */}
<<<<<<< HEAD
            <a href="/admin/selection_menu">
            <Button disabled={loading} onClick={handleClick} variant="primary" className="mb-5">
              SE CONNECTER
            </Button>
            {error && <span>{error.message}</span>}
            </a>
=======
            <Button variant="primary" onClick={() => navigate('/admin/selection_menu')}>
              SE CONNECTER
            </Button>
>>>>>>> 1b13d0e4eed570e8c7e9c0c02b7ab2b786305cd6
          </Form>
        </article>
        <Link id="a_recover_down" to="/admin/login_recover">Vous n'arrivez pas à vous connecter?</Link>
      </section>
    </>
  );
};

export default Login;