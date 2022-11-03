import React from 'react'
import { Image } from "react-bootstrap";
import "./bottomNav.scss";

// rfce for function
const BottomNav = ({name}) => {
  return (
    <>
    {/* DISCONNECTING USER */}
    <nav className="bottom_nav">
      <a href="/admin/selection_menu">
        <Image src="../assets/icones/stag.svg" alt="icone de retour vers le menu principal" />
        <h2>PAGE D'ACCUEIL</h2>
      </a>

      <span></span>
      <h2>{name}</h2>
    </nav>
    </>
  )
}

export default BottomNav
