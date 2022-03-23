import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CidadesContextProvider } from "./Context/CidadesContext";
import HomeScreen from "./Pages/HomeScreen";
import ModulosScreen from "./Pages/HomeScreen/ModulosScreen";

const App = () => {
  return (
    <CidadesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="modulos" element={<ModulosScreen />} />
        </Routes>
      </BrowserRouter>
    </CidadesContextProvider>
  );
};

export default App;
