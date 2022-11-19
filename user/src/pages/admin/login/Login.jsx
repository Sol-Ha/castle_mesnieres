// import { useState } from "react";
// import { useLogin } from "../../../hooks/userLogin";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";
import "../../../styles/pages.scss";

const Login = () => {
const navigate = useNavigate();
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

          <Form>
            {/* error message */}
            <h3>Salut</h3>

            <Form.Group>
              <Form.Label>Pseudo</Form.Label>
              <Form.Control
                type="text"
                // onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
              />
            </Form.Group>

            <Link id="a_recover_up" to="/admin/login_recover">
              Vous n'arrivez pas à vous connecter?
            </Link>

            <Button onClick={() => navigate("/admin/selection_menu")}
              variant="primary"
              // prevent emptying the form
            >
              SE CONNECTER
            </Button>
          </Form>
        </article>
        <Link id="a_recover_down" to="/admin/login_recover">
          Vous n'arrivez pas à vous connecter?
        </Link>
      </section>
    </>
  );
};

export default Login;
