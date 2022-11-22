import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormEvent from "../../../components/backComponents/forms/FormEvent";

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