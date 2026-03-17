"use client";

import {useContext} from "react";
import {ContadorContext} from "@/context/ContadorContext";

export const ValorContadorGlobal = () => {

    const {contador} = useContext(ContadorContext)

    return (
        <div className="grid gap-y-2">
            <p>Valor do meu contador global: {contador}</p>
        </div>
    );
}