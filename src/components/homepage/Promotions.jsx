import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation styles
import Shirts from "../../assets/Shirts.png";

import Hat from "../../assets/Hat.png";

import Shades from "../../assets/Shades.png";

import Flop from "../../assets/Flop.png";
import Swiper1 from "../../assets/Swiper1.png";

import Swiper2 from "../../assets/Swiper2.png";

import Swiper3 from "../../assets/Swiper3.png";
import Boxers from "../../assets/Boxers.png";

import { FreeMode, Navigation } from "swiper/modules"; // Import Navigation

export default function Promotions() {
  return (
    <div className="lg:p-16 p-4 relative">
      <h1 className="font-serif font-extrabold text-2xl pb-4">
        Weekly Promotions
      </h1>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          // Adjust Swiper settings based on viewport width
          640: {
            slidesPerView: 1, // 1 slide per view on screens 640px and below
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // 2 slides per view on screens between 641px and 768px
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // 3 slides per view on screens 769px and above
            spaceBetween: 30,
          },
        }}
        navigation={true} // Add navigation
        modules={[FreeMode, Navigation]} // Add Navigation module
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-lg relative">
            <img src={Swiper1} className="h-full w-full object-contain" />
            <div className="text-black absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extralight">
              <h1 className="text-2xl">Most Popular</h1>
              <p className="font-extralight font-serif">Sale</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg relative">
            <img src={Swiper2} className="h-full w-full object-contain" />
            <div className="text-white absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extralight">
              <h1 className="text-2xl">Shoes & Footwear</h1>
              <p className="font-extralight font-serif">Sale</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg relative">
            <img src={Swiper3} className="h-full w-full object-contain" />
            <div className="text-black absolute  z-50 text-center space-y-2 inset-0 flex flex-col items-center top-5 font-extralight">
              <h1 className="text-2xl">Trendy Accessories</h1>
              <p className="font-extralight font-serif">Sale</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-300 h-[300px] p-6 rounded-lg text-center space-y-2">
            <h1 className="text-2xl">Dope Shirts</h1>
            <p className="font-extralight font-serif">For the trendy ones</p>
            <img src={Flop} className="object-cover h-[160px] mx-auto pt-8" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-200 h-[300px] p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <img src={Hat} className="object-cover h-[200px] mx-auto pt-0" />
        </SwiperSlide>
        <SwiperSlide className="bg-cyan-200 h-[300px] p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <img src={Shades} className="object-cover h-[200px] mx-auto pt-0" />
        </SwiperSlide>
        <SwiperSlide className="bg-purple-200 h-[300px] p-6 rounded-lg text-center space-y-2">
          <h1 className="text-2xl">Dope Shirts</h1>
          <p className="font-extralight font-serif">For the trendy ones</p>
          <img src={Boxers} className="object-cover h-[200px] mx-auto pt-0" />
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons */}
    </div>
  );
}
