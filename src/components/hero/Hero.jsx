import React from "react";
import bgImage from "../../assets/bg-image.png";

const Hero = ({ data }) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-[60%] h-[50%] absolute bg-warmGray-200 opacity-90 flex items-center justify-center">
          <div className="flex flex-col items-center w-[40%]">
            <p className="font-light text-[24px]">🌱</p>
            <h4 className="font-bold text-[32px]">The nature candle</h4>
            <p className="font-light">
              All handmade with natural soy wax, Candleaf is a companion for all
              your pleasure moments{" "}
            </p>
            <button className="bg-[#56B280] rounded-[4px] px-[10px] py-1 text-white mt-[12%]">Discovery our collection</button>
          </div>
        </div>
        <img src={bgImage} alt="" className="" />
      </div>
      <h2>{data}</h2>
    </div>
  );
};

export default Hero;
