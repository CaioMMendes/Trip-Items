import { Trash2Icon } from "lucide-react";
import { ProductType } from "../page";
import Button from "./button";

interface ProductItemProps {
  products: ProductType[] | [];
  setProducts: (products: ProductType[]) => void;
}

const ProductItem = ({ products, setProducts }: ProductItemProps) => {
  const handleCheckboxChange = ({
    // e,
    id,
  }: {
    // e: ChangeEvent<HTMLInputElement>;
    id: string;
  }) => {
    const mapedProducts = products.map((product) => {
      if (id === product.id) {
        product.checked = !product.checked;
      }
      return product;
    });
    setProducts(mapedProducts);
    localStorage.setItem("products", JSON.stringify(mapedProducts));
  };

  const handleButtonDeleteClick = (id: string) => {
    const filteredProducts = products.filter((item) => item.id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
  };

  return (
    <>
      {products.map((product) => {
        return (
          <li
            key={product.id}
            className="flex gap-3 justify-between flex-1 border-b border-columbia-blue-white/50 p-1.5"
          >
            <label className="gap-2 flex items-center justify-start w-fit max-w-[16rem] md:max-w-screen-md lg:max-w-screen-lg ">
              <input
                type="checkbox"
                checked={product.checked}
                className="accent-paynes-gray/100 w-[1.15rem] h-[1.15rem] bg-columbia-blue-white  "
                onChange={() => handleCheckboxChange({ id: product.id })}
              />

              <span className={`${product.checked && "line-through"} text-lg`}>
                {product.quantity}
              </span>
              <span
                className={`${
                  product.checked && "line-through"
                } text-lg text-ellipsis overflow-auto overflow-x-hidden`}
              >
                {product.product}
              </span>
            </label>
            <div className="flex pr-5" title="Deletar">
              <Button onClick={() => handleButtonDeleteClick(product.id)}>
                <Trash2Icon width={20} height={20} />
              </Button>
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ProductItem;
