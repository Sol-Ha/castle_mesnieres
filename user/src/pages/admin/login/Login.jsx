import {  useState } from "react";
import { useLogin } from "../../../hooks/useLogin"
import {  Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from '../../../context/authContext';
import { Button, Form, Image } from 'react-bootstrap';
import "../../../styles/pages.scss";
// import axios from 'axios';

const Login = () => {

  // const [credentials, setCredentials] = useState({
  //   username: undefined,
  //   password: undefined,
  // });

  const [user_username, setUser_username] = useState('')
  const [user_password, setUser_password] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    // don't refresh the page!
    e.preventDefault()
    // verify on DB
    await login(user_username, user_password)
  }
  // change route
  // const navigate = useNavigate();

  // const { user, loading, error, dispatch } = useContext(AuthContext);

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async e => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {

  //     const res = await axios.post("/admin/login", credentials);
  //     dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };

  // console.log(user)

  return (
    <>
      <section className="login_admin">
        <h2>CONNEXION</h2>
        <article>
          <Image
            src="../../assets/images/stag.png"
            alt="Image d'un cerf"
            width={250}
            height={430}
          ></Image>

          <Form onSubmit={handleSubmit}>
            {/* DISPLAY MESSAGE ERROR */}
            {error && <h3>{error}</h3>}
            {/* {error &&<h3>{error.message}</h3>} */}

            <Form.Group>
              <Form.Label>Pseudo</Form.Label>
              <Form.Control
              type="text"
              value ={user_username}
              onChange={(e) => setUser_username(e.target.value)}
              // onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
              type="password" 
              value ={user_password} 
              onChange={(e) => setUser_password(e.target.value)}
              // onChange={handleChange}
              />
            </Form.Group>

            <Link id="a_recover_up" to="/admin/login_recover">Vous n'arrivez pas à vous connecter?</Link>

            {/* security */}            
            <Button 
            variant="primary"
            disabled={isLoading}>
            {/* onClick={() => (handleClick)} */}
            {/* onClick={handleClick} */}
            {/* onClick={() => navigate()} */}
              SE CONNECTER
            </Button>

          </Form>
        </article>
        <Link id="a_recover_down" to="/admin/login_recover">Vous n'arrivez pas à vous connecter?</Link>
      </section>
    </>
  );
};

export default Login;