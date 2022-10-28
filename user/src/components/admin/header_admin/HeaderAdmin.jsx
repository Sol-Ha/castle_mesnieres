import React from 'react';

import { Image } from "react-bootstrap";
import "./headerAdmin.scss";

const HeaderAdmin = () => {
  return (
    <header className='header_back'>
      <div>
          <h2>PAGE RESERVEE AU PERSONNEL DU CHATEAU UNIQUEMENT</h2>

          {/* on pages other than login display unlock padlock */}
          <Image
    src="../assets/icones/unlock-padlock.svg"
    alt="Logo cadenas ouvert"/>
      </div>
    <Image
    src="../assets/photos/castle_back.avif"
    alt="illustration du logo du château"/>
    </header>
  )
}

export default HeaderAdmin