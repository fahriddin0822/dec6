import React, { useEffect } from "react";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";

const Wishes = () => {
  const { wishlist } = useStateValue();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[70vh]">
      <h2>Wishlist</h2>
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div>
          <p>Siz yoqtirgan product lar shu yerda chiqadi</p>
        </div>
      )}
    </div>
  );
};

export default Wishes;
