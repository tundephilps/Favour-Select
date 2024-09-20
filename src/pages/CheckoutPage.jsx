import React from "react";
import Boxers from "../assets/Boxers.png";

import Shades from "../assets/Shades.png";
import Card from "../assets/card.png";

const CheckoutPage = () => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-1 lg:p-12 gap-12 bg-[#f8f8f8]">
      <div className="lg:col-span-4 col-span-6 bg-white rounded-xl p-6">
        <div className="lg:col-span-4 col-span-6 bg-white rounded-xl p-6">
          <form>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="postcode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postcode
                </label>
                <input
                  type="text"
                  id="postcode"
                  className="mt-1 p-2 w-full border rounded-md"
                />
              </div>
            </div>

            <h1 className="font-serif font-extrabold text-2xl pt-4">
              Payment Method
            </h1>
            <div className="flex flex-row py-5">
              <div className="border border-gray-300 p-6 flex flex-col items-center rounded-lg">
                <img src={Card} className="w-24" />
                <p>Credit/Debit Card</p>
              </div>
              <div></div>
            </div>
            <button className="px-5 py-2.5 w-full my-12 cursor-pointer  text-white bg-red-600 hover:bg-red-800 rounded-lg shadow-md focus:shadow-none duration-100 ring-offset-2  focus:ring-2">
              Continue
            </button>
          </form>
        </div>
      </div>
      <div className="lg:col-span-2 col-span-6 bg-white rounded-xl p-6">
        <h1 className="font-serif font-extrabold text-2xl pb-4">Summary</h1>
        <hr />
        <div className="flex gap-12 py-6">
          <div>
            <img src={Boxers} className="w-20 h-20" />
          </div>
          <div>
            <p className="text-1xl font-extrabold">
              2 in 1 Boxers with Quality size
            </p>
            <p className="text-gray-400">2pc</p>
            <p className="font-extrabold text-3xl">$62</p>
          </div>
        </div>
        <div className="flex gap-12 py-6">
          <div>
            <img src={Shades} className="w-20 h-20" />
          </div>
          <div>
            <p className="text-1xl font-extrabold">
              2 in 1 Boxers with Quality size
            </p>
            <p className="text-gray-400">2pc</p>
            <p className="font-extrabold text-3xl">$62</p>
          </div>
        </div>

        <hr />
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
      </div>
    </div>
  );
};

export default CheckoutPage;
