import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import { useStateValue } from "../../context";
import Products from "../../components/products/Products";
import axios from "../../api";

const Home = ({ data: props }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/products").then((res) => setData(res?.data));
  }, []);

  return (
    <div id="home" className="bg-white min-h-[70vh]">
      <Hero data={props} />
      <Products data={data?.products} />
    </div>
  );
};

export default Home;
