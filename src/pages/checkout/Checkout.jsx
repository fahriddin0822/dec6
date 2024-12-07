import React, { useRef } from "react";
import { useCartContext } from "../../context/carts";
import { Navigate } from "react-router-dom";

const userID = 6222544109
const BOT_TOKEN="7789079010:AAH3PMOEu3CB2UjixrwwdZrNMrZFca7urzQ"
const chatId  = -1002422290055

// https://api.telegram.org/bot7789079010:AAH3PMOEu3CB2UjixrwwdZrNMrZFca7urzQ/getUpdates
// https://api.telegram.org/bot7789079010:AAH3PMOEu3CB2UjixrwwdZrNMrZFca7urzQ/sendMessage?chat_id=[your chat_id]


const Checkout = () => {
  const { cartlist } = useCartContext();

  if(!cartlist.length){
    return <Navigate replace to={"/carts"}/>
  }

  const fname = useRef(null);
  const lname = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(fname.current.value);
    console.log(lname.current.value);
    let url = `https://api.telegram.org/bot7789079010:AAH3PMOEu3CB2UjixrwwdZrNMrZFca7urzQ/sendMessage?chat_id=${chatId}&text=${fname.current.value}-${lname.current.value}`
    let api = new XMLHttpRequest()

    api.open("GET", url, true)
    api.send("")
  };

  return (
    <div className="min-h-[80vh] w-full bg-white">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input ref={fname} type="text" className="border" />
        <input ref={lname} type="text" className="border" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Checkout;
