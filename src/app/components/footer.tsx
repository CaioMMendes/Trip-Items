"use client";
import { useProductsContext } from "../contexts/productContext";

const Footer = () => {
  const { products, isLoading, setProducts } = useProductsContext();
  const productsChecked = products.reduce((acc, curr) => {
    return acc + (curr.checked ? 0 : 1);
  }, 0);

  return (
    <footer className="flex p-3 items-center justify-center  bg-paynes-gray border-t border-columbia-blue-white">
      {products.length === 0 ? (
        <p>Comece adicionando algum produto a lista.</p>
      ) : (
        <div className="flex flex-col justify-center items-center">
          <p>
            Você possuí <span className="font-medium">{products.length}</span>{" "}
            produtos listados.
          </p>
          {productsChecked >= 1 ? (
            <p>
              Ainda falta marcar{" "}
              <span className="font-medium">{productsChecked}</span>{" "}
              {productsChecked > 1 ? "produtos" : "produto"}.{" "}
            </p>
          ) : (
            <p>Todos os produtos foram marcados.</p>
          )}
        </div>
      )}
      {/* <Link href={"/infos"}>Infos</Link> */}
    </footer>
  );
};

export default Footer;
