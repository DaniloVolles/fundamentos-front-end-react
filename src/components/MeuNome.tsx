import {FC} from "react";

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

export const MeuNome: FC<MeuNomeProps> = (props) => {

    const { name, birthdate } = props;

    return (
        <>
            <p>
                Sou o {name} e
                tenho {calcularIdade(birthdate)} anos,
                nasci no dia {birthdate.toLocaleDateString("pt-BR")}
            </p>
        </>
    );
};