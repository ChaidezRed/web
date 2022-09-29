import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import Main from './components/Main'
import Body from "./components/body"
import Characters from "./components/Characters/bodyCharacters"
import ContactUs from './components/ContactUs/ContactBody'

ReactDOM.createRoot(document.getElementById("root")).render(
  <> 
    <Header /> 
    <Body></Body>
    <Characters></Characters>
    <ContactUs></ContactUs>
  </>
);
