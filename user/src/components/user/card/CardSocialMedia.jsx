import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import TextTruncate from "react-text-truncate";
import "./Card.scss";

const CardSocialMedia = ({ content, image, redirect, copy, like, logo }) => {
  return (
    <article fluid className="card_socialMedias">
      <header>
        <div>
          <Image src={logo} />
        </div>
        <Image src={image} />
      </header>
      <TextTruncate
        line={7}
        text={content}
        truncateText="…"
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <footer>
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
    </article>
  );
};

export default CardSocialMedia;
