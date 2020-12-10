import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
const theme = {
  textColor: "black",
  linkColor: "white",
};

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif;
    color: black;
    background-color: white;
    font-size: calc(1em + 1vw);
    display: flex;
    justify-content: center;
    align-items: center;
    ${"" /* width: 100vw;
    height: 100vh;
    user-select: none; */}
  } 
`;
ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
