import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormNews from '../../../components/admin/forms/form_news/FormNews';

const EditNews = () => {
  return (
    <>
    <BottomNav name="EDITER UN ARTICLE DE PRESSE" />
    
    <Btnreturn urlCard="/admin/manage_news" />

    <FormNews
        subject="CHANGER LES INFORMATIONS D'UN ARTICLE DE PRESSE"
        button="CHANGER"
     />
    </>
  )
}

export default EditNews