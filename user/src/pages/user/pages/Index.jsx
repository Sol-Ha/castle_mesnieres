import { useNavigate } from "react-router-dom";
import { Image, Button, Carousel } from "react-bootstrap";
import CardEvent from "../components/CardEvent";
import "../../../styles/pagesUser.scss";

const Index = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* nav button */}
      <nav className="bottom_nav">
        <Button onClick={() => navigate("/admin/selection_menu")}>
          <Image
            src="../assets/icones/stag.svg"
            alt="icone de retour vers le menu principal"
          />
          PAGE D'ACCUEIL
        </Button>
      </nav>

      <main>
        {/* presentation castle */}
        <section id="presentation_section">
          <article>
            <h3 id="h2_presentation">
              LE PLUS IMPORTANT EDIFICE DE LA <br /> RENAISSANCE EN HAUTE
              NORMANDIE.
            </h3>
            <div className="div_presentation">
              <div className="div_img_1"></div>
              <div className="div_content">
                <p>
                  <span>L</span>orem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
                  iusto consequuntur, excepturi laudantium tenetur nihil dicta
                  magnam voluptatibus eum libero autem molestias odio explicabo.
                  Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Asperiores, similique. Ratione animi consequatur vel
                  voluptatibus. Ut magnam commodi tenetur expedita, id,
                  laboriosam natus a laudantium quia, omnis rem sunt impedit?
                  consectetur adipisicing elit. Asperiores, similique.
                </p>
              </div>
            </div>
          </article>

          <article>
            <h3>LE CHATEAU C’EST AUSSI UNE ECOLE.</h3>
            <div className="div_presentation">
              <div className="div_img_2"></div>
              <div className="div_content">
                <p>
                  <span>L</span>orem ipsum dolor sit amet consectetur
                  adipisicing elit. Placeat, nemo delectus ducimus aliquid omnis
                  iusto consequuntur, excepturi laudantium tenetur nihil dicta
                  magnam voluptatibus eum libero autem molestias odio explicabo.
                  Amet. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Asperiores, similique. Ratione animi consequatur vel
                  voluptatibus. Ut magnam commodi tenetur expedita, id,
                  laboriosam natus a laudantium quia, omnis rem sunt impedit?
                </p>
                <Button
                  href="https://lycee-saintjoseph-mesnieres.fr/"
                  variant="primary"
                >
                  EN SAVOIR PLUS
                </Button>
              </div>
            </div>
          </article>
        </section>

{/* section news */}
        <section id="articles_section">
          <header>
            <h2>
              A<br />G<br />E<br />N<br />D<br />A
            </h2>
          </header>
          <article id="article_feed_articles">
            {/* MAX 3 cards */}
            <CardEvent
              urlEvent="#"
              title="PLANTER UN ARBRE"
              eventType="Evenement"
              image="../assets/photos/garden1.jpg"
              description="lorem ipsum"
              date="01-01-2022"
              author="Amélie"
            />

            <CardEvent
              urlEvent="#"
              title="JOURNEE PATRIMOINE"
              eventType="Culture"
              image="../assets/photos/patrimony.jpg"
              description="lorem ipsum"
              date="01-01-2022"
              author="Amélie"
            />

            <CardEvent
              urlEvent="#"
              title="FETE DE LA NATURE"
              eventType="Evenement"
              image="../assets/photos/feteNature.jpg"
              description="lorem ipsum"
              date="01-01-2022"
              author="Amélie"
            />
          </article>
          <aside></aside>
        </section>

{/* section caroussel what to do */}

<section id="caroussel_section">
<Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
</section>
      </main>

    </>
  );
};

export default Index;
