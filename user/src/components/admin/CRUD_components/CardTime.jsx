import React from "react";
import { Image } from "react-bootstrap";
import "./cardTime.scss";

// rfce for function
function cardTime({url, date, firstName, lastName}) {
  return (
    <a href={url} className="cardTime">
    <article>
      <div>
        <p>{date}</p>
        </div>
      <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div>
        <Image src="../../assets/icones/edit_create.svg"/>
      </div>
    </article>
    </a>
  )
}

export default cardTime