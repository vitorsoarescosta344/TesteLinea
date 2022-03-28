import React from "react";
import "./Footer.css";
import {
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
  TiSocialPinterestCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <div>Perguntas frequentes</div>
              </li>
              <li>
                <div>Politica de privacidade</div>
              </li>
              <li>
                <div>Central de privacidade</div>
              </li>
              <li>
                <div>Termo de uso</div>
              </li>
              <li>
                <div>Trocas e devolucoes</div>
              </li>
              <li>
                <div>Acompanhar seu pedido</div>
              </li>
            </ul>
          </div>

          <div className="col">
            <div>Redes sociais</div>
            <div className="social-medias">
              <TiSocialFacebookCircular size={"3.5em"} color={"#e7635f"} />
              <TiSocialInstagramCircular size={"3.5em"} color={"#e7635f"} />
              <TiSocialPinterestCircular size={"3.5em"} color={"#e7635f"} />
              <TiSocialYoutubeCircular size={"3.5em"} color={"#e7635f"} />
            </div>
          </div>
          <div className="col d-flex justify-content-end align-items-center">
            <img
              className="logo-blindado"
              src="https://logodownload.org/wp-content/uploads/2017/12/site-blindado-logo-5.png"
              alt="site-blindado-logo-5"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
