import { Image } from "react-bootstrap";
import "./footerAdmin.scss";

const FooterAdmin = () => {
  return (
    <footer className="footer_back">

      <div>
        <address>
          Château<br/>
          de Mesnières-en-Bray<br/>
          <a href="tel:+330235931004">+33 (0)2 35 93 10 04</a>
        </address>

        <Image 
        src="../assets/images/Blason_Normandie.png"
        alt="blason de la Normandie"/>

        <span></span>
      </div>

      <div></div>
      <div></div>
    </footer>
  )
}

export default FooterAdmin