import React from "react";
import { Image, Container } from "react-bootstrap";
import Card from "../../../components/admin/card/Card";
import "./selectionMenu.scss";

const SelectionMenu = () => {
  return (
    <>
      {/* DISCONNECTING USER */}
      <nav className="nav_SelectionMenu">
        <button>
          <Image src="../../assets/icones/off.svg" alt="icone de deconnexion" />
          <a href="Login">DECONNEXION</a>
        </button>
      </nav>

      <main className="main_SelectionMenu">
        <Container fluid>
          {/* USER: GRAB USER FIRSTNAME */}
          <p>
            Bonjour, !<br />
            Par ou souhaitez-vous commencer?
          </p>
        </Container>

        <Container fluid>
          <Card name="CREER UN NOUVEL UTILISATEUR" urlCard="/admin/manage_moderator" />
          <Card name="EVENEMENTS & PRESSE" urlCard="/admin/path_events&news" />
          <Card name="NOS PARTENAIRES" />
          <Card name="EMPLOIS & STAGES" />
          <Card name="VISITER" />
          <Card name="HEBERGEMENT" urlCard="/admin/path_bedroom&dormitory" />
          <Card name="LOUER NOS SALLES" />
          <Card name="RESTAURATION" />
        </Container>
      </main>
    </>
  );
};

export default SelectionMenu;
