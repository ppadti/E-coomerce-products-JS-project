import React from "react";
import classes from "../E-Commerce/Commerce.module.css";
import { Data } from "./ProductData";
import ProductList from "./ProductList";

const Products = () => {
  // const showData = (props) => {
  //   console.log(props.id);
  // };
  return (
    <>
      <div className={classes.product_wrapper}>
        {Data &&
          Data.map((data) => {
            return (
              <div key={data.id}>
                <ProductList data={data} />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Products;
