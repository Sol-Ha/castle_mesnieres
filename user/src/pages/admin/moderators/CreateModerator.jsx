import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import FormModerator from "../../../components/admin/forms/FormModerator";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';

const CreateModerator = () => {
  return (
    <>
      <BottomNavHeader name="CREATION D'UN MODERATEUR"
      urlNav="/admin/selection_menu" />

      <Btnreturn urlCard="/admin/manage_moderator" />

      <FormModerator subject="NOUVEAU MODERATEUR" button="CREER" />
      {/* SEND INFORMATIONS TO DATABASE */}
    </>
  );
};

export default CreateModerator;
