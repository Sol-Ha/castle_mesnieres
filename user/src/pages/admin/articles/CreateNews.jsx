import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import FormNews from '../../../components/admin/forms/FormNews';

const CreateNews = () => {
  return (
    <>
    <BottomNavHeader name="CREER UN ARTICLE DE PRESSE"
    urlNav="/admin/selection_menu" />
    
    <Btnreturn urlCard="/admin/manage_news" />
    
    <FormNews 
        subject="NOUVEL ARTICLE DE PRESSE"
        button="CREER"
        />
    </>
  )
}

export default CreateNews