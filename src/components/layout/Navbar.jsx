import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { FaAngleDown, FaFacebook } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { CgBox, CgProfile } from "react-icons/cg";
import { FiUser } from "react-icons/fi";
import { GrCart } from "react-icons/gr";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";

const Navbar = () => {
  const [isPopoutVisible, setIsPopoutVisible] = useState(false);

  const [isProfileVisible, setIsProfileVisible] = useState(false);

  const togglePopout = () => {
    setIsPopoutVisible(!isPopoutVisible);
  };

  const toggleProfile = () => {
    setIsProfileVisible(!isProfileVisible);
  };

  return (
    <div>
      <div className=" lg:px-16 pt-4 px-4 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-3">
          <p>Follow Us : </p> <FaInstagram />
          <FaYoutube />
          <FaFacebook />
          <FaXTwitter />
        </div>
        <div className="flex flex-row items-center gap-2">
          <CiGlobe />
          <p>Eng</p>
          <FaAngleDown />
        </div>
      </div>
      <div className="px-4 lg:px-16 pt-4 flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className=" lg:h-[40px] h-full lg:w-[180px] w-28 " />
        </Link>

        <div className="w-[50%] items-center rounded-md p-1 bg-[#ffdcdc] lg:flex hidden">
          <input
            type="email"
            placeholder="What are you looking for?"
            className="w-full p-2 outline-none bg-[#ffdcdc] text-[#fa8686]"
          />
          <button className="p-2 rounded-md text-white bg-red-500 outline-none shadow-md focus:shadow-none sm:px-5">
            Search
          </button>
        </div>

        <div className="flex flex-row items-center lg:gap-8 gap-4 text-gray-700">
          <div
            className="flex flex-col items-center justify-center gap-2 relative"
            onClick={togglePopout}
          >
            <div className="hidden absolute bg-red-500 text-white lg:top-[-30%] top-[-80%] lg:left-9 left-3  w-6 h-6 text-center flex items-center justify-center rounded-full text-xs">
              1
            </div>
            <FaRegBell className="text-2xl" />
            <p className="text-xs lg:block hidden">Notifications</p>
          </div>
          {isPopoutVisible && <Notification />}
          <div
            className=" flex flex-col items-center justify-center gap-2"
            onClick={toggleProfile}
          >
            <CgProfile className="text-2xl" />
            <p className="text-xs lg:block hidden">Profile</p>
          </div>
          {isProfileVisible && <ProfileMenu />}
          <Link
            to="/MyOrders"
            className=" flex flex-col items-center justify-center gap-2"
          >
            <BsBagCheck className="text-2xl" />
            <p className="text-xs lg:block hidden">My orders</p>
          </Link>
          <Link
            to="/ShoppingCart"
            className=" flex flex-col items-center justify-center gap-2"
          >
            <GrCart className="text-2xl" />
            <p className="text-xs lg:block hidden">Shopping Cart</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
