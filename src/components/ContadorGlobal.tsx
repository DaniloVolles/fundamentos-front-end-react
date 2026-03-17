"use client";

import {useContext} from "react";
import {ContadorContext} from "@/context/ContadorContext";
import {Button} from "@/components/Button";

export const ContadorGlobal = () => {

    const {contador, setContador} = useContext(ContadorContext)

    return (
        <div className="grid gap-y-2">
            <h2 className="text-2xl">Contador</h2>
            <p>Numero atual: {contador}</p>

            <div className="flex gap-x-2">
                <Button onClick={() => setContador((c: number): number => c - 100)}>
                    -100
                </Button>

                <Button onClick={() => setContador((c: number): number => c + 100)}>
                    +100
                </Button>
            </div>
        </div>
    );
}