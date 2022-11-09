import { Container } from "react-bootstrap";
import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import CardTime from "../../../components/admin/card/CardTime";
import CardTimeEdit from "../../../components/admin/card/CardTimeEdit";
import "../../../styles/pages.scss";

const ManageEvents = () => {
  return (
    <>
      <BottomNav name="GESTION DES EVENEMENTS" />

      <Btnreturn urlCard="/admin/path_events&news"/>

      <section className="manage_news">
        <Container>
          <CardTime
            url="/admin/create_event"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />


          <div className="manage_mode_feed">
          <CardTimeEdit 
                      url="/admin/edit_event"
                      date="_ _ /_ _ / _ _"
                      firstName="_ _ _ _ _ _"
                      lastName="_ _ _ _ _ _"
          />
          </div>
        </Container>
      </section>
    </>
  )
}

export default ManageEvents