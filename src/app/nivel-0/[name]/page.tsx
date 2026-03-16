import {MeuNome} from "@/components/MeuNome";
import {Hobbies} from "@/components/Hobbies";
import {Imagem} from "@/components/Imagem";
import Link from "next/link";

type PageProps = {
    params: Promise<{ name: string }>
}

const Page = async ({params}: PageProps) => {

    const {name} = await params;

    return (
        <div className="p-4 grid gap-y-5">

            <MeuNome name={name} birthdate={new Date(2000, 0, 1)}/>
            <Hobbies/>
            <div>
                <p>Gosto de:</p>
                <Imagem/>
            </div>
            <Link className="underline" href="/nivel-0">
                Voltar
            </Link>
        </div>
    );
}

export default Page;