import Btnreturn from "../../../components/admin/shared_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormPartner from "../../../components/admin/forms/form_partner/FormPartner";

const EditPartner = () => {
  return (
    <>
    <BottomNav name="EDITER UN PARTENAIRE" />

    <Btnreturn urlCard="/admin/manage_partners" />
    
    <FormPartner 
    subject="CHANGER LES INFORMATIONS D'UN PARTENAIRE"
    button="CHANGER"
    />
    </>
  )
}

export default EditPartner