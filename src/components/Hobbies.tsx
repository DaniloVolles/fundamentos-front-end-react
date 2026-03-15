const hobbies: string[] = ['Jogos', 'Idiomas', 'Comer']

export const Hobbies = () => {

    const [hobbyPreferido, ...outrosHobbies] = hobbies;
    const novosHobbies = [ "Namorar" ];

    const meusHobbies = [
        ...outrosHobbies,
        novosHobbies
    ]

    return (
        <>
            <p>Meus Hobbies são:</p>
            <ul className="list-disc pl-8">
                <li className="font-bold">{hobbyPreferido}</li>
                {meusHobbies.map((meuHobbie, i) => (
                    <li key={`hobby-${i}`}>{meuHobbie}</li>
                ))}
            </ul>
        </>
    )
}
