import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormEvent from "../../../components/admin/forms/FormEvent";

const EditEvent = () => {
  return (
    <>
    <BottomNavHeader name="EDITER UN EVENEMENT" 
    urlNav="/admin/selection_menu"/>

    <Btnreturn urlCard="/admin/manage_events" />

    <FormEvent 
    subject="CHANGER LES INFORMATIONS D'UN EVENEMENT"
    button="CHANGER"
    />
    </>
  )
}

export default EditEvent