import { Image } from "react-bootstrap";
import FormAccomodation from "../forms/form_accomodation/FormAccomodation";
import "./accordion.scss";
// index start at 0 so no content is shown
// "activeContent" is what's already in motion while "nextActivation" is the next one to turn on
const accordionA = ({ title, index, activeContent, nextActivation }) => {
  const handleSetIndex = (index) =>
    activeContent !== index && nextActivation(index);
  return (
    <>
      <article className="fullAccordion">
        <header>
          <div>
            <h3>{title}</h3>
          </div>
          <div onClick={() => handleSetIndex(index)}>
            <Image
              src="../../assets/icones/edit_create.svg"
              alt="image d'un stylo"
            />
          </div>
        </header>

        {activeContent === index && (
          <div className="contentForm">
            <FormAccomodation />
          </div>
        )}
      </article>
    </>
  );
};

export default accordionA;
