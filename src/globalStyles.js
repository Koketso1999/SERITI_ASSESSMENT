import styled, { createGlobalStyle } from "styled-components";

// Create universal styling across the website
const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
   } 

   html,
   body {
     height: 100%;
   }
  `;

export default GlobalStyle;
