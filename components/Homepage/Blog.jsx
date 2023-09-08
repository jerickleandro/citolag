import React from "react";
import Image from "next/image";

function Blog() {
  return (
    <section id="blog" className="content-wrapper dark has-animation">
      <div className="wrapper">
        <div className="blog first-fold">
          <div className="col left">
            <div className="block">
              <h2 className="section-title">Novidades para você.</h2>
              {/* <p>
                O Laboratórios Citolag há 20 anos, atuando na Cidade de
                Garanhuns/PE, conhecido não só pela qualidade, agilidade e
                exatidão nas análises, mas também no auxílio de diagnóstico com
                rigor cientíﬁco, ética e conﬁabilidade, ganhador do prêmio
                Marcas de Credibilidade na Revista VEJA entre as melhores
                Empresas do ano de 2017 em seu segmento.
              </p>
              <a href="#" className="link-btn">
                Agende agora seu exame
              </a> */}
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
                <Image
                  src="/img/insta/insta01.jpeg"
                  width={290}
                  height={143}
                  alt="Product Pic"
                />
                <div className="desc">
                  <h3 className="title">Instagram: citolaglaboratorio</h3>
                  <p>
                    A noite da última sexta-feira foi muito especial para todos
                    que fazem parte da história do Laboratório CITOLAG.
                    Realizamos a comemoração dos nossos 20 anos de laboratório
                    em Garanhuns, bem como apresentamos a nossa nova marca...
                  </p>
                  <a
                    href="https://www.instagram.com/p/CiFiWLJuEOX/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                    className="primary-btn"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
                <Image
                  src="/img/insta/insta02.jpeg"
                  width={290}
                  height={143}
                  alt="Product Pic"
                />
                <div className="desc">
                  <h3 className="title">Instagram: citolaglaboratorio</h3>
                  <p>
                  Bom feriado a todos!
                  </p>
                  <a
                    href="https://www.instagram.com/p/Cw3XW4aLts_/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                    className="primary-btn"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
                <Image
                  src="/img/insta/insta03.jpeg"
                  width={290}
                  height={143}
                  alt="Product Pic"
                />
                <div className="desc">
                  <h3 className="title">Instagram: citolaglaboratorio</h3>
                  <p>
                  O hematoma pode acontecer sim, ele nada mais é do que o extravasamento do sangue, existem alguns motivos para que isso aconteça:...
                  </p>
                  <a
                    href="https://www.instagram.com/p/Cw07JQ2gohb/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=="
                    className="primary-btn"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
