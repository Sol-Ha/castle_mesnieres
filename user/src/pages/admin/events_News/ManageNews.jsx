import { Container } from "react-bootstrap";
import Btnreturn from "../../../components/admin/shared_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import CardTime from "../../../components/admin/shared_components/CardTime";
import CardTimeEdit from "../../../components/admin/shared_components/CardTimeEdit";
import "./manageNews.scss";

const ManageNews = () => {
  return (
    <>
    <BottomNav name="GESTION DE LA PRESSE" />

    <Btnreturn urlCard="/admin/path_events&news"/>

    <section className="manage_news">
      <Container>
        <CardTime
          url="/admin/create_news"
          date="_ _ /_ _ / _ _"
          firstName="_ _ _ _ _ _"
          lastName="_ _ _ _ _ _"
        />

        <div className="manage_mode_feed">
        <CardTimeEdit 
                    url="/admin/edit_news"
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

export default ManageNews