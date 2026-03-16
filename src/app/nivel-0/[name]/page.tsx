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
        <div className="p-7">

            
            <MeuNome name={name} birthdate={new Date(2000, 0, 1)}/>
            <Hobbies/>
            Gosto de:
            <Imagem/>
            <Link className="underline" href="/nivel-0">
                Voltar
            </Link>
        </div>
    );
}

export default Page;