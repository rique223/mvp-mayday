import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContingenciaInterna from "./Pages/ContingenciaInterna/ContingenciaInterna";
import HomeScreen from "./Pages/HomeScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/contingenciaInterna" element={<ContingenciaInterna />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
