import { useState } from "react";
import { useLogin } from "../../../hooks/useLogin";
import { Link } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";
import "../../../styles/pages.scss";

const Login = () => {
  const [moderator_persona, setModerator_persona] = useState("");
  const [moderator_password, setModerator_password] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    // don't refresh the page!
    e.preventDefault();
    // verify on DB
    await login(moderator_persona, moderator_password);
  };
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
            {/* error message */}
            {error && <h3>{error}</h3>}

            <Form.Group>
              <Form.Label>Pseudo</Form.Label>
              <Form.Control
                type="text"
                value={moderator_persona}
                onChange={(e) => setModerator_persona(e.target.value)}
                // onChange={handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                value={moderator_password}
                onChange={(e) => setModerator_password(e.target.value)}
                // onChange={handleChange}
              />
            </Form.Group>

            <Link id="a_recover_up" to="/admin/login_recover">
              Vous n'arrivez pas à vous connecter?
            </Link>

            <Button
              variant="primary"
              // prevent emptying the form
              disabled={isLoading}
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
