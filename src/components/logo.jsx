import React from 'react';
import pencil from '../images/5692282.png'
import '../styles/logo.css';

const Logo = () => {
  return (
    <div className="logo12">
      <h1 className="logo1">SWEET PAIN</h1>
      <p className="logo-text">studio de tatuagem</p>
      <img className="img-logo"src={pencil} alt="" />
    </div>
  );
}

export default Logo;
