import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormPartner from "../../../components/admin/forms/FormPartner";

const CreatePartner = () => {
  return (
    <>
    <BottomNavHeader name="CREATION D'UN PARTENAIRE"
    urlNav="/admin/selection_menu" />

    <Btnreturn urlCard="/admin/manage_partners" />
    
    <FormPartner 
    subject="NOUVEAU PARTENAIRE"
    button="CREER"
    />
    </>
  )
}

export default CreatePartner