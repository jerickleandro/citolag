import React from 'react';
import LogoImage from '../../assets/img/logo.png';
import './nav2.css';

function Nav2() {
  return (
    // <!-- header -->
    <header>
      {/* <!-- top-section --> */}
      <div className='top-section'>
        <div className='wrapper'>
          <a href='index.html' className='logo'>
            <img src={LogoImage} width='170' alt='CITOLAG' />
          </a>
          {/* <!-- secondary-nav --> */}
          <ul className='secondary-nav'>
            <li>
              <a href='index.html'>Home</a>
            </li>
            <li>
              <a href='#'>O laboratório</a>
            </li>
            <li>
              <a href='#servicos'>Serviços</a>
            </li>
            <li>
              <a href='#unidades'>Unidades</a>
            </li>
            <li>
              <a href='#'>Convênios</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#footer'>Contatos</a>
            </li>
            <li>
              <a href='#'>LGPD</a>
            </li>
            {/* <li>
              <a href='#' className='btn'>
                Internet Banking
              </a>
            </li> */}
          </ul>
          {/* <!-- secondary-nav end --> */}
          {/* <a href='#' className='btn-menu icon-menu'></a> */}
        </div>
      </div>
    </header>
  );
}

export default Nav2;
