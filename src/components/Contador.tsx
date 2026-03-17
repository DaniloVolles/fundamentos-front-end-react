"use client";

import {useState} from "react";

export const Contador = () => {
    const [contador, _setContador] = useState(12);

    // se vc tentar redefinir aqui, o programa entra em looping infinito,
    // por que o React renderiza a página duas vezes
    // _setContador(12)

    return (
        <div>
            <h2 className="text-2xl">Contador</h2>
            <p>Numero atual: {contador}</p>
        </div>
    );
}