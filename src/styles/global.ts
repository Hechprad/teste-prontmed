import { createGlobalStyle } from 'styled-components'
import NunitoSans400 from 'assets/fonts/NunitoSans400.ttf'
import NunitoSans700 from 'assets/fonts/NunitoSans700.ttf'

export default createGlobalStyle`

  @font-face {
    font-family: 'Nunito Sans Regular';
    src: local('Nunito Sans Regular'),
    url(${NunitoSans400}) format('truetype');
  }

  @font-face {
    font-family: 'Nunito Sans Bold';
    src: local('Nunito Sans Bold'),
    url(${NunitoSans700}) format('truetype');
  }


  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: Nunito Sans Regular, sans-serif;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
  }
  body {
    scroll-behavior: smooth;

  }
  html, body {
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    background-color: transparent;
    color: #56504c
  }

  html.noOverflow {
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  p {
    font-weight: 300;
  }

  ::selection {
    background: #429BD8;
    color: #fff;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;
    background-color: transparent;
  }

  .main-content {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 1280px) {
      margin-top: 14px;
    }
  }

`
