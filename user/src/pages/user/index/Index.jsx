import { Card } from "antd";
import { Container } from "react-bootstrap";
import datas from "../datas.json";
import CardGoogle from "../../../components/user/card/CardGoogle";
import CardJournalist from "../../../components/user/card/CardJournalist";
import CardEvent from "../../../components/user/card/CardNewEvent";
import CarouselIndex from "../../../components/user/carousel/Carousel_index"
import CarouselSocialMedia from "../../../components/user/carousel/Carousel_socialMedia"

import "./_index.scss";

console.log(datas);

const Index = () => {
  return (
    <>

      <Container fluid id="main_index">
        {/* presentation castle */}
        <Container fluid id="index_presentation">
          <div className="index_card_intro">
          <h3>
              LE PLUS IMPORTANT EDIFICE DE LA RENAISSANCE EN HAUTE NORMANDIE.
            </h3>
          <Card hoverable> 
            <img src="../assets/photos/garden.png" alt="Vue sur les jardins" />
            <p>
              <span>L</span>orem ipsum dolor sit amet consectetur adipisicing
              elit. Placeat, nemo delectus ducimus aliquid omnis iusto
              consequuntur, excepturi laudantium tenetur nihil dicta magnam
              voluptatibus eum libero autem molestias odio explicabo. Amet.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, similique. Ratione animi consequatur vel voluptatibus.
              Ut magnam commodi tenetur expedita, id, laboriosam natus a
              laudantium quia, omnis rem sunt impedit? consectetur adipisicing
              elit. Asperiores, similique.
            </p>
          </Card>
          </div>

           <div className="index_card_intro">
          <h3>
              MAIS C'EST AUSSI, UN COLLEGE ET UN LYCEE AXEE SUR DIVERS METIERS.
            </h3>
          <Card hoverable> 
          <img src="../assets/photos/studies.png" alt="Une salled de classe" />
            <p>
              <span>L</span>orem ipsum dolor sit amet consectetur adipisicing
              elit. Placeat, nemo delectus ducimus aliquid omnis iusto
              consequuntur, excepturi laudantium tenetur nihil dicta magnam
              voluptatibus eum libero autem molestias odio explicabo. Amet.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, similique. Ratione animi consequatur vel voluptatibus.
              Ut magnam commodi tenetur expedita, id, laboriosam natus a
              laudantium quia, omnis rem sunt impedit? consectetur adipisicing
              elit. Asperiores, similique.
            </p>
          </Card>
          </div>
        </Container>

        {/* section news */}
        <Container fluid id="index_news">
          <header className="header_vertical">
            <h2>AGENDA</h2>
          </header>
          <Container fluid id="feed_news">
            {/* MAX 3 cards */}
            <CardEvent
              title="PLANTER UN ARBRE"
              eventType="EVENEMENT"
              image="../assets/photos/garden1.jpg"
              description="Ut magnam commodi tenetur expedita, id,laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />

            <CardEvent
              title="JOURNEE PATRIMOINE"
              eventType="CULTURE"
              image="../assets/photos/patrimony.jpg"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
              adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
              iusto consequuntur, excepturi laudantium tenetur nihil dicta
              magnam voluptatibus eum libero autem molestias odio explicabo.
              Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Asperiores, similique. Ratione animi consequatur vel
              voluptatibus. Ut magnam commodi tenetur expedita, id,
              laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />

            <CardEvent
              title="FETE DE LA NATURE"
              eventType="EVENEMENT"
              image="../assets/photos/feteNature.jpg"
              description="Asperiores, similique. Ratione animi consequatur velvoluptatibus. Ut magnam commodi tenetur expedita, id,laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />
          </Container>
          <aside id="feed_media">
            <CardJournalist
              name="CARNET DE RANDO"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
              adipisicing elit."
              videoYoutube="https://www.youtube.com/embed/_sFGKa43kB0"
            />
          </aside>
        </Container>

        {/* section caroussel what to do */}
        <Container id="index_activities">
        <header className="header_vertical">
            <h2>ACTIVITES AU CHATEAU</h2>
          </header>
        <CarouselIndex/>
        </Container>

        {/* <Container fluid id="article_socialMedia">
          <header className="header_vertical">
            <h2>NOS RESEAUX</h2>
          </header>
          <Container fluid id="article_feed_socialMedia">
            <CardSocialMedia
              logo="../assets/icones/google.svg"
              image="../assets/photos/hiking.jpg"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
          adipisicing elit."
              like="100"
            />
            <CardSocialMedia
              logo="../assets/icones/google.svg"
              image="../assets/photos/hiking.jpg"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
          adipisicing elit."
            />
            <CardSocialMedia
              logo="../assets/icones/google.svg"
              image="../assets/photos/hiking.jpg"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
          adipisicing elit."
            />
            <CardSocialMedia
              logo="../assets/icones/google.svg"
              image="../assets/photos/hiking.jpg"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
          adipisicing elit."
            />
            <CardSocialMedia
              link="https://ui.dev/react-router-url-parameters"
              logo="../assets/icones/google.svg"
              image="../assets/photos/hiking.jpg"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
          adipisicing elit."
            />
          </Container>
        </Container> */}

        {/* 4 === and it cannot be the same id  */}

      </Container>
    </>
  );
};

export default Index;
