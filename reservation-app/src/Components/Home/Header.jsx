import React from "react";
import { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "../Home/Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {

  // Date Modal
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const[destination,setDestination] = useState("");

  //  Room Adult Children Modal
  const [countRoom, setCountRoom] = useState(1);
  const [countAdult, setCountAdult] = useState(1);
  const [countChildren, setCountChildren] = useState(0);
  const [showCard, setShowCard] = useState(false);

  // GO or Search Button Functionality
   const nevigate = useNavigate();

   const handleSearch = () =>{ 
    nevigate("/mainlist", {state:{destination,date,countRoom,countAdult,countChildren}});
    }

  return (
    <div  className="image  py-10">
      <div className="flex items-center justify-center md:mt-[2rem] ">
        <h1 className="md:text-5xl text-xl z-30 md:text-white text-black font-bold">
          Incredible last-minute hotel deals
        </h1>
      </div>

      <div className="flex  items-center justify-center my-[3rem] mx-5">
        <h1 className="md:text-2xl md:font-bold z-30 md:text-black font-bold text-white">SAVE TIME AND MONEY BY BOOKING TONIGHT.</h1>
      </div>

     {/* Search Date and Room Section */}
      <div className="flex items-center justify-center flex-col md:flex-row  gap-3 my-[3rem] mx-5">
        <span>
          <input onChange={(e)=>{setDestination(e.target.value)}}
            type="search"
            name="search"
            id="search"
            placeholder="Enter a Destination"
            className="border-2 border-black   z-30 opacity-80   outline-none rounded md:px-[4rem] px-10 py-3 md:py-2 md:text-xl"
          />
        </span>

        <span
          onClick={() => setOpenDate(!openDate)}
          className=" bg-white text-black border-2 border-white outline-none rounded md:px-[4rem] px-[2.5rem] md:py-2 py-3 md:text-xl cursor-pointer z-30"
        >
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
            date[0].endDate,
            "dd/MM/yyyy"
          )}`}
        </span>
        {/* Date Rang */}
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={true}
            ranges={date}
            className="absolute sm:top-[22.1rem] top-[23.5rem]  max-w-xs sm:mr-[5rem] rounded z-50"
          />
        )}

        <span
          onClick={() => {
            setShowCard(!showCard);
          }}
          className="bg-white text-gray-400 md:text-xl px-10 py-2.5 rounded cursor-pointer shadow-lg z-30"
        >
 {countRoom} room, {countAdult} adult, {countChildren} children
        </span>

        <button onClick={handleSearch} className="bg-purple-800 text-white px-10 py-3 rounded z-30">
          GO
        </button>
      </div>

      {/* Room,Adult,Chlidren Card  */}
      {showCard && (
        <div className=" flex items-center justify-end md:mx-[14rem]  mx-[3rem] md:my-[-3.3rem] my-[-7rem] ">
          <div className=" bg-blue-800 text-white w-[15rem]  py-3 mx-5 my-1 rounded z-30">
            <div className="flex items-center justify-between mx-2">
              <h1 className="text-lg">Room</h1>
              <div className="flex items-center gap-3 mx-3 border-2 border-white px-5 rounded">
                <button
                  disabled={countRoom <= 1}
                  onClick={() => {
                    setCountRoom(countRoom - 1);
                  }}
                  className="text-3xl"
                >
                  -
                </button>
                <span className="">{countRoom}</span>
                <button
                  onClick={() => {
                    setCountRoom(countRoom + 1);
                  }}
                  className="text-2xl"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mx-2 my-3">
              <h1 className="text-lg">Adult</h1>
              <div className="flex items-center gap-3 mx-3  border-2 border-white px-5 rounded">
                <button
                  disabled={countAdult <= 1}
                  onClick={() => {
                    setCountAdult(countAdult - 1);
                  }}
                  className="text-3xl"
                >
                  -
                </button>
                <span className="">{countAdult}</span>
                <button
                  onClick={() => {
                    setCountAdult(countAdult + 1);
                  }}
                  className="text-2xl"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mx-2">
              <h1 className="text-lg">Children</h1>
              <div className="flex items-center gap-3 mx-3  border-2 border-white px-5 rounded">
                <button
                  disabled={countChildren <= 0}
                  onClick={() => {
                    setCountChildren(countChildren - 1);
                  }}
                  className="text-3xl"
                >
                  -
                </button>
                <span className="">{countChildren}</span>
                <button
                  onClick={() => {
                    setCountChildren(countChildren + 1);
                  }}
                  className="text-2xl"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          
        </div>
      )}
    </div>
  );
};

export default Home;
