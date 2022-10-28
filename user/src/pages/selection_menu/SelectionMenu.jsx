import React from "react";
import { Image, Container } from "react-bootstrap";
import ReactLoading from "react-loading";
import axios from "axios";

import Card from "../../components/card/Card"
import "./selectionMenu.scss";

const SelectionMenu = () => {

  return (
    <>
    {/* DISCONNECTING USER */}
      <nav className="nav_SelectionMenu">
        <button>
          <Image src="../assets/icones/off.svg"
        alt="icone de deconnexion"/>
          <a href="Login">DECONNEXION</a>
        </button>
      </nav>

      <main className="main_SelectionMenu">

        <Container fluid>
          <Image src="../assets/images/paint_brush1.png"
        alt="icone de deconnexion"/>

        {/* USER: GRAB USER FIRSTNAME */}
          <p>Bonjour, !<br/>
          Par ou souhaitez-vous commencer?
          </p>
        </Container>
        
        <Container fluid>
          <Card
          name="CREER UN NOUVEL UTILISATEUR"
          />
        </Container>
      </main>



    </>
  );
};

export default SelectionMenu;
