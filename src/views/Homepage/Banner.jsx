import React from 'react';
import banner4 from '../../assets/img/banners/banner4.jpg';
import banner3 from '../../assets/img/group-3880.png';
import banner2 from '../../assets/img/banners/banner1.png';
import banner1 from '../../assets/img/banners/banner2.png';
import banner from '../../assets/img/banners/banner.png';
import './banner.css';

function Banner() {
  return (
    // <section className='sliding-banner owl-carousel'>
    //   <div className='item'>
    //     <div className='col left'>
    //       <h2 className='section-title large'>
    //         We aim to provide you with the tools you need to seize today for a{' '}
    //         <span className='light'>better tomorrow. </span>
    //       </h2>
    //       <a
    //         className='primary-btn'
    //         data-fancybox
    //         href='https://youtu.be/iiOBq5t6KVc'
    //       >
    //         See what tomorrow holds
    //       </a>
    //     </div>
    //     <div
    //       className='col right'
    //       style={{
    //         backgroundImage: `url(${banner4})`,
    //       }}
    //     ></div>
    //   </div>
    //   <div className='item'>
    //     <div className='col left'>
    //       <h2 className='section-title large'>
    //         SBM Group is a <span className='light'>strong financial group</span>{' '}
    //         with presence in Mauritius, Madagascar, India, and Kenya.
    //       </h2>
    //       <a href='#' className='primary-btn'>
    //         Learn More
    //       </a>
    //     </div>
    //     <div
    //       className='col right'
    //       style={{ backgroundImage: `url(${banner3})` }}
    //     ></div>
    //   </div>
    //   <div className='item'>
    //     <div className='col left'>
    //       <h2 className='section-title large'>
    //         We are the bank of choice{' '}
    //         <span className='light'>for your business</span>
    //       </h2>
    //       <a href='#' className='primary-btn'>
    //         Discover Solutions
    //       </a>
    //     </div>
    //     <div
    //       className='col right'
    //       style={{
    //         backgroundImage: `url(${banner2})`,
    //       }}
    //     ></div>
    //   </div>
    //   <div className='item'>
    //     <div className='col left'>
    //       <h2 className='section-title large'>
    //         You have a need, we have <span className='light'>a solution</span>
    //       </h2>
    //       <a href='#' className='primary-btn'>
    //         Explore SBM
    //       </a>
    //     </div>
    //     <div
    //       className='col right'
    //       style={{
    //         backgroundImage: `url(${banner1})`,
    //       }}
    //     ></div>
    //   </div>
    //   <div className='item'>
    //     <div className='col left'>
    //       <h2 className='section-title large'>
    //         We want to partner with you{' '}
    //         <span className='light'>at every step</span>
    //       </h2>
    //       <a href='#' className='primary-btn'>
    //         Learn More
    //       </a>
    //     </div>
    //     <div
    //       className='col right'
    //       style={{
    //         backgroundImage: `url(${banner})`,
    //       }}
    //     ></div>
    //   </div>
    // </section>
    <div className='heroWrapper center'>
      {/* <select className={styles.dropDown}>
        <option value="US">US</option>
        <option value="IN">IN</option>
      </select> */}
      <div className="heroInner">
        <h2 className='headerText'>
        O jeito mais prático de contar com
nosso atendimento humanizado
em sua casa .
        </h2>
        {/* <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div> */}
      </div>
      <div className='heroImage'>
        <img
          src={banner}
          alt=""
        />
      </div>
    </div>
  );
}

export default Banner;
