import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [cartlist, setCartlist] = useState(
    JSON.parse(localStorage.getItem("cartlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("cartlist", JSON.stringify(cartlist));
  }, [cartlist]);
  return (
    <Context.Provider value={{ cartlist, setCartlist }}>
      {children}
    </Context.Provider>
  );
};

export const useCartContext = () => useContext(Context);
