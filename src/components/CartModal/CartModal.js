import React from "react";
import classes from "./Cart.module.css";
import CartContext from "../../CartContext";
import { useContext } from "react";

// import { Product_Data } from "../E-Commerce/ProductList";

const CartModal = (props) => {
  const { items, removeFromCart } = useContext(CartContext);
  // console.log(items[0].id);

  var res = items
    .map((item) => item.price)
    .reduce((acc, item) => acc + item, 0);
  // console.log(res);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {items &&
        items.map((item) => {
          // console.log(item.id);
          return (
            <>
              <li key={item.id} className={classes.item_name}>
                {item.Name}
              </li>
              <li className={classes.item_price}>{item.price}</li>
              <div></div>
              <button onClick={() => removeFromCart(item.id)}>delete</button>
              <hr></hr>
            </>
          );
        })}
    </ul>
  );

  return (
    <div key={cartItems.id}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount: </span>
        <span> ${res}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default CartModal;
