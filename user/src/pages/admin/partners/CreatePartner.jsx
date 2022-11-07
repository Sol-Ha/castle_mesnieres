import Btnreturn from "../../../components/admin/shared_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormPartner from "../../../components/admin/forms/form_partner/FormPartner";

const CreatePartner = () => {
  return (
    <>
    <BottomNav name="CREATION D'UN PARTENAIRE" />

    <Btnreturn urlCard="/admin/manage_partners" />
    
    <FormPartner 
    subject="NOUVEAU PARTENAIRE"
    button="CREER"
    />
    </>
  )
}

export default CreatePartner