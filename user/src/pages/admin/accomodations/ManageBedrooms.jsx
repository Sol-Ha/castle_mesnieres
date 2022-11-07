import Accordion from 'react-bootstrap/Accordion';
import FormAccomodation from "../../../components/admin/forms/form_accomodation/FormAccomodation";
import Btnreturn from '../../../components/admin/shared_components/Btnreturn';
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import "../rentCastle/manageRoom.scss";


const ManageBedrooms = () => {

  return (
    <>
      <BottomNav name="EDITER LES CHAMBRES DU CHATEAU" />

<Btnreturn urlCard="/admin/path_bedroom&dormitory"/>

<Accordion defaultActiveKey="0" className='manageRoom' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Chambres: Suite</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
        <FormAccomodation        
        />
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Chambre: Jumeaux</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormAccomodation        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Chambres: Triple</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormAccomodation        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Chambres: Quadruple</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormAccomodation        
        />      
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </>
  );
};

export default ManageBedrooms;
