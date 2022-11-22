import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormModerator from '../../../components/backComponents/forms/FormModerator';

const EditModerator = () => {
  return (
    <>
    <BottomNavHeader
    name="EDITER UN MODERATEUR"
    urlNav="/admin/selection_menu"
    />

<Btnreturn urlCard="/admin/manage_moderator" />

    <FormModerator 
    subject="CHANGER LES INFORMATIONS D'UN MODERATEUR"
    button="MODIFIER"
    />
  </>
  )
}

export default EditModerator