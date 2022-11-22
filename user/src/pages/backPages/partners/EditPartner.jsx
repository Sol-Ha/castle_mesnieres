import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormPartner from "../../../components/backComponents/forms/FormPartner";

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