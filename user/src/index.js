import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./components/componentShared/navs/nav.scss";
import "./components/componentShared/headerFooter.scss";
import "./components/backComponents/forms/form.scss"
import "./pages/frontPages/index/index.scss"
import "./components/frontComponents/cards/card.scss"
import "./components/frontComponents/carousels/carousel.scss"


// ReactDOM.render(
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
  // document.getElementById('root')
);
