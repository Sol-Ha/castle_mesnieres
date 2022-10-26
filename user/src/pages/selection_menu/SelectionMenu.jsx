import { React } from "react";
import { Image, Container } from "react-bootstrap";
import "./selectionMenu.scss";

const SelectionMenu = () => {
  return (
    <>
    {/* DISCONNECTING USER */}
      <nav className="nav_SelectionMenu">
        <button>
          <Image src="../assets/icones/off.svg"
        alt="blason de la Normandie"/>
          <a href="Login">DECONNEXION</a>
        </button>
      </nav>

      <main className="main_SelectionMenu">
        <Container></Container>
      </main>
    </>
  );
};

export default SelectionMenu;
