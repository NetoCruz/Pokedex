import React from 'react';
import '../assets/styles/index.scss';
import logo from '../assets/static/logo.png';
import Pokemon from './pokemon';

const HelloWorld = () => {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} width='190' height='90' className='d-inline-block  ' alt='logo' />
        </nav>
      </header>
      <div className='title'><h1>POKEDEX</h1></div>
      {/* <img src={logo} alt='logo' /> */}
      <Pokemon />
    </div>
  );
};

export default HelloWorld;
