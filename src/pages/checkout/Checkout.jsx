import React, { useRef } from "react";
import { useCartContext } from "../../context/carts";
import { Navigate } from "react-router-dom";

const chatId = -1002422290055;
const BOT_TOKEN = "7789079010:AAH3PMOEu3CB2UjixrwwdZrNMrZFca7urzQ";

const Checkout = () => {
  const { cartlist } = useCartContext();

  if (!cartlist.length) {
    return <Navigate replace to={"/carts"} />;
  }

  const fname = useRef(null);
  const lname = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = fname.current.value;
    const lastName = lname.current.value;

    // Construct a message with product details
    const productsDetails = cartlist
      .map(
        (product) =>
          `${product.title} (Amount: ${product.amount}, Price: ${product.price}$)`
      )
      .join("\n");

    const message = `Order Details:
Name: ${firstName} ${lastName}
Products:
${productsDetails}`;

    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
      message
    )}`;

    // Send message to Telegram
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  };

  return (
    <div className="min-h-[80vh] w-full bg-white">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input ref={fname} type="text" placeholder="First Name" className="border" />
        <input ref={lname} type="text" placeholder="Last Name" className="border" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
