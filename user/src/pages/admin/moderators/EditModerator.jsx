import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormModerator from '../../../components/admin/forms/FormModerator';

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