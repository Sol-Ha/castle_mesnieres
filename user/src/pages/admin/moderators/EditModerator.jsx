import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormModerator from '../../../components/admin/forms/form_moderator/FormModerator';

const EditModerator = () => {
  return (
    <>
    <BottomNav
    name="EDITER UN MODERATEUR"
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