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
      <Accordion
      title="Chambre: Suite"

      // activeContent at the start will be 1, therefore our first accordion will be open at the starting point of our application.
      index={1}
      activeContent={activeContent}
      nextActivation={nextActivation}
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est illum sequi dolores distinctio eligendi earum optio quae eaque totam exercitationem? Tempora, autem! Repudiandae reiciendis molestiae aut itaque aliquid nam quod."
      />
            <Accordion
      title="Chambre: Jumeaux"
      index={2}
      activeContent={activeContent}
      nextActivation={nextActivation}
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est illum sequi dolores distinctio eligendi earum optio quae eaque totam exercitationem? Tempora, autem! Repudiandae reiciendis molestiae aut itaque aliquid nam quod."
      />
            <Accordion
      title="Chambre: Triple"
      index={3}
      activeContent={activeContent}
      nextActivation={nextActivation}
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est illum sequi dolores distinctio eligendi earum optio quae eaque totam exercitationem? Tempora, autem! Repudiandae reiciendis molestiae aut itaque aliquid nam quod."
      />
                  <Accordion
      title="Chambre: Quadruple"
      index={4}
      activeContent={activeContent}
      nextActivation={nextActivation}
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est illum sequi dolores distinctio eligendi earum optio quae eaque totam exercitationem? Tempora, autem! Repudiandae reiciendis molestiae aut itaque aliquid nam quod."
      />

    </>
  );
};

export default ManageBedrooms;
