import React, { memo, useRef } from "react";
import { PROMOCODES } from "../../static"; // Assuming PROMOCODES is an array of valid promo codes.

const Promocode = ({setPromoStatus}) => {
  const code = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredCode = code.current?.value.toUpperCase().trim();

    if (!enteredCode) {
      console.log("Promo code cannot be empty");
      return;
    }

    if (PROMOCODES.includes(enteredCode)) {
      setPromoStatus({msg:"Tabriklaymiz", error:false, success:true})
    } else {
      setPromoStatus({msg:"Promokod xato", error:true, success:false})
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="promo-code" className="sr-only">
        Enter Promo Code
      </label>
      <input
        type="text"
        id="promo-code"
        ref={code}
        placeholder="Enter Promo Code"
        className="border-spacing-1 border-2 rounded-sm mx-4 my-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Apply
      </button>
    </form>
  );
};

export default memo(Promocode);
