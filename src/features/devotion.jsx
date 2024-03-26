import React from "react";

import dev from '../app/dev.jpg'

import logo1 from '../app/logo1.jpg'

import vote1 from '../app/vote1.jpg'
import vote2 from '../app/vote2.jpg'
import vote3 from '../app/vote3.jpg'
import vote4 from '../app/vote4.jpg'
import vote5 from '../app/vote5.jpg'

import Bottom from "../components/buttom";


import {BiMenu, BiLogoFacebook, } from 'react-icons/bi'
import {FaPinterestP,} from 'react-icons/fa'
import {FaXTwitter} from 'react-icons/fa6'


const Devote = () => {
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
        Today's Daily Devotion
     </div>
     <div className=' border-b-2 border-gray-300 ml-[1rem] mt-4
       md:ml-[3rem] w-[42rem]
      md:w-[107rem] '></div>

<div className=" rotate-90 border fixed w-[5rem] bg-stone-500
        ml-[40.8rem] text-white font-bold rounded-lg h-[2.5rem] mt-[4rem]
        md:ml-[107.5rem] md:w-[8rem] md:h-[3rem] md:text-2xl">
          <p className=" rotate-180 mt-2">Donate</p>  
        </div>
   
          <img src={dev} alt="img" className="w-[25rem] h-[16rem] mt-[3rem]
         ml-[9rem] rounded-lg md:w-[55rem] md:h-[30rem] 
         cursor-pointer md:ml-[33rem]" />    
           
           <div className="mt-[3rem] flex ml-[4rem] ">
               <p className="font-semibold text-3xl
                md:ml-[3.8rem] md:font-bold">
            Picking Up Dropped Dreams
               </p>
             </div>
               
        <p className=' text-2xl mt-[3rem] mb-[3rem] text-start px-[4rem] 
          md:ml-[3rem] md:text-start md:justify-items-center md:flex-nowrap'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore animi ullam eos cupiditate fugiat aspernatur
         quos est, exercitationem vitae odio, laudantium repudiandae 
         saepe voluptatem quae commodi odit explicabo qui ut a. Impedit 
         atque reiciendis cupiditate id ex labore eveniet itaque! 
         Iure nostrum beatae facilis quis voluptas, ducimus tempora,
          quo nobis perferendis modi sapiente, fuga vero ullam. Vel 
          illum eius atque molestiae quam enim vitae quasi mollitia 
          voluptatibus hic aspernatur perferendis, et ipsam, neque repellat 
          doloribus officiis? Accusamus, distinctio. Architecto amet, 
          incidunt, quia quisquam delectus eos aliquam, iure placeat 
          consectetur expeditaaut repellat recusandae molestias veritatis
           nam illum a sequi nesciunt!
               </p>
               <div className="text-green-700 flex -mt-[2.5rem] ml-[0.5rem]
            md:-mt-[1.5rem] md:text-2xl md:ml-[3rem]">
           <div className="ml-[3.7rem] font-bold underline">
           Read More
            </div>  <span className="ml-[0.1rem] text-xl font-semibold
            -mt-[0.1rem] md:text-2xl rotate-90 md:mt-[0.3rem]">^</span> 
           </div>

    <div className='flex flex-col-3 mt-[1.6rem] ml-[4rem] md:ml-[7rem] pb-3'>
     <div className='border bg-black w-[3rem] pt-2 pb-2 rounded-full
     flex flex-col-2 md:text-3xl md:w-[5rem] '>
      <FaXTwitter className='text-white text-[1.8rem] ml-2 md:text-4xl 
       md:ml-5 md:mt-1' /> 
      {/* <div className='text-white ml-2'> Tweet</div> */}
     </div>
     <div className='border bg-black w-[3rem] pt-2 pb-2 rounded-full
     flex flex-col-2 ml-4 md:w-[5rem] md:text-3xl'>
      <BiLogoFacebook className='text-white text-3xl ml-2
      md:text-4xl  md:ml-5 items-center' /> 
      {/* <div className='text-white ml-1'>Like</div> */}
     </div>
     <div className='border bg-black w-[3rem] pt-2 pb-2 rounded-full
     flex flex-col-2 ml-4 md:w-[5rem] md:text-3xl'>
      <FaPinterestP className='text-white text-3xl ml-2
      md:text-4xl md:mt-1 md:ml-5' /> 
      {/* <div className='text-white ml-2'> Pin it</div> */}
     </div>
     </div>

     <div className='flex mt-[3rem] ml-[2rem] text-5xl font-black 
     md:ml-[6rem]'>
      Load More
     </div>
      <div className=' border-b-2 ml-[1rem] border-gray-300 mt-[3rem] 
     w-[42rem]  md:ml-[3rem] md:w-[107rem]'></div>

<input type="search"
        className='p-4 w-[37rem] text-2xl outline-none -ml-[2rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[87rem] md:-ml-[3rem]'
        placeholder='Search by title or keyword.'  /> 


       <div className=" md:flex md:flex-col-2">

      <div className=' w-[35rem]  md:w-[40rem] md:h-[40rem] 
             md:ml-[14rem] mt-[3rem] ml-[3.5rem]'>
            <img src={vote1} alt="img" 
           className='rounded-lg w-[35rem] h-[23rem] md:w-[40rem] 
           md:h-[25rem] cursor-pointer' />
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>God Belives in you</div>
                <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;29,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>

            <div className=' w-[35rem]  md:w-[40rem] md:h-[40rem] 
             md:ml-[7rem] mt-[3rem] ml-[3.5rem]'>
            <img src={vote2} alt="img" 
           className='rounded-lg w-[40rem] h-[23rem] md:w-[40rem] 
           md:h-[25rem] cursor-pointer' />
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>Gods Dream</div>
                <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;28,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>
            </div>

         <div  className=" md:flex md:flex-col-2 md:-mt-[4rem]">

            <div className=' w-[35rem]  md:w-[40rem] md:h-[40rem] 
             md:ml-[14rem] mt-[3rem] ml-[3.5rem]'>
            <img src={vote3} alt="img" 
           className='rounded-lg w-[40rem] h-[23rem] md:w-[40rem] 
           md:h-[25rem] cursor-pointer' />
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>When Nightmare Comes</div>
                <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;39,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>

            <div className=' w-[35rem]  md:w-[40rem] md:h-[40rem] 
             md:ml-[7rem] mt-[3rem] ml-[3.5rem]'>
            <img src={vote4} alt="img" 
           className='rounded-lg w-[40rem] h-[23rem] md:w-[40rem] 
           md:h-[25rem] cursor-pointer' />
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>Who's Leading You?</div>
                <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;27,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>

            </div>

            <div className=' w-[35rem]  md:w-[40rem] md:h-[40rem] 
             md:ml-[15rem] mt-[3rem] ml-[3.5rem]'>
            <img src={vote5} alt="img" 
           className='rounded-lg w-[40rem] h-[23rem] md:w-[40rem] 
           md:h-[30rem] cursor-pointer' />
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>How God Uses Fire</div>
                <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;25,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>

            <div className='border bg-green-950 mt-[4rem] w-[rem]
        p-3 text-white rounded-full mx-[15rem] md:font-bold
         md:ml-[51rem] md:w-[15rem] md:text-3xl md:mt-[10rem] font-bold
         text-2xl '>
        
            Load More
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
export default Devote