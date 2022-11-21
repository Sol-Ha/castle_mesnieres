import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import CardTime from "../../../components/admin/card/CardTime";
import CardTimeEdit from "../../../components/admin/card/CardTimeEdit";

const ManageHire = () => {
  return (
    <>
      <BottomNavHeader name="GESTION DES EMPLOIS"
      urlNav="/admin/selection_menu" />

      <section className="manage_CRUD">
        <div className="new_card">
          <CardTime
            url="/admin/create_hire"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>

          <div className="manage_mode_feed">
          <CardTimeEdit 
                      url="/admin/edit_hire"
                      date="_ _ /_ _ / _ _"
                      firstName="_ _ _ _ _ _"
                      lastName="_ _ _ _ _ _"
          />
          </div>
      </section>
    </>
  )
}

export default ManageHire