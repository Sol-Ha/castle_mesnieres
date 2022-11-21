import { Container } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import "../../../styles/pages.scss";

const PathFood = () => {
  return (
    <>
      <BottomNavHeader name="RESTAURATION TRAITEUR ET RESTAURANT"
      urlNav="/admin/selection_menu" />

      <Container className="pathFood">
      <h2>Ou souhaitez-vous aller?</h2>
        <div>
        <Card
          name="TRAITEUR"
          urlCard="/admin/manage_caterer"
        />
        <Card name="RESTAURANT-ECOLE" urlCard="#" disabled />
        </div>
      </Container>
    </>
  );
};

export default PathFood;
