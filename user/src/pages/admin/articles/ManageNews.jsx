import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import CardTime from "../../../components/admin/card/CardTime";
import CardTimeEdit from "../../../components/admin/card/CardTimeEdit";
import "../../../styles/pages.scss";

const ManageNews = () => {
  return (
    <>
      <BottomNavHeader name="GESTION DE LA PRESSE"
      urlNav="/admin/selection_menu" />

      <Btnreturn urlCard="/admin/path_events&news" />

      <section className="manage_CRUD">
        <div className="new_card">
          <CardTime
            url="/admin/create_news"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>

        <div className="manage_mode_feed">
          <CardTimeEdit
            url="/admin/edit_news"
            date="_ _ /_ _ / _ _"
            firstName="_ _ _ _ _ _"
            lastName="_ _ _ _ _ _"
          />
        </div>
      </section>
    </>
  );
};

export default ManageNews;
