import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormPartner from "../../../components/backComponents/forms/FormPartner";

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