import BottomNav from "../../../components/admin/bottom_nav/BottomNav";
import DropDown from "../../../components/admin/shared_components/Accordion";

const manageBedrooms = () => {
  return (
    <>
      <BottomNav name="EDITER LES CHAMBRES DU CHATEAU" />
      <DropDown title="Chambre : Suite" />
      <DropDown title="Chambre : Jumeau" />
      <DropDown title="Chambre : Triple" />
      <DropDown title="Chambre : Quadruple" />
    </>
  );
};

export default manageBedrooms;
