import React from "react";
import social1 from "../../assets/img/group-26029.png";
import social2 from "../../assets/img/group-26840.png";
import social3 from "../../assets/img/group-26464.png";
import social4 from "../../assets/img/group-26237.png";

import "./footer.css";

function Footer() {
  return (
    <footer>
      {/* <!-- links-section --> */}
      <div id="footer" className="links-section">
        <div className="footer-links wrapper">
          <div className="links-block">
            <h3>Acesso rápido</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">O laboratório</a>
              </li>
              <li>
                <a href="#servicos">Serviços</a>
              </li>
              <li>
                <a href="#unidades">Unidades</a>
              </li>
            </ul>
          </div>
          <div className="links-block">
            <h3>Unidades</h3>
            <ul>
              <li>
                <a href="#">
                  Matriz : Av. Santo Antonio, 117 Centro, Garanhuns/PE
                </a>
              </li>
              <li>
                <a href="#">
                  Posto de coleta: Clínica de radiologia e ultrassonograﬁa Dr.
                  José Walter<br></br>
                  Av. Rui Barbosa, 631, Heliópolis Garanhuns/PE{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  Posto de coleta: Clínica Salute<br></br>
                  Djalma Dutra, 276 A, Heliópolis, Garanhuns/PE{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  Posto de coleta: Av. Luiz Pereira, 05, Centro Caetés/PE
                </a>
              </li>
            </ul>
          </div>
          <div className="links-block">
            <h3>Contatos</h3>
            <ul>
              <li>Agende seu exame agora mesmo.</li>
              <li>Garanhuns (87) 3761.3288</li>
              <li>Caetés (87) 3761.3288</li>
              <li>citolag@citolag.com.br</li>
            </ul>
          </div>
    
          
        </div>
      </div>
      {/* <!-- links-section end -->
      <!-- bottom-section --> */}
      <div className="bottom-section">
        <div className="wrapper">
          <div className="bottom-section_inner">
            <span className="copyright">
              Regulated by Citolag{" "}
              <span className="sep">|</span> &copy; 2023 Erick Leandro. All
              Rights Reserved.
            </span>
            <ul className="social">
              <li>
                <a href="javascript:void(0)">
                  <img src={social1} alt="" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src={social2} alt="" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src={social3} alt="" />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img src={social4} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <!-- bottom-section end --> */}
      <div className="info-policy" style={{ display: "none" }}>
        <span>
          Our website uses cookies to help us improve our services to you. By
          continuing to browse the site you are agreeing to our{" "}
          <a href="privacy-policy.html">privacy policy</a> and our use of
          cookies.
        </span>
        <span className="icon-close"></span>
      </div>
    </footer>
  );
}

export default Footer;
