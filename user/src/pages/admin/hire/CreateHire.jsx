import Btnreturn from "../../../components/admin/shared_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormHire from "../../../components/admin/forms/form_hire/FormHire";

const CreateHire = () => {
  return (
    <>
    <BottomNav name="CREATION D'UN EMPLOI" />

    <Btnreturn urlCard="/admin/manage_hire" />
    
    <FormHire 
    subject="NOUVEL EMPLOI"
    button="CREER"
    />
    </>
  )
}

export default CreateHire