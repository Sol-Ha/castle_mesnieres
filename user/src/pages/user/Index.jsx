import { useNavigate } from "react-router-dom";
import { Card, Col, Row, Rate, Avatar } from "antd";
import { Button, Container } from "react-bootstrap";
import { Carousel } from "antd";
import datas from "./datas.json";
import BottomNav from "../../components/componentShared/BottomNav";
import CardSocialMedia from "../../components/user/card/CardSocialMedia";
import CardGoogle from "../../components/user/card/CardGoogle";
import CardMedia from "../../components/user/card/CardSocialMedia";
import CardEvent from "../../components/user/card/CardEvent";
import "../../styles/pagesUser.scss";

console.log(datas);

const Index = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* nav button */}
      <BottomNav onClick={() => navigate("/")} urlNav="/admin/selection_menu" />

      <Container fluid id="main_index">
        {/* presentation castle */}
        <Container fluid id="index_presentation">
          <div className="index_card_intro">
          <h3>
              LE PLUS IMPORTANT EDIFICE DE LA RENAISSANCE EN HAUTE NORMANDIE.
            </h3>
          <Card> 
            <img src="../assets/photos/garden.png" alt="Une salled de classe" />
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
          <Card> 
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
        <Container fluid id="articles_section">
          <header className="header_vertical">
            <h2>AGENDA</h2>
          </header>
          <Container fluid id="article_feed_articles">
            {/* MAX 3 cards */}
            <CardEvent
              title="PLANTER UN ARBRE"
              eventType="Evenement"
              image="../assets/photos/garden1.jpg"
              description="Ut magnam commodi tenetur expedita, id,laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />

            <CardEvent
              title="JOURNEE PATRIMOINE"
              eventType="Culture"
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
              eventType="Evenement"
              image="../assets/photos/feteNature.jpg"
              description="Asperiores, similique. Ratione animi consequatur velvoluptatibus. Ut magnam commodi tenetur expedita, id,laboriosa adipisicing elit."
              date="01-01-2022"
              author="Amélie"
            />
          </Container>
          <aside>
            <CardMedia
              name="CARNET DE RANDO"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
              adipisicing elit."
              videoYoutube="https://www.youtube.com/embed/_sFGKa43kB0"
            />
          </aside>
        </Container>

        {/* section caroussel what to do */}

        <Container fluid id="article_socialMedia">
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
        </Container>

        {/* 4 === and it cannot be the same id  */}
        <Carousel autoplay>
          <div>
            <Container fluid className="article_feed_googleReviews">
              <CardGoogle
                link="https://g.co/kgs/8sE9iC"
                logo="../assets/icones/stag.svg"
                rate={3}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/garden1.jpg"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/wedding.jpg"
                rate={2}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/patrimony.jpg"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />
            </Container>
          </div>
          <div>
            <Container fluid className="article_feed_googleReviews">
              <CardGoogle
                link="https://g.co/kgs/8sE9iC"
                logo="../assets/icones/stag.svg"
                rate={3}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/garden1.jpg"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/wedding.jpg"
                rate={2}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/patrimony.jpg"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />
            </Container>
          </div>
          <div>
            <Container fluid className="article_feed_googleReviews">
              <CardGoogle
                link="https://g.co/kgs/8sE9iC"
                logo="../assets/icones/stag.svg"
                rate={3}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/garden1.jpg"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/wedding.jpg"
                rate={2}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/caterer.avif"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />
            </Container>
          </div>

          <div>
            <Container fluid className="article_feed_googleReviews">
              <CardGoogle
                link="https://g.co/kgs/8sE9iC"
                logo="../assets/icones/stag.svg"
                rate={3}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/garden1.jpg"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/wedding.jpg"
                rate={2}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />

              <CardGoogle
                logo="../assets/photos/caterer.avif"
                rate={5}
                content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit reprehenderit quaerat a laudantium dolorem ipsam. Sit beatae tempora quasi inventore et error molestiae quam voluptatem? Odio eum quod accusamus libero!
            adipisicing elit."
                name="John X"
              />
            </Container>
          </div>
        </Carousel>
      </Container>
    </>
  );
};

export default Index;
