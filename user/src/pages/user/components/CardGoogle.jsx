import { Image } from "react-bootstrap";
import TextTruncate from "react-text-truncate";
import "../../../styles/userComponents.scss";

const CardGoogle = ({ content, title, name, logo }) => {
  return (
    <article className="card_google">
      <header>
        <div>
          <Image src={logo} />
          <h5>{title}</h5>
        </div>
        <Image src="../assets/icones/google.svg" />
      </header>
      <TextTruncate
        line={5}
        text={content}
        truncateText="…"
        // textTruncateChild={<a href="#">Read on</a>}
      />
      <footer>
      <p>{name}</p>
      </footer>
    </article>
  );
};

export default CardGoogle;
