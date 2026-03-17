"use client";

import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from "react";

type ContadorContextType = {
    contador: number;
    setContador: Dispatch<SetStateAction<number>>;
}

export const ContadorContext: React.Context<ContadorContextType> = createContext<ContadorContextType>({
    contador: 0,
    setContador: () => {}
})

export default function ContadorProvider({children}: {children: ReactNode}) {

    const [contador, setContador] = useState(108)

    return <ContadorContext.Provider value={{ contador, setContador }}>
        {children}
    </ContadorContext.Provider>;
}