import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CidadesContextProvider } from "./Context/CidadesContext";
import HomeScreen from "./Pages/HomeScreen";
import ContingenciaScreen from "./Pages/HomeScreen/ContingenciaScreen";
import ModulosScreen from "./Pages/HomeScreen/ModulosScreen";

const App = () => {
  return (
    <CidadesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="modulos" element={<ModulosScreen />} />
          <Route path="contingencia/:idCidade" element={<ContingenciaScreen />} />
        </Routes>
      </BrowserRouter>
    </CidadesContextProvider>
  );
};
 
export default App;
