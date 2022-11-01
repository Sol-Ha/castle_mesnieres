import { Container } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import "./pathBedroomDormitory.scss";

const PathBedroomDormitory = () => {
  return (
    <>
    <BottomNav
    name="CHAMBRES & DORTOIRS"
    />

<div className="pathBed">
      <div className="side_image"></div>
      <Container>
      <h2>Ou souhaitez-vous aller?</h2>
        <div>
        <Card
          name="CHAMBRES CHATEAU"
          urlCard="/admin/manage_bedrooms"
        />
        <Card name="DORTOIRS & CAMPING" urlCard="/admin/manage_dorms_and_camping" />
        </div>
      </Container>
      </div>
    </>
  )
}

export default PathBedroomDormitory