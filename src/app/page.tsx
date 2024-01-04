"use client";
import { ChangeEvent, useState } from "react";
import Button from "./components/button";
import Form from "./components/form";
import ProductItem from "./components/product-item";
import Spinner from "./components/spinner";
import { Product, useProductsContext } from "./contexts/productContext";

export interface ProductType {
  product: string;
  quantity: string;
  checked: boolean;
  id: string;
}

export default function Home() {
  const { products, isLoading, setProducts } = useProductsContext();
  const [sortBy, setSortBy] = useState("check");
  let sortedProducts: Product[] | [] = [];

  if (sortBy === "input") {
    sortedProducts = products;
  }

  if (sortBy === "product") {
    sortedProducts = products
      .slice()
      .sort((a, b) => a.product.localeCompare(b.product));
  }

  if (sortBy === "check") {
    sortedProducts = products.slice().sort((a, b) => {
      if (a.checked !== b.checked) {
        return a.checked ? 1 : -1;
      } else {
        return a.product.localeCompare(b.product);
      }
    });
  }

  const handleClearList = () => {
    setProducts([]);
    localStorage.setItem("products", JSON.stringify([]));
  };

  const handleSortBySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex flex-col gap-3  md:max-w-screen-md md:w-full ">
        <h3 className="text-base flex w-full md:text-lg">
          O que você precisa para sua viagem?
        </h3>
        <Form products={products} setProducts={setProducts} />
        <div className="flex gap-5 items-center h-fit flex-col md:flex-row">
          <select
            className="px-3 py-1.5 bg-paynes-gray w-full border outline-none h-fit flex-1 md:order-1 order-2 border-superiority-blue/70 text-zinc-50  rounded-lg focus:ring-columbia-blue focus:border-coluring-columbia-blue block  accent-black  dark:focus:ring-columbia-blue dark:focus:border-coluring-columbia-blue"
            onChange={(e) => handleSortBySelect(e)}
            value={sortBy}
          >
            <option value="check" className="w-fit ">
              Ordenar por marcados
            </option>
            <option value="input">Ordenar por data da criação</option>
            <option value="product">Ordenar por nome do produto</option>
          </select>
          <Button
            variant="botao"
            className="flex-nowrap md:w-fit h-fit md:mt-0  order-1 md:order-2 w-full "
            onClick={handleClearList}
          >
            Limpar lista
          </Button>
        </div>
        {isLoading && <Spinner />}
        {isLoading === false && products.length === 0 && (
          <div className="flex items-center justify-center text-lg">
            Você ainda não adicionou nenhum produto.
          </div>
        )}
        <ul className="flex flex-col  w-full md:justify-center ">
          <ProductItem products={sortedProducts} setProducts={setProducts} />
        </ul>
      </div>
    </div>
  );
}
