import { Button, Form, Image } from 'react-bootstrap';
import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import "../../../styles/pages.scss";

const LoginRecover2 = () => {
  return (
    <>
    <Btnreturn urlCard="/admin/Login" />

    <section id='login_admin'>
    <h2>MOT DE PASSE OU IDENTIFIANT PERDU</h2>
    <article>
      <Image src="../../assets/images/stag.png" alt="Image d'un cerf"></Image>
      <Form>
                  {/* DISPLAY MESSAGE ERROR */}
      <h3>Nous vous avons envoyés un e-mail.</h3>

      <Form.Group>
                    <Form.Label>
                      Question secrète
                    </Form.Label>
                    <Form.Select aria-label="Default select example" required>
                      <option>-</option>
                      <option value="1">Nom de jeune fille de votre mère?</option>
                      <option value="2">Nom de votre premier animal?</option>
                      <option value="3">Le lieu de votre naissance</option>
                      <option value="4">Votre livre préféré</option>
                      <option value="5">Votre second prénom?</option>
                    </Form.Select>
              </Form.Group>

              <Form.Group>
              <Form.Label>Réponse</Form.Label>
              <Form.Control type="text" name='login_answer' required/>
            </Form.Group>

        <a href="/admin/selection_menu">
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

export default LoginRecover2