import React from "react";
import branch from "../../assets/img/group-4935.svg";
import rates from "../../assets/img/rates.svg";
import contact from "../../assets/img/contact.svg";
import faq from "../../assets/img/faq.svg";
import "./banking-tools.css";


function Tools() {
  return (
    <section
      className="content-wrapper has-animation pt-0"
      data-vp-add-class="visible"
    >
      <div className="wrapper">
        {/* <h2 className='section-title'>Tools to bank with ease</h2> */}
        {/* <!-- banking-tools --> */}
        <ul className="banking-tools">
          <li>
            <a href="https://api.whatsapp.com/send?phone=558737613288&text=Ol%C3%A1%20seja%20bem%20vindo!%20em%20que%20podemos%20ajudar">
              <img src={contact} width="44" height="44" alt="" />
              <span>Agende seus exames</span>
            </a>
          </li>
          <li>
            <a href="https://lablaudo.com.br/acesso_paciente">
              <img src={rates} width="33" height="44" alt="" />
              <span>Resultados de exames</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={faq} width="33" height="44" alt="" />
              <span>Resultado de Biopsia</span>
            </a>
          </li>
          {/* <li>
            <a href='faqs.html'>
              <img src={faq} width='44' height='44' alt='' />
              <span>
                Frequently
                <br />
                Asked Questions
              </span>
            </a>
          </li> */}
        </ul>
        {/* <!-- banking-tools end --> */}
      </div>
    </section>
  );
}

export default Tools;
