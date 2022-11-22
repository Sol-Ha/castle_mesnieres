import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormHire from "../../../components/backComponents/forms/FormHire";

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