import { Container } from "react-bootstrap";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import CardTime from "../../../components/admin/shared_components/CardTime";
import CardTimeEdit from "../../../components/admin/shared_components/CardTimeEdit";

const ManagePartners = () => {
  return (
    <>
      <BottomNav name="GESTION DES PARTENAIRES" />

      <section className="manage_news">
        <Container>
          <CardTime
            url="/admin/create_partner"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />


          <div className="manage_mode_feed">
          <CardTimeEdit 
                      url="/admin/edit_partner"
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

export default ManagePartners