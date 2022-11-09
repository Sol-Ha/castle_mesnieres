import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormEvent from "../../../components/admin/forms/form_events/FormEvent";

const EditEvent = () => {
  return (
    <>
    <BottomNav name="EDITER UN EVENEMENT" />

    <Btnreturn urlCard="/admin/manage_events" />

    <FormEvent 
    subject="CHANGER LES INFORMATIONS D'UN EVENEMENT"
    button="CHANGER"
    />
    </>
  )
}

export default EditEvent