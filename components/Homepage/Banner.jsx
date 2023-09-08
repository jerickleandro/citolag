import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="heroWrapper center">
      {/* <select className={styles.dropDown}>
        <option value="US">US</option>
        <option value="IN">IN</option>
      </select> */}
      <div className="heroInner">
        <h2 className="headerText">
          O jeito mais prático de contar com nosso atendimento humanizado em sua
          casa .
        </h2>
        {/* <div className={styles.inputLocation}>
          <i className="fas fa-map-marker-alt"> </i>
          <input type="text" placeholder="Enter your address" />
          <i className={`${styles.arrow} fas fa-arrow-right`}></i>
        </div> */}
      </div>
      <div className="heroImage">
        <Image
          src="/img/banners/banner.png"
          alt=""
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
}

export default Banner;
