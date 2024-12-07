import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import Discovery from "../pages/about/Discovery";
import Help from "../pages/help/Help";
import NotFound from "../pages/not-found/NotFound";
import Login from "../pages/login/Login";
import Wishes from "../pages/wishes/Wishes";
import Carts from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";

const Router = ({data}) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home data={data}/>} />
        <Route path="/about" element={<Discovery />} />
        <Route path="/yordam" element={<Help />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
