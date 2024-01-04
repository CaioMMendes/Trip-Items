import Link from "next/link";
import Button from "../components/button";

const Infos = () => {
  return (
    <div className="flex flex-col gap-4 p-3">
      <h2 className="text-justify">
        Os dados são armazenados no localStorage do seu dispositivo, caso tente
        acessar por outro dispositivo não terá as mesmas informações.{" "}
      </h2>
      <Link href={"/"} className="w-full">
        <Button variant="botao" className="md:mt-0 w-full">
          Voltar a tela inicial
        </Button>
      </Link>
    </div>
  );
};

export default Infos;
