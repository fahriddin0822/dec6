import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { LINKS } from "../../static";
import logo1 from "../../assets/logo.svg";
import { IoPersonOutline  } from "react-icons/io5";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header id="header" className="shadow-sm sticky top-0 z-50">
      <nav
        className={`flex gap-4 p-4 items-center justify-between ${
          pathname === "/about" ? "bg-white" : "bg-white"
        }`}
      >
        <img src={logo1} alt="" />
        <div className="middle flex gap-12">
          {LINKS?.map((link) => (
            <NavLink
              key={link.id}
              className="text-slate-800 flex items-center gap-1"
              to={link.path}
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
        <div className="right flex items-center">
          <NavLink
            key={"login"}
            className="text-slate-800 flex items-center gap-1 h-8"
            to="/login"
          >
            <div className="h-[24px] w-[24px] flex justify-center items-center mx-4"><IoPersonOutline className="w-full h-full" /></div>
          </NavLink>

          <NavLink
            className="text-slate-800 flex items-center gap-1"
            to="/wishes"
          >
            <div className="h-[24px] w-[24px] flex justify-center items-center mx-4"><FaRegHeart className="w-full h-full" /></div>
          </NavLink>

          <NavLink
            className="text-slate-800 flex items-center gap-1"
            to="/carts"
          >
            <div className="h-[24px] w-[24px] flex justify-center items-center mx-4"><HiOutlineShoppingCart className="w-full h-full" /></div>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
