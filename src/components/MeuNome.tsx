"use client";

import {FC} from "react";
import {useParams} from "next/navigation";

type MeuNomeProps = { name: string, birthdate: Date }

function calcularIdade(birthdate: Date) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - birthdate.getFullYear();

    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    const mesNascimento = birthdate.getMonth();
    const diaNascimento = birthdate.getDate();

    if (
        mesAtual < mesNascimento ||
        (mesAtual === mesNascimento && diaAtual < diaNascimento)
    ) {
        idade--;
    }

    return idade;
}

export const MeuNome: FC<MeuNomeProps> = ({name, birthdate}) => {

    // é possível capturar o parâmetro dessa forma
    const params = useParams(); // this
    console.log(params)

    return (
        <p>
            Sou o {name} e
            tenho {calcularIdade(birthdate)} anos,
            nasci no dia {birthdate.toLocaleDateString("pt-BR")}
        </p>
    );
}
