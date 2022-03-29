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
          <Route path="contingencias/:idCidade" element={<ContingenciaScreen />} />
          {/* <Route path="contingencia/:idCidade" render={(props) => <ContingenciaScreen props={props} />} /> */}
          
        </Routes>
      </BrowserRouter>
    </CidadesContextProvider>
  );
};
 
export default App;
