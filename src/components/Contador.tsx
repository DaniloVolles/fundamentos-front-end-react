"use client";

import {useState} from "react";
import {Button} from "@/components/Button";

export const Contador = () => {
    const [contador, setContador] = useState(0);
    const [coisa, setCoisa] = useState("");

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

            <div className="flex gap-x-2">
                <input className="px-4 py-1 border border-gray-500" type="text" value={coisa} onChange={(e) => setCoisa(e.target.value)} />
                <Button onClick={()=> setCoisa("")}>
                    Limpar
                </Button>
            </div>
        </div>
    );
}