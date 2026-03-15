import {MeuNome} from "@/components/MeuNome";
import {Hobbies} from "@/components/Hobbies";
import {Imagem} from "@/components/Imagem";

const Page = () => {
  return <div className="p-7">
    <MeuNome name={"Danilo"} birthdate={new Date(2000, 0, 1)}/>
    <Hobbies />
    Gosto de:
    <Imagem />
  </div>
}

export default Page;