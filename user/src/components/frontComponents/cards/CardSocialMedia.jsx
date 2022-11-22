import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";

const CardSocialMedia = ({ content, image, redirect, copy, like, logo }) => {
  return (
    <Container fluid className="card_socialMedias">
      <header className="socialMedia_header">
        <div>
          <Image src={logo} />
        </div>
        <Image src={image} />
      </header>
      <TextTruncate className="socialMedia_body"
        line={7}
        text={content}
        truncateText="…"
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <footer className="socialMedia_footer">
        <span id="line"></span>
        <div className="social_icones">
          <div>
            <Link to={redirect}>
              <Image src="../assets/icones/redirection.svg" />
            </Link>
            <Link to={copy}>
              <Image src="../assets/icones/share.svg" />
            </Link>
          </div>
          <div>
            <Image src="../assets/icones/heart.svg" />
            <p>{like}</p>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default CardSocialMedia;
