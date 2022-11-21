import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormHire from "../../../components/admin/forms/FormHire";

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