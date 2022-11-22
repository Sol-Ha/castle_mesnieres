import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormHire from "../../../components/backComponents/forms/FormHire";

const CreateHire = () => {
  return (
    <>
    <BottomNavHeader name="CREATION D'UN EMPLOI" 
    urlNav="/admin/selection_menu"/>

    <Btnreturn urlCard="/admin/manage_hire" />
    
    <FormHire 
    subject="NOUVEL EMPLOI"
    button="CREER"
    />
    </>
  )
}

export default CreateHire