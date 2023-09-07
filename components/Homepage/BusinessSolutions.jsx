import React from "react";
import Image from 'next/image';

function BusinessSolutions() {
  return (
    <section id="servicos" className="content-wrapper dark has-animation">
      <div className="wrapper">
        <div className="solutions">
          <div className="col left">
            <div className="block">
              <h2 className="section-title">Nossos Serviços</h2>
              <p>
                O Laboratórios Citolag há 20 anos, atuando na Cidade de
                Garanhuns/PE, conhecido não só pela qualidade, agilidade e
                exatidão nas análises, mas também no auxílio de diagnóstico com
                rigor cientíﬁco, ética e conﬁabilidade, ganhador do prêmio
                Marcas de Credibilidade na Revista VEJA entre as melhores
                Empresas do ano de 2017 em seu segmento.
              </p>
              <a href="#" className="link-btn">
                Agende agora seu exame
              </a>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
                <Image src="/img/solutions/solution4.png" alt="Product Pic" width={400} height={143}/>
                <div className="desc">
                  <h3 className="title">
                  Exames laboratoriais
                  </h3>
                  <p>Descrição do serviço</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
              <Image src="/img/solutions/solution5.png" alt="Product Pic" width={400} height={143}/>
                <div className="desc">
                  <h3 className="title">
                  Citologia
                  </h3>
                  <p>Descrição do serviço</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
              <Image src="/img/solutions/solution6.png" alt="Product Pic" width={400} height={143}/>
                <div className="desc">
                  <h3 className="title">
                  Atendimento infantil
                  </h3>
                  <p>Descrição do serviço</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessSolutions;