import React from 'react';
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormNews from '../../../components/admin/forms/form_news/FormNews';

const EditNews = () => {
  return (
    <>
    <BottomNav name="EDITER UN ARTICLE DE PRESSE" />
    <FormNews
        subject="CHANGER LES INFORMATIONS D'UN ARTICLE DE PRESSE"
        button="CHANGER"
     />
    </>
  )
}

export default EditNews