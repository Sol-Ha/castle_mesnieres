import { Container } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import "../../../styles/pages.scss";

const PathFood = () => {
  return (
    <>
      <BottomNav name="RESTAURATION TRAITEUR ET RESTAURANT" />

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
