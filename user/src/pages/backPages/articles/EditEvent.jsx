import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormEvent from "../../../components/backComponents/forms/FormEvent";

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