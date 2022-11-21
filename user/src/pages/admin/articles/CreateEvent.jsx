import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormEvent from "../../../components/admin/forms/FormEvent";

const CreateEvent = () => {
  return (
    <>
    <BottomNavHeader name="CREATION D'UN EVENEMENT"
    urlNav="/admin/selection_menu" />

    <Btnreturn urlCard="/admin/manage_events" />
    
    <FormEvent 
    subject="NOUVEL EVENEMENT"
    button="CREER"
    />
    </>
  )
}

export default CreateEvent