const hobbies: string[] = ['Jogos', 'Idiomas', 'Comer']

export const Hobbies= () => (
    <>
        <p>Meus Hobbies são:</p>
        <ul className="list-disc pl-8">
            {hobbies.map((hobby, i) => (
                <li key={`hobby-${i}`}>{hobby}</li>
            ))}
        </ul>
    </>
)