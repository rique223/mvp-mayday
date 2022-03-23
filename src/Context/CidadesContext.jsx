import {createContext, useState} from 'react';


export const CidadesContext = createContext();

export function CidadesContextProvider({children}){

    const [cidades, setCidades] = useState([]);

    return (
        <CidadesContext.Provider value={{cidades, setCidades}}>
            {children}
        </CidadesContext.Provider>
    )

}