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
          <Card name="NOUVEAU MODERATEUR" urlCard="/admin/manage_moderator" />
          <Card name="EVENEMENTS & PRESSE" urlCard="/admin/path_events&news" />
          <Card name="NOS PARTENAIRES" urlCard="/admin/manage_partners" />
          <Card name="EMPLOIS & STAGES" />
          <Card name="VISITER" urlCard="/admin/visit_castle" />
          <Card name="HEBERGEMENT" urlCard="/admin/path_bedroom&dormitory" />
          <Card name="LOUER NOS SALLES" urlCard="/admin/rent_rooms" />
          <Card name="RESTAURATION" urlCard="/admin/path_food" />
        </Container>
      </main>
    </>
  );
};

export default SelectionMenu;
