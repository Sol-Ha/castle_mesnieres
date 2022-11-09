import Accordion from 'react-bootstrap/Accordion';
import FormRentRoom from "../../../components/admin/forms/form_rentRoom/FormRentRoom";
import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import "../../../styles/pages.scss";

const ManageRooms = () => {

  return (
    <>
      <BottomNav name="EDITER LES SALLES A LOUER" />

      <Accordion defaultActiveKey="0" className='manageRoom' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Le restaurant Panoramique</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
        <FormRentRoom        
        />
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Salle Jean Eude</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormRentRoom        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Salle des Cartes</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormRentRoom        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Salle de la grande chapelle</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormRentRoom        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Salle polyvalente</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormRentRoom        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Galerie des Cerfs</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormRentRoom        
        />      
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    </>
  );
};

export default ManageRooms;
