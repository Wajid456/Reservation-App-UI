import { AiFillLike } from "react-icons/ai";
import resort from "../asset/resort.webp";
import slider from "../asset/slider.jpeg";
import slider1 from "../asset/slider1.webp";
import slider2 from "../asset/slider2.jpg";
import slider3 from "../asset/slider3.jpg";
import slider5 from "../asset/slider5.webp";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

const HotelSinglePage = () => {
  return (
    <div>
      {/* Main Image and Title Section */}
      <div>
        <img
          src={resort}
          alt="Error"
          className="md:w-[80%] w-[100%] my-10 md:mx-[8rem] rounded "
        />
      </div>
      <div className="md:mx-[10rem] mx-3">
        <button className="bg-gray-700 uppercase px-3 rounded  text-white md:font-bold">
          Basic
        </button>
        <h1 className="md:text-3xl text-2xl font-bold ">The Blue Water Hotel and Resort</h1>
        <p className="flex items-center gap-1  ">
          <AiFillLike className="text-xl" />
          80%
        </p>
      </div>
      {/* Detail and Slider Section */}
      <div className=" md:flex items-center justify-between">
        {/* Rooms Slider  */}
        <div className="md:mx-[8rem] my-10 border-2 border-black md:px-8 md:py-5 rounded-2xl bg-black text-white">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            className="mySwiper md:w-[25rem] w-[20rem] rounded text-black"
          >
            <SwiperSlide>
              <img src={slider} alt="Error" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider1} alt="Error" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider2} alt="Error" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider3} alt="Error" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slider5} alt="Error" />
            </SwiperSlide>
          </Swiper>

          <h1 className="text-center mb-5 text-2xl font-bold">Amenities</h1>

          <div className="flex items-center md:justify-between justify-evenly">
            <span className=" font-bold">
              <p>8 Rooms.</p>
              <p>Self-Parking.</p>
              <p>Rooftop Deck.</p>
              <p>Flate-Screen TV.</p>
            </span>

            <span className=" font-bold">
              <p>Outdoor Pool.</p>
              <p>BBQ.</p>
              <p>Breakfast Available.</p>
              <p>Mini Bar.</p>
            </span>
          </div>
        </div>
        {/* Reservation Button  */}
        <div className="md:mx-[10rem] border-2 border-black md:py-5 md:px-5 md:flex items-center flex-col md:gap-5 bg-black text-white rounded">
          <div className="md:flex items-center flex-col gap-3 md:mx-0 mx-3">
          <h1 className="font-bold">Property Highlights</h1>
          <h1 className="text-lg">Perfect for 1-night stay!</h1>
          <p>Top Location: Highly rated by recent guests (8.9)</p>
          <p>Popular with solo travelers</p>
          </div>
          <button className="bg-purple-900 text-white font-bold rounded-xl md:px-[4rem] px-[2rem] md:py-2 py-1 md:my-0 my-3 md:mx-0 mx-3">Book Now | $100</button>
        </div>
      </div>
    </div>
  );
};

export default HotelSinglePage;
