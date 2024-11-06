import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BannerStreamingHome.css';

const BannerStreamingHome = () => {
  return (
    <div className="banner-streaming-home text-center">
      <h1>¡AHORA MÁS DIVERSIÓN!</h1>
      <p>CONTRATA Y ACTIVA TUS APPS FAVORITAS Y DISFRUTA DE TODO LO QUE TENEMOS PARA TI</p>
      <div className="streaming-logos d-flex justify-content-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Amazon Prime" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg" alt="Disney+" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="Max" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Paramount%2B_logo.svg" alt="Paramount+" className="logo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Fox_Sports_Premium_%28Argentina%29_-_2018_logo.png" alt="Fox Sports" className="logo" />
      </div>
    </div>
  );
};

export default BannerStreamingHome;