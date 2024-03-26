import React from "react";


import logo1 from '../app/logo1.jpg'


import {BiMenu, BiLogoFacebook, } from 'react-icons/bi'


const Donate = () => {
    return(
        <div className="-mt-[2rem]">
             <div className='bg-green-950 -mt-[2rem] p-5 w-[44.3rem] -mx-[2rem] 
     text-white o md:w-[113.2rem] md:-ml-[19rem] md:text-2xl'>
       <span className='-ml-8 border-b-2'>Join the fast 2024!</span> 
       <span className='ml-3'>JOIN HERE </span>
     </div>

     <div className='flex bg-gray-300 flex-col-2 p-5 w-[44.3rem]
      -mx-[2rem] md:w-[113.2rem] md:-ml-[19rem]'> 
        
         <img src={logo1} alt=""
         className='h-[4.9rem] rounded-md' />
      
       <div className='ml-[29rem] mt-5 text-4xl md:ml-[98rem]'>
       <BiMenu />
       </div>
     </div>    

     <div className="bg-gray-200 pt-3 w-[44.3rem] -mx-[2rem] pb-[5rem]
        md:w-[113.2rem] md:-ml-[19rem]">

<div className="mt-[2.5rem] text-[3rem] font-black flex ml-[2rem]
     md:ml-[4rem]">
        Donate
     </div>
     <div className=' border-b-2 border-gray-300 ml-[1rem] mt-4
       md:ml-[3rem] w-[42rem]
      md:w-[107rem] '></div>

<div className=" rotate-90 border fixed w-[5rem] bg-stone-500
        ml-[40.8rem] text-white font-bold rounded-lg h-[2.5rem] mt-[4rem]
         md:ml-[107.5rem] md:w-[8rem] md:h-[3rem] md:text-2xl">
          <p className=" rotate-180 mt-2">Donate</p>  
        </div>

        <p className=' text-2xl mt-[1rem] mb-[3rem] text-start px-[4rem] 
          md:ml-[3rem] md:text-start md:justify-items-center md:flex-nowrap
          md:px-[2rem] md:pr-[15rem]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore animi ullam eos cupiditate fugiat aspernatur
         quos est, exercitationem vitae odio, laudantium repudiandae 
         saepe voluptatem quae commodi odit explicabo qui ut a. Impedit
        </p>

          <div className="border w-[40rem] shadow bg-white ml-[2rem]">
           <div>
            Already have a user account? Login
           </div>

          </div>



       </div>


        </div>
    )
}
export default Donate