import React from "react";
import Image from 'next/image';


function Unidades() {
  return (
    <section id="unidades" className="content-wrapper has-animation">
      <div className="wrapper">
        <div className="solutions first-fold">
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
                <Image src="/img/solutions/solution1.png" width={290} height={143} alt="Product Pic"/>
                <div className="desc">
                  <h3 className="title">Matriz</h3>
                  <p>Av. Santo Antonio, 117 Centro, Garanhuns/PE</p>
                  <a href="https://www.google.com/maps/search/Av.+Santo+Antonio,+117+Centro,+Garanhuns%2FPE/@-8.8843108,-36.4825892,20.03z?entry=ttu" className="primary-btn">
                    Como chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
              <Image src="/img/solutions/solution1.png" width={290} height={143} alt="Product Pic"/>
                <div className="desc">
                  <h3 className="title">
                    Posto de coleta: Clínica de radiologia e ultrassonograﬁa Dr.
                    José Walter
                  </h3>
                  <p>Av. Rui Barbosa, 631, Heliópolis Garanhuns/PE</p>
                  <a href="https://goo.gl/maps/w3YfZRd6e3GN5vgo6" className="primary-btn">
                    Como chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
              <Image src="/img/solutions/solution1.png" width={290} height={143} alt="Product Pic"/>
                <div className="desc">
                  <h3 className="title">Posto de coleta: Clínica Salute</h3>
                  <p>Djalma Dutra, 276 A, Heliópolis, Garanhuns/PE</p>
                  <a href="https://goo.gl/maps/BoGdN7aWfCzVaezB6" className="primary-btn">
                    Como chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col right products-slider owl-carousel">
            <div className="block">
              <div className="product">
              <Image src="/img/solutions/solution1.png" width={290} height={143} alt="Product Pic"/>
                <div className="desc">
                  <h3 className="title">Posto de coleta: Caetés</h3>
                  <p>Av. Luiz Pereira, 05, Centro Caetés/PE</p>
                  <a href="https://goo.gl/maps/Xaqn5ahrBtgvjRH99" className="primary-btn">
                    Como chegar
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col left">
            <div className="block">
              <h2 className="section-title">
                <span className="light">Nossas </span>
                Unidades
                <br />
              </h2>
              <p>
                Uma unidade pronta para atendê-lo com prazer bem perto de você!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unidades;
