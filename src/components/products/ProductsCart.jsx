import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { useStateValue } from "../../context";
import { useCartContext } from "../../context/carts";
import { MdDeleteOutline } from "react-icons/md";
import Promocode from "../promocode/Promocode";
import Checkout from "../../pages/checkout/Checkout";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const { setWishlist, wishlist } = useStateValue();
  const { setCartlist, cartlist } = useCartContext();
  const navigate = useNavigate();
  const [promoStatus, setPromoStatus] = useState({
    msg: "",
    error: false,
    success: false,
  });

  const handleIncrement = (product) => {
    setCartlist((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      )
    );
  };

  const handleDecrement = (product) => {
    setCartlist((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, amount: item.amount > 0 ? item.amount - 1 : item.amount }
          : item
      )
    );
  };

  const handleLike = (product) => {
    const existsInWishlist = wishlist.some((item) => item.id === product.id);
    setWishlist((prev) =>
      existsInWishlist
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, { ...product, amount: 1 }]
    );
  };

  const handleCart = (product) => {
    const existsInCart = cartlist.some((item) => item.id === product.id);
    setCartlist((prev) =>
      existsInCart
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const handleDelete = (product) => {
    setCartlist((prev) => prev.filter(({ id }) => id !== product.id));
  };

  const handleTotalSum = (products) => {
    return products.reduce(
      (sum, product) => sum + product.price * product.amount,
      0
    );
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  const productItems = data?.map((product) => (
    <div key={product.id} className="shadow-lg p-3 w-full flex">
      <div className="image w-[40%] h-64 relative">
        <img className="h-full object-contain" src={product.thumbnail} alt="" />
      </div>

      <div className="info relative">
        <div className="flex">
          <h3 className="px-4 justify-between w-full">{product.title}</h3>
        </div>

        <div className="price r-0 flex justify-end pr-[4] my-[10px] flex-col items-center gap-4">
          <h3 className="pr-4 text-[#56B280] font-[Roboto] font-bold">
            {(product.amount * product.price)?.brm()}$
          </h3>
          <div className="btn flex gap-4">
            <button
              onClick={() => handleDecrement(product)}
              disabled={product.amount <= 1}
              className="border px-4 rounded-sm bg-slate-100"
            >
              -
            </button>
            <p>{product.amount}</p>
            <button
              onClick={() => handleIncrement(product)}
              className="border px-4 rounded-sm bg-slate-100"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={() => handleLike(product)}
          className="absolute top-32 right-24 text-xl"
        >
          {wishlist.some((item) => item.id === product.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>
        <button
          onClick={() => handleCart(product)}
          className="absolute top-32 right-16 text-xl"
        >
          {cartlist.some((item) => item.id === product.id) ? (
            <HiShoppingCart />
          ) : (
            <HiOutlineShoppingCart />
          )}
        </button>
        <button
          className="absolute top-32 right-8 text-xl"
          onClick={() => handleDelete(product)}
        >
          <MdDeleteOutline />
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="text-[24px] text-[#0B254B]">Products</h2>
        <p className="text-[#5E6E89] mb-[24px]">
          Order it for you or for your beloved ones{" "}
        </p>
      </div>
      <div className="flex flex-row my-[120px]">
        <div className="container gap-3 w-[50%]">{productItems}</div>
        <div className="container gap-3 w-[40%]">
          <div className="w-full min-h-[400px] shadow-md sticky top-[100px] mt-6">
            <p>
              Total:{" "}
              {promoStatus.success
                ? handleTotalSum(data).brm() * 0.8
                : handleTotalSum(data).brm()}
            </p>
            <Promocode setPromoStatus={setPromoStatus} />

            <p>
              {promoStatus.error && (
                <p className="text-red-500 mx-4">{promoStatus.msg}</p>
              )}
            </p>
            <p>
              {promoStatus.success && (
                <p className="text-lime-600 mx-4">{promoStatus.msg}</p>
              )}
            </p>
            <button className="mx-4 my-2" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
