import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormNews from '../../../components/backComponents/forms/FormNews';

const EditNews = () => {
  return (
    <>
    <BottomNavHeader name="EDITER UN ARTICLE DE PRESSE"
    urlNav="/admin/selection_menu" />
    
    <Btnreturn urlCard="/admin/manage_news" />

    <FormNews
        subject="CHANGER LES INFORMATIONS D'UN ARTICLE DE PRESSE"
        button="CHANGER"
     />
    </>
  )
}

export default EditNews