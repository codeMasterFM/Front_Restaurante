import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./page/Home";
import Sales from "./page/Sales";

const App = () => {

  useEffect(() => {
  }, []);

  if (window.innerWidth < 461) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Sales" element={<Sales />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    console.log("entre");
    return (
      <>
        Esta pagina No Esta Disponible para dispositivos de esta resolucion ,
        favor ingrese desde un celular
      </>
    );
  }
};

export default App;
