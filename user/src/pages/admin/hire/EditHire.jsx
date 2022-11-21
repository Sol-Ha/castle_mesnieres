import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormHire from "../../../components/admin/forms/FormHire";

const EditHire = () => {
  return (
    <>
    <BottomNavHeader name="EDITER UN EMPLOI"
    urlNav="/admin/selection_menu" />

    <Btnreturn urlCard="/admin/manage_hire" />
    
    <FormHire 
    subject="CHANGER LES INFORMATIONS D'UN EMPLOI"
    button="CHANGER"
    />
    </>
  )
}

export default EditHire