import Btnreturn from "../../../components/admin/other_components/Btnreturn";

import BottomNav from "../../../components/admin/_admin_components/BottomNav";
import FormNews from '../../../components/admin/forms/FormNews';

const CreateNews = () => {
  return (
    <>
    <BottomNav name="CREER UN ARTICLE DE PRESSE" />
    
    <Btnreturn urlCard="/admin/manage_news" />
    
    <FormNews 
        subject="NOUVEL ARTICLE DE PRESSE"
        button="CREER"
        />
    </>
  )
}

export default CreateNews