import React from "react";

// import First from './components/firstsec'
import Second from "../components/secondsec";
import First from "../components/firstsec";

import logo1 from "../app/logo1.jpg";

import { BiMenu, BiBoltCircle, BiLogoFacebook } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Body = () => {
  return (
    <div className="">
      <div
        className="bg-green-950 -mt-[2rem] p-5 w-[44.3rem] -mx-[2rem] 
     text-white o md:w-[113.2rem] md:-ml-[19rem] md:text-2xl"
      >
        <span className="-ml-8 border-b-2">Join the fast 2024!</span>
        <span className="ml-3">JOIN HERE </span>
      </div>

      <div
        className="flex bg-gray-300 flex-col-2 p-5 w-[44.3rem]
      -mx-[2rem] md:w-[113.2rem] md:-ml-[19rem]"
      >
        <img src={logo1} alt="" className="h-[4.9rem] rounded-md" />

        <div className="ml-[29rem] mt-5 text-4xl md:ml-[98rem]">
          <BiMenu />
        </div>
      </div>

      <div
        className="bg-gray-200 pt-3 w-[44.3rem] -mx-[2rem] pb-7
        md:w-[113.2rem] md:-ml-[19rem]"
      >
        <div
          className="flex mt-[3rem] ml-[2rem] text-5xl font-black 
     md:ml-[3rem]"
        >
          Podcast
        </div>
        <div
          className=" border-b-2 border-gray-300 ml-[1rem] mt-2
       md:ml-[3rem] w-[42rem]
      md:w-[107rem] "
        ></div>

        <First />

        <div
          className="flex text-2xl text-wrap mt-4  px-4
     md:text-start md:mt-[4rem] md:px-[9rem]"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          reiciendis porro architecto error praesentium possimus eligendi est
          optio deserunt adipisci harum sapiente corrupti, sint quaerat,
          doloribus nobis animi cupiditate repudiandae quos eum sit vitae.
          Aliquam aliquid, natus ab, aspernatur sint quia autem laudantium culpa
          dolorum nam commodi, quibusdam porro! Minus suscipit quas cum quaerat
          numquam repudiandae, debitis alias sit nesciunt!
        </div>

        <div className="flex flex-col-3 mt-14 ml-[10rem] md:ml-[40rem]">
          <div
            className="border bg-black w-[6rem] pt-2 pb-2 rounded-full
     flex flex-col-2 md:text-3xl md:w-[10rem] "
          >
            <FaXTwitter
              className="text-white text-2xl ml-2 md:text-3xl 
       md:ml-5 md:mt-1"
            />
            <div className="text-white ml-2"> Tweet</div>
          </div>
          <div
            className="border bg-black w-[5rem] pt-2 pb-2 rounded-full
     flex flex-col-2 ml-4 md:w-[9rem] md:text-3xl"
          >
            <BiLogoFacebook
              className="text-white text-2xl ml-2
      md:text-4xl  md:ml-5"
            />
            <div className="text-white ml-1">Like</div>
          </div>
          <div
            className="border bg-black w-[6rem] pt-2 pb-2 rounded-full
     flex flex-col-2 ml-4 md:w-[10rem] md:text-3xl"
          >
            <FaPinterestP
              className="text-white text-2xl ml-2
      md:text-3xl md:mt-1 md:ml-5"
            />
            <div className="text-white ml-2"> Pin it</div>
          </div>
        </div>

        <div
          className="flex mt-[3rem] ml-[2rem] text-5xl font-black 
     md:ml-[3rem]"
        >
          Load More
        </div>
        <div
          className=" border-b-2 ml-[1rem] border-gray-300 mt-2 
     w-[42rem]  md:ml-[3rem] md:w-[107rem]"
        ></div>

        <Second />
      </div>

      <div className="mt-[3rem] pb-5">
        <div className="text-[3.1rem] font-extrabold  ml-[1rem]">
          Stay Connected
        </div>
        <p className="text-xl">Be the first to know </p>

        <input
          type="search"
          className="p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[90rem] md:-ml-[7rem]  "
          placeholder="First name "
        />

        <input
          type="search"
          className="p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[90rem] md:-ml-[7rem] "
          placeholder="Last name"
        />

        <input
          type="search"
          className="p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[90rem] md:-ml-[7rem]"
          placeholder="Email"
        />

        <div
          className="border bg-green-950 mt-[3rem] w-[10rem] ml-[4rem]
        p-3 text-white rounded-full mx-[15rem] md:font-bold
         md:ml-[30rem] md:w-[15rem] md:text-3xl md:mt-[6rem] font-bold
         text-2xl "
        >
          Submit
        </div>
      </div>

      <div className="flex">
        <div
          className="md:hidden w-[44.3rem] pb-[1.5rem]  mt- bg-stone-900
         text-white -mx-[2rem] md:w-[120rem] md:-ml-[19rem] md:px-10 
          "
        >
          <div
            className="px-7 text-2xl mt-[3rem] mb-[3rem] text-justify 
          md:ml-[3rem] md:text-start md:justify-items-center md:flex-nowrap"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            rerum, perspiciatis quaerat nulla similique in porro cum ipsam
            soluta est, dignissimos provident quibusdam expedita velit ratione
            impedit! Reprehenderit hic tempora, commodi sint iure quo
            praesentium ad ex quisquam excepturi obcaecati, magnam dolorum
            veniam aliquam illum eum vel voluptate consectetur voluptates?
            Facere natus exercitationem modi perspiciatis! Modi ipsa laborum
            magnam aspernatur alias, ullam tempora dolorem nobis, officiis
            nesciunt facilis expedita ducimus.
          </div>

          <div className="flex flex-col2">
            <div className="ml-[7rem]">
              <div className="font-bold text-3xl"> Content</div>
              <p className="mt-1 text-xl -ml-[1rem]">Messages</p>
              <p className="mt-1 text-xl -ml-[1rem]">Devotions</p>
              <p className="mt-1 text-xl -ml-[2rem]">Podcast</p>
              <p className="mt-1 text-xl -ml-[3.3rem]">Legal</p>
            </div>

            <div className="ml-[8rem]">
              <div className="font-bold text-3xl"> Contact</div>
              <p className="mt-1 text-xl -ml-[1rem]">Messages</p>
              <p className="mt-1 text-xl -ml-[1rem]">Devotions</p>
              <p className="mt-1 text-xl -ml-[2rem]">Podcast</p>
              <p className="mt-1 text-xl -ml-[3.3rem]">Legal</p>
              <p className="mt-1 text-xl -ml-[3.3rem]">Legal</p>
              <p className="mt-1 text-xl -ml-[3.3rem]">Legal</p>
            </div>
          </div>

          <div className=" mt-[10rem] ml-10">
            <img src={logo1} alt="" className="h-[4.9rem] rounded-md" />
          </div>
          <small className="flex ml-10">PO Box 315</small>
          <small className="flex ml-10">Gainesville, GA 30503</small>

          <BiBoltCircle className="mt-6 ml-[10rem] text-7xl" />

          <div className="text-2xl flex ml-[3rem] mb-5">
            Evangelical Council for <br />
            Financial Accountability
          </div>
        </div>
      </div>

      <div
        className="hidden md:grid md:w-[113.2rem]  bg-stone-900
          -ml-[19rem] mt-9 text-white pb-[2rem]"
      >
        <div className="grid grid-cols-2">
          <div className="flex flex-col2 mt-20 ">
            <div className="ml-[7rem] ">
              <div className="font-bold text-5xl"> Content</div>
              <p className="mt-1 text-3xl -ml-[1rem]">Messages</p>
              <p className="mt-1 text-3xl -ml-[1rem]">Devotions</p>
              <p className="mt-1 text-3xl -ml-[2rem]">Podcast</p>
              <p className="mt-1 text-3xl -ml-[3.3rem]">Legal</p>
            </div>

            <div className="ml-[9rem]">
              <div className="font-bold text-5xl"> Contact</div>
              <p className="mt-1 text-3xl -ml-[1rem]">Messages</p>
              <p className="mt-1 text-3xl -ml-[1rem]">Devotions</p>
              <p className="mt-1 text-3xl -ml-[2rem]">Podcast</p>
              <p className="mt-1 text-3xl -ml-[3.3rem]">Legal</p>
              <p className="mt-1 text-3xl -ml-[3.3rem]">Legal</p>
              <p className="mt-1 text-3xl -ml-[3.3rem]">Legal</p>
            </div>
          </div>
          <p
            className=" text-4xl mt-20 mb-[3rem] text-justify 
        px-[3rem] -ml-[13rem]"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
            rerum, perspiciatis quaerat nulla similique in porro cum ipsam
            soluta est, dignissimos provident quibusdam expedita velit ratione
            impedit! Reprehenderit hic tempora, commodi sint iure quo
            praesentium ad ex quisquam excepturi obcaecati, magnam dolorum
            veniam aliquam illum eum vel voluptate consectetur voluptates?
            Facere natus exercitationem modi perspiciatis! Modi ipsa laborum
            magnam aspernatur alias, ullam tempora dolorem nobis, officiis
            nesciunt facilis expedita ducimus.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className="">
            <img
              src={logo1}
              alt=""
              className="h-[4.9rem] rounded-md ml-[2.7rem]"
            />
            <small className="flex ml-10">PO Box 315</small>
            <small className="flex ml-10">Gainesville, GA 30503</small>
          </div>

          <div className="mt-[5rem] ml-[30rem]">
            <BiBoltCircle className="mt-6 ml-[10rem] text-[5rem]" />

            <div className="text-3xl flex ml-[3rem] mb-5">
              Evangelical Council for <br />
              Financial Accountability
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
