import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { useStateValue } from "../../context";
import { useCartContext } from "../../context/carts";
import Modal from "../modal/Modal";
import ControlledCarousel from "../caroulsel/Carousel";

const Products = ({ data }) => {
  const { setWishlist, wishlist } = useStateValue();
  const { setCartlist, cartlist } = useCartContext();

  const handleLike = (product) => {
    const existsInWishlist = wishlist.some((item) => item.id === product.id);
    setWishlist((prev) =>
      existsInWishlist
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const handleCart = (product) => {
    const existsInCart = cartlist.some((item) => item.id === product.id);
    setCartlist((prev) =>
      existsInCart
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, { ...product, amount: 1 }]
    );
  };

  const productItems = data?.map((product) => (
    <div key={product.id} className="shadow-lg p-3">
      <div className="w-full h-64 relative group">
        <img
          className="w-full h-full object-contain group-hover:opacity-30 transition-opacity"
          src={product.thumbnail}
          alt="Product Thumbnail"
        />

        <button
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  bg-opacity-50 text-black font-bold py-2 px-4 rounded transition-opacity"
          onClick={() => <Modal>akfdkjf</Modal>}
        >
          See Images
        </button>

        <button
          onClick={() => handleLike(product)}
          className="absolute top-3 left-3 text-xl"
        >
          {wishlist.some((item) => item.id === product.id) ? (
            <FaHeart />
          ) : (
            <FaRegHeart />
          )}
        </button>

        <button
          onClick={() => handleCart(product)}
          className="absolute top-3 right-3 text-xl"
        >
          {cartlist.some((item) => item.id === product.id) ? (
            <HiShoppingCart />
          ) : (
            <HiOutlineShoppingCart />
          )}
        </button>
      </div>

      <div className="">
        <h3 className="px-4">{product.title}</h3>
      </div>
      <div className="price r-0 flex items-end justify-end pr-[4] my-[10px]">
        <h3 className="pr-4 text-[#56B280] font-[Roboto] font-bold">
          {product.price}$
        </h3>
      </div>
    </div>
  ));

  return (
    <div className="flex flex-col items-center my-[120px]">
      <h2 className="text-[24px] text-[#0B254B]">Products</h2>
      <p className="text-[#5E6E89] mb-[24px]">
        Order it for you or for your beloved ones{" "}
      </p>
      <div className="grid container gap-3 grid-cols-4">{productItems}</div>
    </div>
  );
};

export default Products;
