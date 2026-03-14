import {FC} from "react";

export const MeuNome: FC<{ name: string }> = (props) => {
    return props.name === "Danilo" ? <p>Sou o Danilo</p> : <p>Sou outra pessoa</p>;
};