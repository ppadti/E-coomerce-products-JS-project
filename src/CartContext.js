import { createContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (elements) => {
    setItems((prevState) => [...prevState, elements]);
  };
  const removeFromCart = (id) => {
    console.log(id);
    setItems(items.filter((item) => item.id !== id));

    // console.log(items);
    // setItems(items);
  };

  // var res = items.reduce((acc, item) => acc + item, 0);

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
