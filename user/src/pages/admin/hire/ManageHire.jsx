import { Container } from "react-bootstrap";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import CardTime from "../../../components/admin/card/CardTime";
import CardTimeEdit from "../../../components/admin/card/CardTimeEdit";

const ManageHire = () => {
  return (
    <>
      <BottomNav name="GESTION DES EMPLOIS" />

      <section className="manage_news">
        <Container>
          <CardTime
            url="/admin/create_hire"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />


          <div className="manage_mode_feed">
          <CardTimeEdit 
                      url="/admin/edit_hire"
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

export default ManageHire