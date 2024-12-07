import React, { useEffect, useState } from "react";
import { useCartContext } from "../../context/carts";
import ProductsCart from "../../components/products/ProductsCart";

const Carts = () => {
  const { cartlist } = useCartContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[70vh]">
      <h2>Cart</h2>
      {cartlist.length ? (
        <div>
          <ProductsCart data={cartlist} />
        </div>
      ) : (
        <div>
          <p>
            Your cart is currently empty. Products you add will appear here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Carts;
