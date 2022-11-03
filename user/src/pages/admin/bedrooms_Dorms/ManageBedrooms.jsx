import React, { useState } from 'react';
import FormAccomodation from "../../../components/admin/forms/form_accomodation/FormAccomodation";
import Btnreturn from '../../../components/admin/shared_components/Btnreturn';
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

<Btnreturn urlCard="/admin/path_bedroom&dormitory"/>

      <Accordion
      bedroomName="Chambre: Suite"
      content= {<FormAccomodation/>}
      // activeContent at the start will be 1, therefore our first accordion will be open at the starting point of our application.
      index={1}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

            <Accordion
      bedroomName="Chambre: Jumeaux"
      content= {<FormAccomodation/>}
      index={2}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

            <Accordion
      bedroomName="Chambre: Triple"
      content= {<FormAccomodation/>}
      index={3}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

                  <Accordion
      bedroomName="Chambre: Quadruple"
      content= {<FormAccomodation/>}
      index={4}
      activeContent={activeContent}
      nextActivation={nextActivation}
      />

    </>
  );
};

export default ManageBedrooms;
