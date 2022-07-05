import React, { useState, useEffect } from "react";
import Products from "../E-Commerce/Products";
// import Header from "../Layout/Header/Header";
import BounceLoader from "react-spinners/BounceLoader";

// import CartProvider from "../../store/CartProvider";

const Commerce = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <BounceLoader color={"#36D7B7"} loading={loading} size={80} />
      ) : (
        <div>
          {/* <Header /> */}
          <Products />
        </div>
      )}
    </>
  );
};

export default Commerce;
