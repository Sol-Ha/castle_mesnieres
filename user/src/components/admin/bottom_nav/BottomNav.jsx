import React from 'react'
import { Image } from "react-bootstrap";
import "./bottomNav.scss";

// rfce for function
const BottomNav = ({name}) => {
  return (
    <>
    {/* DISCONNECTING USER */}
    <nav className="bottom_nav">
      <button>
        <Image src="../assets/icones/stag.svg" alt="icone de retour vers le menu principal" />
        <a href="/admin/selection_menu">PAGE D'ACCUEIL</a>
      </button>

      <span></span>
      <h2>{name}</h2>
    </nav>
    </>
  )
}

export default BottomNav
