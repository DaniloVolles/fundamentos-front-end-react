import {FC} from "react";

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

export const MeuNome: FC<{ name: string, birthdate: Date }> = (props) => {
    return (
        <>
            <p>
                Sou o {props.name} e
                tenho {calcularIdade(props.birthdate)} anos,
                nasci no dia {props.birthdate.toLocaleDateString("en-US")}
            </p>
        </>
    );
};