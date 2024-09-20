import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { IoMdFlame } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { Link } from "react-router-dom";

const Toppicks = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const posts = [
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$42",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
    {
      Price: "$420",
      Oldprice: "$325",
      desc: "Plus Size 2022 Women Linen Pants Summer Elastic Wide Leg Pants",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",

      href: "javascript:void(0)",
      review: "4.5",
    },
  ];
  return (
    <div className="px-12 py-12">
      <h1 className="font-serif font-extrabold text-2xl pb-4">
        Our top picks just for you
      </h1>
      <ul className="grid gap-x-4 gap-y-10  sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((items, key) => (
          <div className="w-full mx-auto group sm:max-w-sm" key={key}>
            <a href={items.href} className="cursor-pointer">
              <div className="relative">
                <img
                  src={items.img}
                  loading="lazy"
                  alt={items.Price}
                  className="w-full rounded-lg"
                />
                <div className="flex flex-row items-center justify-between w-full absolute p-2 top-1 ">
                  <div className="p-2 bg-[#f52828] text-white rounded-md">
                    -10%
                  </div>
                  <div
                    className={`rounded-full p-2 cursor-pointer ${
                      isFavorite ? "bg-gray-100" : "bg-gray-100"
                    } transition-all duration-300`}
                    onClick={toggleFavorite}
                  >
                    {isFavorite ? (
                      <FaHeart className="text-2xl text-red-600 transition-all animate-pulse duration-300 transform scale-80" />
                    ) : (
                      <CiHeart className="text-2xl text-gray-500 transition-all duration-300" />
                    )}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
                  <button className="w-full px-12 py-4 flex flex-row items-center gap-4 justify-center text-white duration-300 transform translate-y-full group-hover:translate-y-0 bg-black/50 rounded-sm shadow-md focus:shadow-none ring-offset-2 ring-indigo-600 focus:ring-2">
                    <FaCartPlus /> ADD TO CART
                  </button>
                </div>
              </div>
              <Link to="/ProductDetails" className="mt-3 space-y-2">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row items-center gap-3">
                    <h3 className="text-lg text-red-600 duration-150 group-hover:text-red-400 font-semibold">
                      {items.Price}
                    </h3>
                    <span className="block text-gray-600 text-sm line-through">
                      {items.Oldprice}
                    </span>
                  </div>

                  <div className="flex flex-row items-center gap-2 rounded-full p-1.5 text-xs">
                    <MdOutlineStarPurple500 className="text-yellow-500" />{" "}
                    {items.review} <p className="text-gray-400">/ 1000+</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm duration-150 group-hover:text-gray-800">
                  {items.desc}
                </p>
                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-red-100 text-xs text-gray-500">
                    <p className="text-red-400">Sale</p> 11 days
                  </div>
                  <div className="flex flex-row items-center gap-2 rounded-full p-1.5 bg-red-100 text-xs text-gray-500">
                    <IoMdFlame className="text-yellow-500" /> Best Seller
                  </div>
                </div>
              </Link>
            </a>
          </div>
        ))}
      </ul>
      <div className="mx-auto w-full flex items-center justify-center py-8">
        <button className="px-5 py-2.5  text-white bg-red-600 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2 ring-indigo-600 focus:ring-2">
          See More
        </button>
      </div>
    </div>
  );
};

export default Toppicks;
