import React from 'react';
import FormModerator from '../../../components/admin/forms/form_moderator/FormModerator';
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";

const CreateModerator = () => {
  return (
    <>
    <BottomNav
    name="CREATION D'UN MODERATEUR"
    />
    <FormModerator 
    subject="NOUVEAU MODERATEUR"
    button="CREER"
    />
                {/* SEND INFORMATIONS TO DATABASE */}
  </>
  )
}

export default CreateModerator
