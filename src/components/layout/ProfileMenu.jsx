import React from "react";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="absolute top-[15%] lg:right-40 right-0 lg:w-[30%] w-full bg-white shadow-lg rounded-lg p-4 z-10 space-y-2">
      <div className="flex flex-col gap-3 ">
        <Link to="/Favourites" className="hover:text-red-500">
          My Favourites
        </Link>
        <Link to="Login" className="hover:text-red-500">
          Login
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenu;
