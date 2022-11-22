import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import CardTime from "../../../components/backComponents/cards/CardTime";
import CardTimeEdit from "../../../components/backComponents/cards/CardTimeEdit";
import "../../../styles/pages.scss";

const ManageModerator = () => {
  return (
    <>
      <BottomNavHeader name="GESTION DES MODERATEURS"
      urlNav="/admin/selection_menu" />

      <section className="manage_CRUD">
      <div className="new_card">
          <CardTime
            url="/admin/create_moderator"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>

          <div className="manage_mode_feed">
          <CardTimeEdit 
                      url="/admin/edit_moderator"
                      date="_ _ /_ _ / _ _"
                      firstName="_ _ _ _ _ _"
                      lastName="_ _ _ _ _ _"
          />
          </div>
      </section>
    </>
  );
};

export default ManageModerator;
