import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CidadesContextProvider } from "./Context/CidadesContext";
import ContingenciaScreen from "./Pages/ContingenciasScreen/ContingenciaScreen";
import ContingenciaInterna from "./Pages/ContingenciaInterna";
import HomeScreen from "./Pages/HomeScreen";
import ModulosScreen from "./Pages/ModulosScreen";

const App = () => {
  return (
    <CidadesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='modulos' element={<ModulosScreen />} />
          <Route
            path='contingencias/:idCidade'
            element={<ContingenciaScreen />}
          />
          <Route
            index
            path='contingenciaInterna/cidade=:idCidade/plano=:idPlano'
            element={<ContingenciaInterna />}
          />
        </Routes>
      </BrowserRouter>
    </CidadesContextProvider>
  );
};

export default App;
