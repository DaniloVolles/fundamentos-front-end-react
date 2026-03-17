import Link from "next/link";

const Page = () => (
    <div>
        <Link className="underline" href="nivel-0/danilo">
            Página do Danilo
        </Link>
        <br/>
        <Link className="underline" href="nivel-1">
            Página nível 1
        </Link>
    </div>
)

export default Page;