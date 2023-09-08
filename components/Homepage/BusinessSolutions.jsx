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
              <a href="https://api.whatsapp.com/send?phone=558737613288&text=Ol%C3%A1%20seja%20bem%20vindo!%20em%20que%20podemos%20ajudar" className="link-btn">
                Agende agora seu exame
              </a>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
                <Image src="/img/solutions/solution4.png" alt="Product Pic" width={1000} height={1000}/>
                <div className="desc">
                  <h3 className="title">
                  Exames laboratoriais
                  </h3>
                  <p>Exames laboratoriais são importantes para detectar alterações no organismo, mesmo que assintomáticas, e iniciar o tratamento o mais breve possível. Eles também são usados para avaliar o risco anestésico-cirúrgico em avaliações pré-operatórias. Na medicina diagnóstica, eles são usados em 70% das decisões clínicas relacionadas ao diagnóstico e tratamento de problemas de saúde.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
              <Image src="/img/solutions/solution5.png" alt="Product Pic" width={600} height={600}/>
                <div className="desc">
                  <h3 className="title">
                  Citologia
                  </h3>
                  <p>O exame de citologia oncótica, também conhecido como exame preventivo do colo do útero ou papanicolau, é a principal estratégia escolhida no Brasil para o rastreamento precoce do câncer de colo de útero e doenças sexualmente transmissíveis. É um exame simples realizado em consultório médico e é importante para a prevenção da saúde.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
              <Image src="/img/solutions/solution6.png" alt="Product Pic" width={600} height={600}/>
                <div className="desc">
                  <h3 className="title">
                  Atendimento infantil
                  </h3>
                  <p>Pensando no conforto e bem-estar das crianças, os colaboradores que coletam o sangue são especializados em atender crianças, para que se sintam mais seguras! Conheça nossas unidades, tire suas dúvidas e traga seu filho para fazer exames conosco de forma rápida e segura.</p>
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
