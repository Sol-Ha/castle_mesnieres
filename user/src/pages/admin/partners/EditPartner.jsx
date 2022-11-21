import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormPartner from "../../../components/admin/forms/FormPartner";

const EditPartner = () => {
  return (
    <>
    <BottomNavHeader name="EDITER UN PARTENAIRE"
    urlNav="/admin/selection_menu" />

    <Btnreturn urlCard="/admin/manage_partners" />
    
    <FormPartner 
    subject="CHANGER LES INFORMATIONS D'UN PARTENAIRE"
    button="CHANGER"
    />
    </>
  )
}

export default EditPartner