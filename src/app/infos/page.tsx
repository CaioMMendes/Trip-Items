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
        <Button className="w-full px-3 py-1.5 font-medium bg-paynes-gray cursor-pointer hover:bg-columbia-blue/10 transition duration-300 rounded-lg">
          Voltar a tela inicial
        </Button>
      </Link>
    </div>
  );
};

export default Infos;
