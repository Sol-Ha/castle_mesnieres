import CarouselMain from "react-alice-carousel";
import CardCarousel from "../card/CardCarousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./_carousel.scss";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1136: { items: 3 },
};

const items = [
  <CardCarousel
    className="item"
    data-value="1"
    img="../assets/photos/garden3.png"
    title="Visiter"
    content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  />,

  <CardCarousel
    className="item"
    data-value="2"
    img="../assets/photos/studies2.png"
    title="Etudier"
    content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />,

  <CardCarousel
    className="item"
    data-value="3"
    img="../assets/photos/wedding.png"
    title="Célèbrer"
    content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />,

   <CardCarousel
    className="item"
    data-value="4"
    img="../assets/photos/gather.png"
    title="Rassembler"
    content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />,
 
    <CardCarousel
    className="item"
    data-value="5"
    img="../assets/photos/outdoor.png"
    title="Organiser"
    content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />,

    <CardCarousel
    className="item"
    data-value="6"
    img="../assets/photos/sleep.png"
    title="Se reposer"
    content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />,

    <CardCarousel
    className="item"
    data-value="7"
    img="../assets/photos/food.png"
    title="Se restaurer"
    content= "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />,
];

function Carousel_index() {
  return (
    <CarouselMain
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={3500}
    animationDuration={1000}
    animationType="fadeout"
    infinite
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
}

export default Carousel_index;
