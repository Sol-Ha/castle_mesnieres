import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import CardTime from "../../../components/backComponents/cards/CardTime";
import CardTimeEdit from "../../../components/backComponents/cards/CardTimeEdit";

const ManageEvents = () => {
  return (
    <>
      <BottomNavHeader name="GESTION DES EVENEMENTS"
      urlNav="/admin/selection_menu" />

      <Btnreturn urlCard="/admin/path_events&news"/>

      <section className="manage_CRUD">
        <div className="new_card">
          <CardTime
            url="/admin/create_event"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>

          <div className="manage_mode_feed">
          <CardTimeEdit 
                      url="/admin/edit_event"
                      date="_ _ /_ _ / _ _"
                      firstName="_ _ _ _ _ _"
                      lastName="_ _ _ _ _ _"
          />
          </div>
      </section>
    </>
  )
}

export default ManageEvents