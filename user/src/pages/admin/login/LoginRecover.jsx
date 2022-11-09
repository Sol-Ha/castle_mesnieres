import { Button, Form, Image } from 'react-bootstrap';
import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import "../../../styles/pages.scss";

const LoginRecover = () => {
  return (
    <>
    <Btnreturn urlCard="/admin/Login" />

    <section id='login_admin'>
    <h2>MOT DE PASSE OU IDENTIFIANT PERDU</h2>
    <article>
      <Image src="../../assets/images/stag.png" alt="Image d'un cerf"></Image>
      <Form>
                  {/* DISPLAY MESSAGE ERROR */}
      <h3>Votre e-mail n’est pas reconnu par la base de donnée.</h3>

        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name='login_email'/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date de naissance</Form.Label>
          <Form.Control type="date" name='login_birthday'/>
        </Form.Group>

        {/* security */}
        <a href="/admin/login_recover_userDB">
        <Button variant="primary">
          ENVOYER
        </Button>
        </a>
      </Form>
    </article>
  </section>
  </>
  )
}

export default LoginRecover