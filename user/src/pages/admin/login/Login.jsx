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

  // change route
  const navigate = useNavigate();

  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

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
            <h3>{error && <span>{error.message}</span>}</h3>

            <Form.Group>
              <Form.Label>Pseudo</Form.Label>
              <Form.Control onChange={handleChange} type="text" name="user_pseudo" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control onChange={handleChange} type="password" name="user_password" />
            </Form.Group>
            <Link id="a_recover_up" to="/admin/login_recover">Vous n'arrivez pas à vous connecter?</Link>

            {/* security */}
            <Button disabled={loading} variant="primary" onClick={() => navigate(handleClick)}>
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






// import axios from "axios"
// import { useContext, useState } from "react"
// import { AuthContext } from "../../../context/authContext"
// import "../../../styles/pages.scss";

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     username: undefined,
//     password: undefined
//   })

//   const { user, loading, error, dispatch } = useContext(AuthContext)

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
//   }

//   const handleClick = async e => {
//     e.preventDefault()
//     dispatch({ type: "LOGIN_START" })
//     try {
//       const res = await axios.post("/auth/login", credentials)
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
//     } catch (err) {
//       dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
//     }
//   }

//   console.log(user);

//   return (
//     <div className="login">
//       <div className="lContainer">
//         <input type="text" placeholder="username" id="username" />
//         <input type="password" placeholder="password" id="password" onChange={handleChange} className="lInput" />
//         <button onClick={handleClick} className="lButton">Login</button>
//         {error && <span>{error.message}</span>}
//       </div>
//     </div>
//   )
// }

// export default Login