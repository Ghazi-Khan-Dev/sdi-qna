import React from "react";

import './header.css';
import sdiLogo from '../../assets/sdi1-modified.svg'
import bismillah from '../../assets/bismillah.svg';

const Header = () => {
  return (
    <div className='header-container'>
      <div className="header-logo-section">
        <img src={sdiLogo} height={'100%'}/>
      </div>
      <div className="header-logo-section">
        <img src={bismillah} height={'100%'} />
      </div>
    </div>
  );
};

export default Header;
