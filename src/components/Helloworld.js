import React from 'react';
import '../assets/styles/index.scss';
import logo from '../assets/static/logo.png';
import Pokemon from './pokemon';

const HelloWorld = () => {
  return (
    <div>
      <div className='head'>

        <img src={logo} width='210' height='110' alt='logo' />

      </div>
      <div className='title'><h1>POKEDEX</h1></div>
      {/* <img src={logo} alt='logo' /> */}
      <Pokemon />
    </div>
  );
};

export default HelloWorld;
