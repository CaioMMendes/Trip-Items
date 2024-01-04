"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Product {
  product: string;
  quantity: string;
  checked: boolean;
  id: string;
}

interface ProductsContextProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  isLoading: boolean;
}

const ProductsContext = createContext<ProductsContextProps | undefined>(
  undefined
);

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storageProducts = localStorage.getItem("products");
    if (storageProducts) {
      setProducts(JSON.parse(storageProducts));
    }
    setIsLoading(false);
  }, []);

  const contextValue: ProductsContextProps = {
    products,
    setProducts,
    isLoading,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = (): ProductsContextProps => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error(
      "useProductsContext must be used within a ProductsProvider"
    );
  }
  return context;
};
