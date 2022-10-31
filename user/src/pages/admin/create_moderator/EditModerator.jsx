import React from 'react';
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import FormModerator from '../../../components/admin/forms/form_moderator/FormModerator';

const EditModerator = () => {
  return (
    <>
    <BottomNav
    name="EDITER UN MODERATEUR"
    />

    <FormModerator 
    subject="CHANGER LES INFORMATIONS D'UN MODERATEUR"
    button="MODIFIER"
    />
  </>
  )
}

export default EditModerator