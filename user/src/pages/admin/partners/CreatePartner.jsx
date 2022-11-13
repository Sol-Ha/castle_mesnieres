import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/_admin_components/BottomNav";
import FormPartner from "../../../components/admin/forms/FormPartner";

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