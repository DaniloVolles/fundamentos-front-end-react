import {MeuNome} from "@/components/MeuNome";

const Page = () => {
  return <div>
    <MeuNome name={"Danilo"} birthdate={new Date(2000, 0, 1)}/>
  </div>
}

export default Page;