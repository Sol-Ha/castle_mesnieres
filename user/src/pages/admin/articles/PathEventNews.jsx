import { Container } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import BottomNav from "../../../components/admin/_admin_components/BottomNav";
import "../../../styles/pages.scss";

const PathEventNews = () => {
  return (
    <>
      <BottomNav name="EVENEMENTS & PRESSE" />

      <Container className="pathEvent">
      <h2>Ou souhaitez-vous aller?</h2>
        <div>
        <Card
          name="EVENEMENT"
          urlCard="/admin/manage_events"
        />
        <Card name="MEDIA & PRESSE" urlCard="/admin/manage_news" />
        </div>
      </Container>
    </>
  );
};

export default PathEventNews;
