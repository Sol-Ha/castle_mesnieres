import { Container } from "react-bootstrap";
import { Image } from 'antd';

const CardRoomToRent = ({title, img, presentation, minPers, maxPers, price, where, heating, climatised, coktail, banquet, u, seminary}) => {

  return (
    <Container className="cardRooomRent">
        <header>
          <h2>{title}</h2>
        </header>

        <article className="cardRoom_content">
        <div className="rent_img">
        <Image src={img} alt="Salle pour évènement au château"/>
        </div>
            <div>
            <p>{presentation}</p>
            <p>De {minPers} à {maxPers} à partir de {price}euros HT.<br/>
            {where}</p>
            <p>* {coktail} personnes pour un cocktail<br/>
            * {banquet} personnes pour un déjeuner ou un dîner avec tables en “banquet”,<br/>
            * {u} personnes pour un déjeuner ou un dîner avec tables en “U”,<br/>
            * {seminary} personnes pour une réunion ou un séminaire.<br/></p>
            </div>
        </article>
    </Container>
  )
}

export default CardRoomToRent