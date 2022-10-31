import React from "react";
import { Image } from "react-bootstrap";
import "./cardTimeEdit.scss";

function CardTimeEdit({url, date, firstName, lastName}) {
  return (
    <article className="cardTimeEdit">
      <div>
        <p>{date}</p>
        </div>
      <div>
        <p>{firstName} &nbsp; &nbsp;</p>
        <p>{lastName}</p>
      </div>
      <div>
        <Image src="../../assets/icones/delete.svg"/>
      </div>
      <a href={url}>
        <Image src="../../assets/icones/edit_create.svg"/>
      </a>
    </article>
  )
}

export default CardTimeEdit