import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/_admin_components/BottomNav";
import FormEvent from "../../../components/admin/forms/FormEvent";

const CreateEvent = () => {
  return (
    <>
    <BottomNav name="CREATION D'UN EVENEMENT" />

    <Btnreturn urlCard="/admin/manage_events" />
    
    <FormEvent 
    subject="NOUVEL EVENEMENT"
    button="CREER"
    />
    </>
  )
}

export default CreateEvent