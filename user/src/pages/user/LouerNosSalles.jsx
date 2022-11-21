import { Container } from "react-bootstrap";
import BottomNavHeader from "../../components/componentShared/BottomNavHeader";
import CardRoomToRent from "../../components/user/card/CardRoomToRent";
import "../../styles/pagesUser.scss";
import React from "react";

const LouerNosSalles = () => {
  return (
    <>
      <BottomNavHeader name="LOCATION DE NOS SALLES" urlNav="/" />

      <Container id="main_locationRoom">
        <CardRoomToRent
        img ="../assets/photos/restaurant1.jpg"
          title="Le restaurant Panoramic"
          presentation="Construite en 2005 pour devenir le restaurant scolaire, elle présente une vue dégagée sur le Parc et le Château. Cette salle, lumineuse, peut accueillir jusqu'à 300 personnes.
Une salle attenante pourra être utilisée pour l'organisation de baby-sitting, vin d'honneur... La Salle convient tout à fait pour les banquets et soirées."
          minPers= {50}
          maxPers={450}
          where="Bâtiment du XVIII ème siècle, à 200 m à l’arrière du Château."
          coktail={450}
          banquet={300}
          u={250}
          seminary={350}
        />
      </Container>
    </>
  );
};

export default LouerNosSalles;
