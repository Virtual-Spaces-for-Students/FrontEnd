import React from 'react';
import '../../../styles/404.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <div className="bg-black top-0">
    <div className="container mx-auto">
      <Link to="/" target="_blank">
        <header className="top-header">
        </header>
        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>
        <div className="lamp__wrap">
          <div className="lamp">
            <div className="cable"></div>
            <div className="cover"></div>
            <div className="in-cover">
              <div className="bulb"></div>
            </div>
            <div className="light"></div>
          </div>
        </div>
        <section className="error">
          <div className="error__content">
            <div className="error__message message">
              <h1 className="message__title">Page Non Trouvée</h1>
              <p className="message__text">La page n'existe pas. Le lien n'est peut être plus existant.</p>
              <p className='message__text'>S'il vous plait veuillez retourner à la page d'accueil.</p>
            </div>
            <div className="error__nav e-nav">
              <Link to="/" target="_blanck" className="e-nav__link"></Link>
            </div>
          </div>
        </section>
      </Link>
    </div >
  </div>
);

export default ErrorPage;
