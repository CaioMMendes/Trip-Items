"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { v4 as uuidv4 } from "uuid";
import { ProductType } from "../page";
import Button from "./button";

const productSchema = z.object({
  product: z
    .string()
    .min(1, "Digite um nome válido")
    .trim()
    .max(200, "Você ultrapassou o limite de 200 caracteres"),

  quantity: z
    .string()
    .trim()
    .regex(/^[^,]*$/g, { message: "Substitua as , por ." })
    .regex(/^(?!-)[0-9]*(?:\.[0-9]+)?$/, {
      message: "Adicione um número positivo",
    })
    .regex(/^(?!-?0+(\.0+)?$)([1-9][0-9]*|0\.[0-9]+|[1-9][0-9]*\.[0-9]+)$/, {
      message: "Adicione um valor maior que 0",
    })
    .min(1, "Digite uma quantidade válida")
    .max(4, "Você ultrapassou o limite de 9999 items"),
});

interface FormProps {
  products: ProductType[] | [];
  setProducts: (products: ProductType[]) => void;
}

const Form = ({ products, setProducts }: FormProps) => {
  type ProductFormData = z.infer<typeof productSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({ resolver: zodResolver(productSchema) });

  const onsubmit = (data: ProductFormData) => {
    localStorage.setItem(
      "products",
      JSON.stringify([...products, { ...data, checked: false, id: uuidv4() }])
    );
    setProducts([...products, { ...data, checked: false, id: uuidv4() }]);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onsubmit)}
      className="flex flex-col md:flex-row mb-2 gap-4  md:gap-3 md:items-start  w-full justify-between"
    >
      <div className="flex gap-2 w-full flex-1">
        <div className="flex flex-col gap-1 w-full">
          <label className="flex flex-col gap-1">
            Produto
            <input
              type="tel"
              required
              autoFocus
              title="Digite o nome do produto"
              placeholder="Digite o nome do produto"
              className={`${
                !!errors.product && "border-red-200 focus:border-red-200"
              }  focus:ring-0 w-full focus:outline-none focus:border-columbia-blue-white  focus:shadow-none  rounded-md py-0.5 px-3 bg-paynes-gray border border-superiority-blue/70  `}
              {...register("product")}
            />
          </label>
          {!!errors.product && errors.product?.message && (
            <span className="mt-1 text-xs text-red-200 font-medium">
              {errors.product?.message}
            </span>
          )}
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col gap-1 md:w-[7rem] w-full">
          <label className="flex flex-col gap-1">
            Quantidade
            <input
              type="number"
              title="Digite a quantidade"
              placeholder="Digite a quantidade"
              required
              defaultValue={1}
              className={`${
                !!errors.quantity && "border-red-200 focus:border-red-200"
              }  focus:ring-0 w-full focus:outline-none focus:border-columbia-blue-white  focus:shadow-none  rounded-md py-0.5 px-3 bg-paynes-gray border border-superiority-blue/70  `}
              {...register("quantity")}
            />
          </label>
          {!!errors.quantity && errors.quantity?.message && (
            <span className="mt-1 text-xs text-red-200">
              {errors.quantity?.message}
            </span>
          )}
        </div>
      </div>

      <Button className="flex px-3 py-1.5 md:mt-[25px] font-medium bg-paynes-gray cursor-pointer hover:bg-columbia-blue/10 transition duration-300 rounded-lg">
        Adicionar
      </Button>
    </form>
  );
};

export default Form;
