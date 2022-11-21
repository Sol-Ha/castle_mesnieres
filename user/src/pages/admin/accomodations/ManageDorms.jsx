import Accordion from 'react-bootstrap/Accordion';
import FormAccomodation from "../../../components/admin/forms/FormAccomodation";
import Btnreturn from "../../../components/admin/other_components/Btnreturn";
import BottomNavHeader from '../../../components/componentShared/BottomNavHeader';
import "../../../styles/pages.scss";

const ManageDorms = () => {
  return (
    <>
      <BottomNavHeader name="EDITER LES DORTOIRS ET LE CAMPING"
      urlNav="/admin/selection_menu" />
      <Btnreturn urlCard="/admin/path_bedroom&dormitory" />


      <Accordion defaultActiveKey="0" className='manageRoom' flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Dortoirs : Standards</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
        <FormAccomodation        
        />
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Gites de Groupe</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormAccomodation        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Chambres : Standard</Accordion.Header>
        <Accordion.Body>

          {/* import form */}
          <FormAccomodation        
        />      
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Camping</Accordion.Header>
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

export default ManageDorms;
