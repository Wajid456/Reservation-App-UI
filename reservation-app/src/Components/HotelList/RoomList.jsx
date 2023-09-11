import React, { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { roomData } from "./RoomData";
import { useNavigate } from "react-router-dom";

const RoomData = () => {
  
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);

   // Filtered Room based on price range
   const filteredRoom = roomData.filter(room => room.price >= minPrice && room.price <= maxPrice);

  // Hotel Single Page Path
  const nevigate = useNavigate();
  const singleHotel = () => {
    nevigate("/singlepage");
  };

  return (
    <div>
      {/* Price Rang Button */}

      <div className="flex flex-col items-center my-5">
      <h1 className="my-3 text-lg font-bold">Price Range:</h1>
      <div>
        <label>Min Price: </label>
        <input className="px-2 border border-black" type="number" value={minPrice} onChange={e => setMinPrice(parseInt(e.target.value))} />
      </div>
      <div>
        <label>Max Price: </label>
        <input className="px-2 my-2 border border-black" type="number" value={maxPrice} onChange={e => setMaxPrice(parseInt(e.target.value))} />
      </div>
      
    </div>
      

      {/* Room UI Design */}
      {filteredRoom.map((room, id) => {
        return (
          <div
            onClick={singleHotel}
            key={id}
            className="my-5 md:flex md:justify-center md:my-10"
          >
            <div>
              <img
                src={room.image}
                alt="Error"
                className="rounded  w-[25rem]"
              />
            </div>
            <div className="flex items-center md:gap-[15rem] border border-gray-500 bg-gray-900 text-white rounded px-5 ">
              <div>
                <button className="bg-gray-700 uppercase px-3 md:py-0.5  rounded mb-2">
                  {room.standard}
                </button>
                <h1 className="text-xl font-bold">{room.title}</h1>
                <p className="flex items-center gap-1">
                  <AiFillLike className="text-xl" />
                  {room.rating}
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-bold">${room.price}</h1>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RoomData;
