import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top d-flex justify-content-center align-items-center p-3">
        <div className="d-flex justify-content-between w-100" style={{ maxWidth: '1200px' }}>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="contact-info text-end">
            <p>atencionclientes@megacable.com.mx</p>
            <p>33 9660 0000</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h5>Menú 1</h5>
              <ul className="list-unstyled">
                <li><a href="#">Opción 1</a></li>
                <li><a href="#">Opción 2</a></li>
                <li><a href="#">Opción 3</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Menú 2</h5>
              <ul className="list-unstyled">
                <li><a href="#">Opción 1</a></li>
                <li><a href="#">Opción 2</a></li>
                <li><a href="#">Opción 3</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Menú 3</h5>
              <ul className="list-unstyled">
                <li><a href="#">Opción 1</a></li>
                <li><a href="#">Opción 2</a></li>
                <li><a href="#">Opción 3</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Menú 4</h5>
              <ul className="list-unstyled">
                <li><a href="#">Opción 1</a></li>
                <li><a href="#">Opción 2</a></li>
                <li><a href="#">Opción 3</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;