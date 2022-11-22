import Btnreturn from "../../../components/backComponents/buttons/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/navs/BottomNavHeader';
import FormNews from '../../../components/backComponents/forms/FormNews';

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