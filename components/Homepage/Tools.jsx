import React from "react";
import Image from 'next/image';


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
             
              <Image src="/img/contact.svg" width={44} height={44} alt="" />
              <span>Agende seus exames</span>
            </a>
          </li>
          <li>
            <a href="https://lablaudo.com.br/acesso_paciente">
            <Image src="/img/rates.svg" width={33} height={44} alt="" />
              <span>Resultados de exames</span>
            </a>
          </li>
          <li>
            <a href="https://www.labhoraciofittipaldi.com.br/vidalaudos/login_paciente.xhtml;jsessionid=115f228a2be66aa0ca4d65949bc1">
            <Image src="/img/faq.svg" width={33} height={44} alt="" />
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
