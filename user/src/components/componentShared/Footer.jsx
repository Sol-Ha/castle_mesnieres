import { Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import BottomNavFooter from "./navs/BottomNavFooter";

const Footer = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];

  return (
    <footer className="footer_back">
      {location === "admin" ? (
        <>
          <article>
            <div>
              <address>
                Château <br id="br" />
                de Mesnières-en-Bray
                <br />
                <a href="tel:+330235931004">+33 (0)2 35 93 10 04</a>
              </address>

              <Image
                id="blason_normandy"
                src="../assets/images/Blason_Normandie.png"
                alt="blason de la Normandie"
              />

              <span></span>
            </div>

            <div>
              <Image
                id="france_map"
                src="../assets/images/carte.png"
                alt="carte de France"
              />
            </div>

            <div>
              <p>
                <a href="https://www.facebook.com/lyceesaintjosephmesnieresenbray/">
                  <Image
                    src="../assets/icones/facebook.svg"
                    alt="logo de Facebook"
                  />
                </a>
              </p>
              {/* link facebook */}

              <p>
                <a href="https://www.instagram.com/institutmesnieres/">
                  <Image
                    src="../assets/icones/instagram.svg"
                    alt="logo d'Instragram"
                  />
                </a>
              </p>
              {/* link Instagram */}

              <p>
                <a href="https://twitter.com/">
                  <Image
                    src="../assets/icones/twitter.svg"
                    alt="logo de twitter"
                  />
                </a>
              </p>
              {/* link Twitter */}

              <p>
                <a href="https://www.linkedin.com/company/ch%C3%A2teau-de-mesni%C3%A8res-en-bray/about/">
                  <Image
                    src="../assets/icones/linkedin.svg"
                    alt="logo de Linkedin"
                  />
                </a>
              </p>
              {/* link linkedin */}
            </div>
          </article>
        </>
      ) : (
        <>
          <article>
            <div>
              <address>
                Château <br id="br" />
                de Mesnières-en-Bray
                <br />
                <a href="tel:+330235931004">+33 (0)2 35 93 10 04</a>
              </address>

              <Image
                id="blason_normandy"
                src="../assets/images/Blason_Normandie.png"
                alt="blason de la Normandie"
              />

              <span></span>
            </div>

            <div>
              <Image
                id="france_map"
                src="../assets/images/carte.png"
                alt="carte de France"
              />
            </div>

            <div>
              <p>
                <a href="https://www.facebook.com/lyceesaintjosephmesnieresenbray/">
                  <Image
                    src="../assets/icones/facebook.svg"
                    alt="logo de Facebook"
                  />
                </a>
              </p>
              {/* link facebook */}

              <p>
                <a href="https://www.instagram.com/institutmesnieres/">
                  <Image
                    src="../assets/icones/instagram.svg"
                    alt="logo d'Instragram"
                  />
                </a>
              </p>
              {/* link Instagram */}

              <p>
                <a href="https://twitter.com/">
                  <Image
                    src="../assets/icones/twitter.svg"
                    alt="logo de twitter"
                  />
                </a>
              </p>
              {/* link Twitter */}

              <p>
                <a href="https://www.linkedin.com/company/ch%C3%A2teau-de-mesni%C3%A8res-en-bray/about/">
                  <Image
                    src="../assets/icones/linkedin.svg"
                    alt="logo de Linkedin"
                  />
                </a>
              </p>
              {/* link linkedin */}
            </div>
          </article>
          <BottomNavFooter />
        </>
      )}
    </footer>
  );
};

export default Footer;
