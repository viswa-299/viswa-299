import React from "react";
import Header from   "./components/Header/Header";
import Hero from "./components/hero/Hero";
import Company from "./components/companies/Company";
import './App.css';
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import Getstarted from "./components/Getstarted/Getstarted";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
      <Header/>
      <Hero/>
      </div>
      <Company/>  
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div> 
  );
}
export default App;