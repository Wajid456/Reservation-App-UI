import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";


const List = () => {

const location = useLocation();
const[destination] = useState(location.state.destination);
const[date,setDate] = useState(location.state.date);
const[countRoom,setCountRoom] = useState(location.state.countRoom);
const[countAdult,setCountAdult] = useState(location.state.countAdult);
const[countChildren,setCountChildren] = useState(location.state.countChildren);

const[openDate,setOpenDate] = useState(false);
const[showCard,setShowCard] = useState(false);

  return (
    <div>
      <div className="bg-black py-10 md:flex md:items-center   md:justify-center md:gap-3 ">
        <input
          type="search"
          name="search"
          id="search"
          placeholder={destination}
          className="border-2 border-white text-black font-bold rounded outline-none px-5 py-1 text-lg md:mx-0 mx-[3rem] md:my-0 my-3"
        />
        <button onClick={()=>setOpenDate(!openDate)}   className="text-black bg-white md:px-5 px-8 py-1 rounded border-2 border-white text-lg md:mx-0 mx-[3rem] md:my-0 my-3">
          {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
        </button>
        {/* Date Rang */}
         { openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={true}
            ranges={date}
            className="absolute md:top-[8.7rem] top-[13rem] md:right-[34rem] right-5"
          />
        ) }
        
        <button onClick={()=>setShowCard(!showCard)} className="text-black bg-white md:px-5 px-7 py-1 rounded border-2 border-white text-lg md:mx-0 mx-[3rem] md:my-0 my-3">
          {countRoom} Room, {countAdult} Adult, {countChildren} Children
        </button>
        <button className="text-white bg-pink-400 px-5 py-1 rounded border-2 border-pink-400 text-lg md:ml-0 ml-[10rem]">
          GO
        </button>
        
      </div>

     

      {/* Room,Adult,Chlidren Card  */}
      {showCard && (
        <div className=" flex items-center justify-end md:my-[-3rem] my-[-6rem] md:mr-[19rem]  mr-[3rem]">
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

export default List;
