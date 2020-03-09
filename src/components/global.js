import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .head{
    height:110px;
    background: ${({ theme }) => theme.head};
    display:flex;
    justify-content:center;
    align-items:center;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.47);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.47);
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.47);
  }
  .card{
    background: ${({ theme }) => theme.card};
    
  }
  `