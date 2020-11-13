import React from "react";
import LogoImage from "../../../img/abb-logo.png";
import {Link} from 'react-router-dom';
import './logo.scss';
function Logo() {
  return(

  <Link to='/' className ="logo">
    <img className='logo' src={LogoImage} />

  </Link>
  );
}

export default Logo;
