import React from "react";
import footerlogo from "../../assets/footerlogo.svg";
const Footer = () => {
  return (
    <div className="h-max-[400px] bg-black mt-[100px] absolute w-[1330px]">
      <div className="line bg-white h-[2px] mt-[100px] w-[90%] mx-auto relative"></div>

      <div className="flex justify-between">
        <div className="left w-[300px] m-12 mb-12">
          <img src={footerlogo} alt="" />
          <p className="text-white">
            Your natural candle made for your home and for your wellness.
          </p>
        </div>
        <div className="left w-[300px] m-12 mb-12">
          <p className="text-[#56B280]">Discovery</p>
          <p className="text-white">New season</p>
          <p className="text-white">New season</p>
          <p className="text-white">New season</p>
        </div>
        <div className="left w-[300px] m-12 mb-12">
          <p className="text-[#56B280]">Discovery</p>
          <p className="text-white">New season</p>
          <p className="text-white">New season</p>
          <p className="text-white">New season</p>
        </div>
        <div className="left w-[300px] m-12 mb-12">
          <p className="text-[#56B280]">Discovery</p>
          <p className="text-white">New season</p>
          <p className="text-white">New season</p>
          <p className="text-white">New season</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
