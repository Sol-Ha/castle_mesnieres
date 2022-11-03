import React, { useState } from "react";
import FormRentRoom from "../../../components/admin/forms/form_rentRoom/FormRentRoom";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import Accordion from "../../../components/admin/shared_components/AccordionA";

const ManageRooms = () => {
  // accordion auto
  // index start at 0 so no content is shown
  // "activeContent" is what's already in motion while "nextActivation" is the next one to turn on
  const [activeContent, nextActivation] = useState(0);
  return (
    <>
      <BottomNav name="EDITER LES SALLES A LOUER" />
      <Accordion
        bedroomName="Le restaurant panoramique"
        content={<FormRentRoom />}
        index={1}
        activeContent={activeContent}
        nextActivation={nextActivation}
      />
      <Accordion
        bedroomName="Salle Jean Eude"
        content={<FormRentRoom />}
        index={2}
        activeContent={activeContent}
        nextActivation={nextActivation}
      />
      <Accordion
        bedroomName="Salle des Cartes"
        content={<FormRentRoom />}
        index={3}
        activeContent={activeContent}
        nextActivation={nextActivation}
      />
      <Accordion
        bedroomName="Salle de la grande chapelle"
        content={<FormRentRoom />}
        index={4}
        activeContent={activeContent}
        nextActivation={nextActivation}
      />
      <Accordion
        bedroomName="Salle polyvalente"
        content={<FormRentRoom />}
        index={5}
        activeContent={activeContent}
        nextActivation={nextActivation}
      />
      <Accordion
        bedroomName="Galeriee des Cerfs"
        content={<FormRentRoom />}
        index={6}
        activeContent={activeContent}
        nextActivation={nextActivation}
      />
    </>
  );
};

export default ManageRooms;
