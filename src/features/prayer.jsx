import React from "react";

import logo1 from '../app/logo1.jpg'

import {BiMenu } from 'react-icons/bi'

import Input from '../features/input'
import Bottom from "../components/buttom";



const Prayer = () => {
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
     md:ml-[4rem] md:flex" >
        Prayer Requests
     </div>
     <div className=' border-b-2 border-gray-300 ml-[1rem] mt-4
       md:ml-[3rem] w-[42rem]
      md:w-[107rem] '></div>

       <div className=" md:flex md:flex-col-3">

<div className='border bg-green-950 mt-[4rem] w-[18rem]
        p-3 text-white rounded-full mx-[3rem] md:font-bold
         md:ml-[7rem] md:w-[18rem] md:text-3xl md:mt-[3rem] font-bold
         text-2xl '>
        
           Prayer Request 
        </div>

        <div className='border bg-green-950 mt-[2rem] w-[19rem]
        p-3 text-white rounded-full mx-[3rem] md:font-bold
        md:ml-[7rem] md:w-[19rem] md:text-3xl md:mt-[3rem] font-bold
        text-2xl '>
        
           Share your story
        </div>

        <div className='border bg-green-950 mt-[2rem] w-[13rem]
        p-3 text-white rounded-full mx-[3rem] md:font-bold
        md:ml-[7rem] md:w-[15rem] md:text-3xl md:mt-[3rem] font-bold
         text-2xl '>
        
           Message
        </div>
        </div>
         
          <p className="mt-[2rem] -ml-[5rem] text-xl
           md:ml-[5rem] md:text-2xl ">
            Already have an account? <a href="">Login</a>
          </p>
    
          <div className="mt-[2rem] text-[3rem] font-black  -ml-[10rem]
     md:ml-[4rem] md:hidden">
     Share Your Prayer
      <br /> 
     <div className="-ml-[13rem] -mt-3">Requests</div>  
     </div>
      
            <div className=" md:flex md:flex-col-2">

        <div className="">

     <div className="mt-[2rem] text-[3rem] font-black 
     ml-[4rem] md:flex hidden md:ml-[5rem] ">
     Share Your Prayer Requests  
     </div>
    
     <p className=' text-2xl mt-[1rem] mb-[3rem] text-start px-[4rem] 
          md:ml-[3rem] md:text-start md:justify-items-center md:flex-nowrap
          md:px-[2rem] md:pr-[15rem]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore animi ullam eos cupiditate fugiat aspernatur
         quos est, exercitationem vitae odio, laudantium repudiandae 
         saepe voluptatem quae commodi odit explicabo qui ut a. Impedit 
         atque reiciendis cupiditate id ex labore eveniet itaque! 
         Iure nostrum beatae facilis quis voluptas, ducimus tempora,
        </p>

            <Input />
        
           
  
        </div>

        <div className=" md:ml-[2rem]">
        <div className="font-bold text-3xl flex mt-6 ml-[5.5rem]
           md:text-4xl md:mt-[2rem] md:-ml-[11rem] ">
            Salvation
          </div>
   
          <p className=' text-2xl mt-[1rem] mb-[3rem] text-start px-[5.5rem] 
          md:-ml-[13rem] md:text-start md:justify-items-center md:flex-nowrap
          md:px-[2rem] '>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore animi ullam eos cupiditate fugiat aspernatur
         quos est, exercitationem vitae odio, laudantium repudiandae 
         saepe voluptatem quae commodi odit explicabo qui ut a. Impedit 
         atque reiciendis cupiditate id ex labore eveniet itaque! 
         Iure nostrum beatae facilis quis voluptas, ducimus tempora,
        </p>
            
          
        <div className='border bg-green-950 mt-[4rem] w-[13rem]
        p-3 text-white rounded-full mx-[5.9rem] md:font-bold
         md:-ml-[10.9rem] md:w-[15rem] md:text-3xl md:mt-[5rem] font-bold
         text-2xl '>
          Salvation
        </div>
     
        <div className="font-bold text-3xl flex mt-[5rem] ml-[5.5rem]
           md:text-4xl md:mt-[2rem] md:-ml-[10rem] ">
            Contact Information
          </div>
   
          <div className="font-bold text-2xl flex mt-[2rem] ml-[5.5rem]
           md:text-4xl md:mt-[2rem] md:-ml-[10rem] ">
            Mailing Address
           
          </div>
            <div className="text-sm  -ml-[30rem] mt-1 
            md:-ml-[45rem] " >
         <p className="ml-[1.3rem] md:text-2xl md:ml-[4.3rem] 
         ">P.O Box  315 </p>   <br />
         <p className="ml-[3.3rem] -mt-5 
         md:text-2xl md:ml-[8rem] ">Gainsville, 305303</p>          
       </div>

       <div className="font-bold text-2xl flex mt-[2rem] ml-[5.5rem]
           md:text-4xl md:mt-[2rem] md:-ml-[10rem] ">
            Administrative Office
           
          </div>
            <div className="text-sm  -ml-[30rem] mt-1">
         <p className="ml-[1.3rem] 
          md:text-2xl md:-ml-[11rem] ">P.O Box  315 </p>   <br />
         <p className="ml-[3.3rem] -mt-5 
          md:text-2xl md:-ml-[7.5rem]">Gainsville, 305303</p>          
       </div>

       <div className="font-bold text-2xl flex mt-[2rem] ml-[5.5rem]
           md:text-4xl md:mt-[2rem] md:-ml-[10rem] ">
           Phone
           
          </div>
            <div className="text-sm  -ml-[30rem] mt-1">
         <p className="ml-[1.8rem] md:text-2xl md:-ml-[10rem]">
            09028261145 </p>   <br />
         <p className="ml-[3.8rem] -mt-5  md:text-2xl md:-ml-[7rem]">
            7:30am - 12:30pm</p>          
       </div>

       <div className="font-bold text-2xl flex mt-[2rem] ml-[5.5rem]
           md:text-4xl md:mt-[2rem] md:-ml-[10rem] ">
              Prayer Line

          </div>
            <div className="text-sm  -ml-[30rem] mt-1">
         <p className="ml-[1.9rem] md:text-2xl md:-ml-[9.5rem]">
            09028261145  </p>   <br />
         <p className="ml-[2.3rem] -mt-1 text-xl  md:text-2xl md:-ml-[11.5rem]">
            Site Policy</p>          
       </div>
          </div>
  
          </div>


    </div>

    <div className="mt-[3rem] pb-[4rem]"> 
              <div className="text-[3.1rem] font-extrabold  ml-[1rem]">
                Stay Connected 
              </div>
              <p className="text-xl">Be the first to know </p>
             
        <input type="search"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[90rem] md:-ml-[7rem]  '
        placeholder='First name '  /> 

     <input type="search"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[90rem] md:-ml-[7rem] '
        placeholder='Last name'  /> 

     <input type="search"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[90rem] md:-ml-[7rem]'
        placeholder='Email'  /> 

      <div className='border bg-green-950 mt-[3rem] w-[10rem] ml-[4rem]
        p-3 text-white rounded-full mx-[15rem] md:font-bold
         md:ml-[30rem] md:w-[15rem] md:text-3xl md:mt-[6rem] font-bold
         text-2xl '>  
            Submit
        </div>

          </div>
  
       <Bottom />



        </div>
    )
}
export default Prayer