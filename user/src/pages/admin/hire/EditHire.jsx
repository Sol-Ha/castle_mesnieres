import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/_admin_components/BottomNav";
import FormHire from "../../../components/admin/forms/FormHire";

const EditHire = () => {
  return (
    <>
    <BottomNav name="EDITER UN EMPLOI" />

    <Btnreturn urlCard="/admin/manage_hire" />
    
    <FormHire 
    subject="CHANGER LES INFORMATIONS D'UN EMPLOI"
    button="CHANGER"
    />
    </>
  )
}

export default EditHire