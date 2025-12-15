import { useEffect, useState } from "react";
import CarList from "./cart-list";

function Cart() {
  const saved = localStorage.getItem("cart");
  const [products, setProducts] = useState(saved ? JSON.parse(saved) : []);

  const selectedProduct = (e) => {
    const product = e.detail;

    setProducts((state) => {
      const found = state.find((item) => item.id === product.id);

      if (found) {
        return state.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, { ...product, quantity: 1 }];
    });
  };

  useEffect(() => {
    window.addEventListener("add-to-cart", selectedProduct);
    return () => window.removeEventListener("add-to-cart", selectedProduct);
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem("cart", JSON.stringify(products));
    } else {
      localStorage.removeItem("cart");
    }
  }, [products]);

  const removeItem = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      })
    );
  };
  const removeQuantity = (id) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          if (product.quantity === 1) {
            return product;
          }
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      })
    );
  };

  return (
    <>
      <CarList
        products={products}
        onRemove={removeItem}
        onAddQuantity={addQuantity}
        onRemoveQuantity={removeQuantity}
      />
    </>
  );
}

export default Cart;
