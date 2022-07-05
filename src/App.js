import React, { Fragment, useState, useEffect } from "react";
import Feed from "./components/Pages/Feed";
import { Routes, Route } from "react-router-dom";
import Explore from "./components/Pages/Explore";
import Commerce from "./components/Pages/Commerce";
import BounceLoader from "react-spinners/BounceLoader";
import { css } from "@emotion/react";
import Header from "./components/Layout/Header/Header";
import { CartProvider } from "./CartContext";
// import Cart from "./components/CartModal/CartModal";
// import classes from "./App.module.css";

const override = css`
  align-items: center;
  color: black;
`;
const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <BounceLoader
          color={"#36D7B7"}
          css={override}
          loading={loading}
          size={80}
        />
      ) : (
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="explore" element={<Explore />} />
            <Route path="commerce" element={<Commerce />} />
          </Routes>
        </CartProvider>
      )}
    </Fragment>
  );
};

export default App;
