import React from "react";
import EmptyCart from "../components/shoppingcart/EmptyCart";
import stripe from "../assets/stripe.png";
import Boxer from "../assets/Boxers.png";

import Shades from "../assets/Shades.png";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 lg:p-12 gap-12 bg-[#f8f8f8]">
      <div className="lg:col-span-4 col-span-6 bg-white rounded-xl p-6">
        {/* Cart */}
        <div className="flex lg:flex-row flex-col items-center justify-between space-y-4">
          <img src={Boxer} className="h-24 w-32" />
          <div className="text-center lg:text-start">
            <p className="text-gray-400">2 in 1 Boxers Underwear for men.</p>
            <h1 className="font-extrabold text-3xl">$62</h1>
          </div>
          <div className="flex flex-row items-center gap-4 cursor-pointer">
            <div className="p-4 bg-gray-200 rounded-full">
              <FaMinus />
            </div>
            <h1>1</h1>
            <div className="p-4 bg-gray-200 rounded-full">
              <FaPlus />
            </div>
          </div>

          <div>
            <FaTrash className="text-3xl text-red-600 cursor-pointer" />
          </div>
        </div>
        <hr className="my-6" />
        {/* Cart`` */}
        <div className="flex lg:flex-row flex-col items-center justify-between space-y-4">
          <img src={Shades} className="h-24 w-32" />
          <div className="text-center lg:text-start">
            <p className="text-gray-400">2 in 1 Boxers Underwear for men.</p>
            <h1 className="font-extrabold text-3xl">$62</h1>
          </div>
          <div className="flex flex-row items-center gap-4 cursor-pointer">
            <div className="p-4 bg-gray-200 rounded-full">
              <FaMinus />
            </div>
            <h1>1</h1>
            <div className="p-4 bg-gray-200 rounded-full">
              <FaPlus />
            </div>
          </div>

          <div>
            <FaTrash className="text-3xl text-red-600 cursor-pointer" />
          </div>
        </div>
        <hr className="my-6" />
      </div>
      {/* Summary */}
      <div className="lg:col-span-2 col-span-6 bg-white rounded-xl p-6">
        <h1 className="font-serif font-extrabold text-2xl pb-4">Summary</h1>
        <div class="space-y-1">
          <div class="flex justify-between gap-4 text-gray-500">
            <span>Subtotal</span>
            <span>$129.99</span>
          </div>

          <div class="flex justify-between gap-4 text-gray-500">
            <span>Shipping</span>
            <span>$4.99</span>
          </div>
          <hr />
          <div class="flex justify-between gap-4 text-gray-800 text-2xl font-extrabold">
            <span>Total</span>
            <span>$134.99</span>
          </div>
        </div>
        <Link to="/Checkout">
          <button className="px-5 py-2.5 w-full my-12 cursor-pointer  text-white bg-red-600 hover:bg-red-800 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2  focus:ring-2">
            Check Out
          </button>
        </Link>

        <p className="flex gap-5 items-center font-extrabold">
          Powered by <img src={stripe} className="h-12 w-24" />
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
