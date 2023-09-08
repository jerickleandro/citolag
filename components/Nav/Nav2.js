import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Nav2() {
  return (
    // <!-- header -->
    <header>
      {/* <!-- top-section --> */}
      <div className='top-section'>
        <div className='wrapper'>
        <Link legacyBehavior href="/">
          <a className='logo'>
          <Image src="/img/logo.png" alt="" width={170} height={170}/>
          </a>
          </Link>
          {/* <!-- secondary-nav --> */}
          <ul className='secondary-nav'>
            <li>
            <Link legacyBehavior href="/">
              <a>Home</a>
              </Link>
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
              <a href='#blog'>Blog</a>
            </li>
            <li>
              <a href='#footer'>Contatos</a>
            </li>
            {/* <li>
              <a href='#'>LGPD</a>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Nav2;
