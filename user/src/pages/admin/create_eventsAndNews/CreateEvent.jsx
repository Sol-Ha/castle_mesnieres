import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormEvent from "../../../components/admin/forms/form_event/FormEvent";

const CreateEvent = () => {
  return (
    <>
    <BottomNav name="CREATION D'UN EVENEMENT" />

    <FormEvent 
    subject="NOUVEL EVENEMENT"
    button="CREER"
    />
    </>
  )
}

export default CreateEvent