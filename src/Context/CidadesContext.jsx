import { createContext, useState } from "react";

export const CidadesContext = createContext();

export function CidadesContextProvider({ children }) {
  const [cidades, setCidades] = useState([]);

  const findCidadeById = (listaCidades, idCidade) => {
    return listaCidades.find((cidade) => `${cidade.value}` === idCidade).label;
  };

  return (
    <CidadesContext.Provider value={{ cidades, setCidades, findCidadeById }}>
      {children}
    </CidadesContext.Provider>
  );
}
