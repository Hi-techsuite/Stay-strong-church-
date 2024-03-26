import React from "react";

import power3 from "../app/power3.jpg";
import strong1 from "../app/strong1.mp4";

import { BiPlay, BiDotsVerticalRounded } from "react-icons/bi";
import { HiSpeakerWave } from "react-icons/hi2";
const First = () => {
  return (
    <div className="">
      <div className="flex mt-8 mx-3 md:ml-[35rem] md:mt-[4rem] ">
        <video
          src={"https://www.facebook.com/facebook/videos/10153231379946729/"}
          controls
          className=" rounded-md w-[40rem] ml-[1rem] md:w-[60rem] md:h-[34rem] 
   cursor-pointer md:-ml-[10rem]"
        ></video>

        {/* <img src={power3} className='rounded-xl md:w-[40rem] md:h-[30rem]' /> */}
      </div>

      <div className=" mt-3">
        <div className="text-3xl font-semibold md:text-4xl">
          Throne of Grace by Pastor Tosin Akande{" "}
        </div>
        <div className="mt-2 -ml-6  md:text-xl">January 28,2024</div>
      </div>

      <div
        className="border bg-gray-300 rounded-xl w-[39rem] mt-7 ml-[2.2rem]
 mx-2 p-4 pb-5 md:ml-[36.5rem]"
      >
        <div className="-mt-1 font-bold text-sm">LISTEN NOW </div>
        <div
          className="flex flex-col-5 border bg-white rounded-full mt-3 p-4
   w-[39rem] -ml-4 "
        >
          <BiPlay className="text-gray-500 text-4xl font-bold ml-4" />
          <div className=" ml-4 mt-[0.10rem] text-xl">0:00 / 0:00</div>
          <input type="range" name="" className="w-[15rem] ml-8 " />
          <HiSpeakerWave className="ml-9 mt-[0.15rem] text-3xl text-gray-400" />
          <BiDotsVerticalRounded className="ml-12 text-3xl mt-1" />
        </div>
      </div>
    </div>
  );
};

export default First;
