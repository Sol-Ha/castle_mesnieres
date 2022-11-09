import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormHire from "../../../components/admin/forms/form_jobOffers/FormHire";

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