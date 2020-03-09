import React from 'react';
import '../assets/styles/index.scss';
import { ThemeProvider } from 'styled-components';
import logo from '../assets/static/logo.png';
import Pokemon from './pokemon';
import { useDarkMode } from './useDarkMode';
import { GlobalStyles } from './global';
import { lightTheme, darkTheme } from './theme';
import Toggle from './toggle';

const HelloWorld = () => {

  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  };

  return (
    <div>

      <ThemeProvider theme={themeMode}>
        <div className='head'>

          <img src={logo} width='210' height='110' alt='logo' />

        </div>
        <div className='title'><h1>POKEDEX</h1></div>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        {/* <img src={logo} alt='logo' /> */}
        <GlobalStyles />
        <Pokemon tema={themeMode} />
      </ThemeProvider>
    </div>
  );
};

export default HelloWorld;
