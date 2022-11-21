import { Container } from "react-bootstrap";
import BottomNavHeader from '../../components/componentShared/BottomNavHeader';
import CardRoomToRent from "../../components/user/card/CardRoomToRent";
import "../../styles/pagesUser.scss";

const LouerNosSalles = () => {
  
  return (
    <>
    <BottomNavHeader name="LOCATION DE NOS SALLES"
    urlNav="/" />

    
<Container id="main_locationRoom">
<CardRoomToRent
presentation="Placeat, nemo delectus ducimus aliquid omnis iusto consequuntur, excepturi laudantium tenetur nihil dicta magnam voluptatibus eum libero autem molestias odio explicabo. Amet."/>
</Container>
    </>
  );
};

export default LouerNosSalles;
