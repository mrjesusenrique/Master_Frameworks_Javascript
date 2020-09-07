import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import SeccionPruebas from './components/SeccionPruebas';

function App() {

  const titleSlider = "Bienvenido al Master en  el Framework ReactJS de Javascript";
  const buttonString = "Ver más";

  return (
    <div className="App">
      <Header />
      <Slider
        title={titleSlider}
        btn={buttonString}
      />

      <div className="center">
        <SeccionPruebas />
        <Sidebar />
        <div className="clearfix"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
