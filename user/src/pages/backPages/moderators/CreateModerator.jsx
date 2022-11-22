import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import FormModerator from "../../../components/backComponents/forms/FormModerator";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';

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
