import React, { useState } from 'react';
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import Accordion from "../../../components/admin/shared_components/AccordionA";
import "./manage.scss";

const ManageBedrooms = () => {
  // accordion auto
  // index start at 0 so no content is shown
  // "activeContent" is what's already in motion while "nextActivation" is the next one to turn on
  const [activeContent, nextActivation] = useState(0); 
  return (
    <>
      <BottomNav name="EDITER LES CHAMBRES DU CHATEAU" />

 <h2 className='titleBackend'>CHAMBRES:</h2>

      <Accordion
      bedroomName="Chambre: Suite"
      title="bedroom_title"
      // activeContent at the start will be 1, therefore our first accordion will be open at the starting point of our application.
      index={1}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

            <Accordion
      bedroomName="Chambre: Jumeaux"
      title="bedroom_Title"
      index={2}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

            <Accordion
      bedroomName="Chambre: Triple"
      index={3}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

                  <Accordion
      bedroomName="Chambre: Quadruple"
      index={4}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

    </>
  );
};

export default ManageBedrooms;
