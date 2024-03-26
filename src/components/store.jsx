import React, { useState } from "react";

import logo1 from '../app/logo1.jpg'

import store1 from '../app/store1.jpg'
import store2 from '../app/store2.jpg'
import store3 from '../app/store3.jpg'
import store4 from '../app/store4.jpg'
import store5 from '../app/store5.jpg'
import store6 from '../app/store6.jpg'

import {BiMenu,BiBoltCircle } from 'react-icons/bi'
import Bottom from './buttom'

import {FaPhotoVideo } from 'react-icons/fa'


const Store = () => {

    const [click, setClick] = useState()
    
    const toogleClick =() =>{
        if(!click){
            setClick(true)
        } else{
            setClick(false)
        }
    }
    
    return(
        <div className=" -mt-[2rem]">
        
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

     <div className="bg-gray-200 pt-3 w-[44.3rem] -mx-[2rem] 
        md:w-[113.2rem] md:-ml-[19rem] pb-[5rem] md:-mb-[2.5rem]
        md:pb-[9rem]">
    
        <h1 className=" flex pt-[3rem] font-extrabold text-[4rem] ml-[2rem]
        md:text-[5rem] md:ml-[4rem]  "> 
            Store
        </h1>

        <div className=" rotate-90 border fixed w-[5rem] bg-stone-500
        ml-[40.8rem] text-white font-bold rounded-lg h-[2.5rem] mt-[4rem]
         md:ml-[107.5rem] md:w-[8rem] md:h-[3rem] md:text-2xl">
          <p className=" rotate-180 mt-2">Donate</p>  
        </div>

        <input type="search"
        className='p-4 w-[34rem] text-2xl outline-none flex ml-[2.5rem]
        rounded-full items-center border-2 border-gray-600 mt-[6rem]
        md:w-[101rem] md:ml-[4rem] '
        placeholder='Search Products'
          /> 


          <div className="font-bold text-2xl flex mt-6 ml-[3rem]
           md:text-4xl md:mt-[2rem] md:ml-[4rem] ">
            Categories
          </div>
         
          <div className=" md:ml-[1rem] ">
            <div className=" flex flex-col-2 ml-[3rem] mt-[2rem]
             ">
            <input type="checkbox" className="h-[2rem] w-[3rem] border-transparent
             cursor-pointer  " 
            /> 

             <div className="text-2xl cursor-pointer md:text-[2rem]"  
            // onClick={toogleClick}
            >
                Featured
             </div> 
                            
            </div>

            <div className=" flex flex-col-2 ml-[3rem] mt-[2rem]">
            <input type="checkbox" className="h-[2rem] w-[3rem] border-transparent
             cursor-pointer  " />
             <div className="text-2xl cursor-pointer md:text-[2rem]">
                Books
             </div>
            </div>

            <div className=" flex flex-col-2 ml-[3rem] mt-[2rem]">
            <input type="checkbox" className="h-[2rem] w-[3rem] border-transparent
             cursor-pointer  " />
             <div className="text-2xl cursor-pointer md:text-[2rem]">
                Messages
             </div>
            </div>

            <div className=" flex flex-col-2 ml-[3rem] mt-[2rem]">
            <input type="checkbox" className="h-[2rem] w-[3rem] border-transparent
             cursor-pointer  " />
             <div className="text-2xl cursor-pointer md:text-[2rem]">
                Fasting
             </div>
            </div>

            <div className=" flex flex-col-2 ml-[3rem] mt-[2rem]">
            <input type="checkbox" className="h-[2rem] w-[3rem] border-transparent
             cursor-pointer  " />
             <div className="text-2xl cursor-pointer md:text-[2rem]">
                Conferences
             </div>
            </div>

            <div className=" flex flex-col-2 ml-[3rem] mt-[2rem]">
            <input type="checkbox" className="h-[2rem] w-[3rem] border-transparent
             cursor-pointer  " />
             <div className="text-2xl cursor-pointer md:text-[2rem]">
                Espanol
             </div>
            </div>

          </div>
           
           <div className="text-green-700 flex  mt-2 
            md:mt-[1.5rem] md:text-2xl md:ml-[1.5rem]">
           <div className="ml-[3.7rem] font-bold underline">
           Clear Search
            </div>  <span className="ml-2 text-xl font-semibold
            -mt-[0.1rem] md:text-2xl">x</span> 
           </div>
         
            <div className="mt-[2rem] flex ml-[3rem]
             md:ml-[4rem] ">
               <div className="font-bold text-2xl md:text-3xl">
               Free Shipping
                 <p className=" text-xl font-medium mt-2
                 md:text-2xl">Orders over $50</p> 
                 <p className=" text-xl font-medium mt-2 flex ml-2
                 md:text-2xl">U.S. Only</p> 

               </div>
            </div>

           <div className=" flex flex-col-2 ml-[5.5rem] mt-[3rem]
           ">
              
      <div className="border w-[16rem] h-[17rem] bg-white rounded-lg
       drop-shadow-lg md:ml-[5rem] md:w-[40rem] md:h-[25rem]" >
       <img src={store1} alt="" className="h-[13rem] w-[16rem] 
                 rounded-lg md:w-[40rem] md:h-[22rem]" />

             <div className="border w-[16rem] -mt-[0.3rem] absolute
              bg-white pt-2 rounded-b-lg flex pl-3 flex-col-2 -ml-[0.1rem]
              text-green-700 md:w-[40rem] md:pb-[1rem] ">
         <p className=" font-semibold text-xl 
          md:text-2xl">
          Finishing Strong <br/> <p className="-ml-[4rem]
          md:text-2xl md:-ml-[5.3rem]">Seminar</p>
            </p>
            <FaPhotoVideo className="text-[2rem] mt-[1rem] ml-[3rem]
            md:text-[3rem] md:ml-[22rem]"/>
               </div>      
         </div>

         <div className="border w-[16rem] h-[17rem] bg-white rounded-lg
       drop-shadow-lg ml-[2rem] md:ml-[5rem] md:w-[40rem] md:h-[25rem]" >
       <img src={store2} alt="" className="h-[13rem] w-[16rem] 
                 rounded-lg  md:w-[40rem] md:h-[22rem]" />

             <div className="border w-[16rem] -mt-[0.3rem] absolute
              bg-white pt-2 rounded-b-lg flex pl-3 flex-col-2 -ml-[0.1rem]
              text-green-700 md:w-[40rem] md:pb-[1rem]">
         <p className=" font-semibold text-xl
         md:text-2xl md:ml-[1rem]">
         Riches of his <br/> <p className="-ml-[4rem]
         md:text-2xl md:-ml-[5rem]">Grace</p>
            </p>
            <FaPhotoVideo className="text-[2rem] mt-[1rem] ml-[4.8rem]
            md:text-[3rem] md:ml-[24rem]"/>
               </div>      
         </div>
           </div>

           
           <div className=" flex flex-col-2 ml-[5.5rem] mt-[2rem]
           md:mt-[7rem]">
              
      <div className="border w-[16rem] h-[17rem] bg-white rounded-lg
       drop-shadow-lg md:ml-[5rem] md:w-[40rem] md:h-[25rem]" >
       <img src={store3} alt="" className="h-[13rem] w-[16rem] 
              rounded-lg md:w-[40rem] md:h-[22rem]" />

             <div className="border w-[16rem] -mt-[0.3rem] absolute
              bg-white pt-2 rounded-b-lg flex pl-3 flex-col-2 -ml-[0.1rem]
              text-green-700 md:w-[40rem] md:pb-[1rem]">
         <p className=" font-semibold text-xl
          md:text-2xl">
          Word Feast <br/> <p className="-ml-[3rem]
          md:text-2xl md:-ml-[4.6rem]">2024</p>
            </p>
            <FaPhotoVideo className="text-[2rem] mt-[1rem] ml-[5.7rem] 
               md:text-[3rem] md:ml-[26rem]"/>
               </div>      
         </div>

         <div className="border w-[16rem] h-[17rem] bg-white rounded-lg
       drop-shadow-lg ml-[2rem] md:ml-[5rem] md:w-[40rem] md:h-[25rem]" >
       <img src={store4} alt="" className="h-[13rem] w-[16rem] 
                 rounded-lg  md:w-[40rem] md:h-[22rem]" />

             <div className="border w-[16rem] -mt-[0.3rem] absolute
              bg-white pt-2 rounded-b-lg flex pl-3 flex-col-2 -ml-[0.1rem]
              text-green-700 md:w-[40rem] md:pb-[1rem]">
         <p className=" font-semibold text-xl
         md:text-2xl md:ml-[1rem]">
          The Power <br/> <p className="-ml-[2rem]
          md:text-2xl md:-ml-[3rem]">Within</p>
            </p>
            <FaPhotoVideo className="text-[2rem] mt-[1rem] ml-[6.2rem]
            md:text-[3rem] md:ml-[25rem]"/>
               </div>      
         </div>
           </div>

           
           <div className=" flex flex-col-2 ml-[5.5rem] mt-[2rem] 
           md:mt-[7rem]">
              
      <div className="border w-[16rem] h-[17rem] bg-white rounded-lg
       drop-shadow-lg  md:ml-[5rem] md:w-[40rem] md:h-[25rem]" >
       <img src={store5} alt="" className="h-[13rem] w-[16rem] 
           rounded-lg md:w-[40rem] md:h-[22rem]" />

             <div className="border w-[16rem] -mt-[0.3rem] absolute
              bg-white pt-2 rounded-b-lg flex pl-3 flex-col-2 -ml-[0.1rem]
              text-green-700 md:w-[40rem] md:pb-[1rem]">
         <p className=" font-semibold text-xl
         md:text-2xl">
          He Fully <br/> <p className="-ml-[2rem]
          md:text-2xl md:-ml-[3rem]">Paid</p>
            </p>
            <FaPhotoVideo className="text-[2rem] mt-[1rem] ml-[7.6rem]
            md:text-[3rem] md:ml-[28rem]"/>
               </div>      
         </div>

         <div className="border w-[16rem] h-[17rem] bg-white rounded-lg
       drop-shadow-lg ml-[2rem] md:ml-[5rem] md:w-[40rem] md:h-[25rem]" >
       <img src={store6} alt="" className="h-[13rem] w-[16rem] 
                 rounded-lg md:w-[40rem] md:h-[22rem]" />

             <div className="border w-[16rem] -mt-[0.3rem] absolute
              bg-white pt-2 rounded-b-lg flex pl-3 flex-col-2 -ml-[0.1rem]
              text-green-700 md:w-[40rem] md:pb-[1rem]">
         <p className=" font-semibold text-xl 
         md:text-2xl md:ml-[1rem]">
          The Father And <br/> <p className="-ml-[2.5rem]
         md:text-2xl md:-ml-[3rem] ">His Family</p>
            </p>
            <FaPhotoVideo className="text-[2rem] mt-[1rem] ml-[3.5rem]
            md:text-[3rem] md:ml-[21.7rem]"/>
               </div>      
         </div>
           </div>

         
      </div>

         <Bottom />

        </div> 
    )
}
export default Store