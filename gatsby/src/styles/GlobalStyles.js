import { createGlobalStyle } from 'styled-components';
import bg from '../images/bg.svg';

const GlobalStyles = createGlobalStyle`
  :root {
    --yellow: #ffc600;
    --white: #FFFEF5;
    --gray: #f4f6f5;
    --red: #EC632B;
    --purple: #463878;
    --salmon: #EC632B;
    --darkGray: #272727;
    --darkPurple: #432B74;
    --black: #161616;
  }

  html {
    background-color: var(--purple);
    background-image: url(${bg});
    background-size: 450px;
    background-attachment: fixed;
    color: var(--white);
    font-size: 16px;
    font-display: swap;
  }

  html, body {
    height: 100vh;
  }

  a {
    transition: all 0.1s;
  }

  ${`.gatsby-image-wrapper img[src*=base64\\,]`} {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--red) var(--darkPurple);
  }

  body::-webkit-scrollbar-track {
    background: var(--darkPurple);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--darkPurple);
  }
`;

export default GlobalStyles;
