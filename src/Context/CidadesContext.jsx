import {createContext, useState} from 'react';


export const CidadesContext = createContext();

export function CidadesContextProvider({children}){

    const [cidades, setCidades] = useState([]);

    const findCidadeById = (listaCidades,valor) => listaCidades.filter((x) => x.value === valor).map((v) => v.label);

    return (
        <CidadesContext.Provider value={{cidades, setCidades, findCidadeById}}>
            {children}
        </CidadesContext.Provider>
    )

}