import React from "react";
import { Card } from "@mui/material";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import classes from "../E-Commerce/Commerce.module.css";
import { useContext } from "react";
import CartContext from "../../CartContext";

const ProductList = (props) => {
  const { addToCart } = useContext(CartContext);
  // console.log(props.data.id);
  return (
    <Card className={classes.product} key={props.data.id}>
      <div className={classes.dots}>
        <MoreHorizOutlinedIcon />
      </div>
      <div>
        <img src={props.data.img} alt="cloth" />
      </div>
      <div className={classes.content}>
        <h4>{props.data.Name}</h4>
        <p>{props.data.desc}</p>
      </div>
      <div className={classes.btn}>
        <div className={classes.like_btn}>
          <FavoriteBorderOutlinedIcon
            className={classes.like}
            sx={{ backgroundColor: "red" }}
          />
          <p>{props.data.like}</p>
        </div>
        <div className={classes.cart} onClick={() => addToCart(props.data)}>
          <div>
            <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
          </div>
          <p>$ {props.data.price}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductList;
