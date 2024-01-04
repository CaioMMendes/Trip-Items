"use client";
import Form from "./components/form";
import ProductItem from "./components/product-item";
import Spinner from "./components/spinner";
import { useProductsContext } from "./contexts/productContext";

export interface ProductType {
  product: string;
  quantity: string;
  checked: boolean;
  id: string;
}

export default function Home() {
  const { products, isLoading, setProducts } = useProductsContext();

  return (
    <div className="flex flex-col gap-3 p-3 md:max-w-screen-md md:w-full ">
      <h3 className="text-base flex w-full md:text-lg">
        O que você precisa para sua viagem?
      </h3>
      <Form products={products} setProducts={setProducts} />
      {isLoading && <Spinner />}
      {isLoading === false && products.length === 0 && (
        <div className="flex items-center justify-center text-lg">
          Você ainda não adicionou nenhum produto.
        </div>
      )}
      <ul className="flex flex-col  w-full md:justify-center ">
        <ProductItem products={products} setProducts={setProducts} />
      </ul>
    </div>
  );
}
