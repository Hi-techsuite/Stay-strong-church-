import React from "react";



import {BiBoltCircle } from 'react-icons/bi'
import logo1 from '../app/logo1.jpg'


const Bottom = () => {

return(  
      <div>
         <div className='flex'>    
        <div className='md:hidden w-[44.3rem] pb-[1.5rem]  mt- bg-stone-900
         text-white -mx-[2rem] md:w-[120rem] md:-ml-[19rem] md:px-10 
          '>
         <div className='px-7 text-2xl mt-[3rem] mb-[3rem] text-justify 
          md:ml-[3rem] md:text-start md:justify-items-center md:flex-nowrap'>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         Fuga, rerum, perspiciatis quaerat nulla similique in porro 
         cum ipsam soluta est, dignissimos provident quibusdam expedita
          velit ratione impedit! Reprehenderit hic tempora, commodi 
          sint iure quo praesentium ad ex quisquam excepturi obcaecati,
           magnam dolorum veniam aliquam illum eum vel voluptate
            consectetur voluptates? Facere natus exercitationem modi 
            perspiciatis! Modi ipsa laborum magnam aspernatur alias,
          ullam tempora dolorem nobis, officiis nesciunt facilis 
          expedita ducimus.
         </div>
    
          <div className='flex flex-col2'>
            <div className='ml-[7rem]'>
          <div className='font-bold text-3xl'> Content</div>
          <p className='mt-1 text-xl -ml-[1rem]'>Messages</p>
          <p className='mt-1 text-xl -ml-[1rem]'>Devotions</p>
          <p className='mt-1 text-xl -ml-[2rem]'>Podcast</p>
          <p className='mt-1 text-xl -ml-[3.3rem]'>Legal</p>
          
            </div>

            <div className='ml-[8rem]'>
          <div className='font-bold text-3xl'> Contact</div>
          <p className='mt-1 text-xl -ml-[1rem]'>Messages</p>
          <p className='mt-1 text-xl -ml-[1rem]'>Devotions</p>
          <p className='mt-1 text-xl -ml-[2rem]'>Podcast</p>
          <p className='mt-1 text-xl -ml-[3.3rem]'>Legal</p>
          <p className='mt-1 text-xl -ml-[3.3rem]'>Legal</p>
          <p className='mt-1 text-xl -ml-[3.3rem]'>Legal</p>
            </div>
          </div>

          <div className=' mt-[10rem] ml-10'>
       
        <img src={logo1} alt=""
         className='h-[4.9rem] rounded-md' />    
      
       </div>  
        <small className='flex ml-10'>PO Box 315</small>
        <small className='flex ml-10'>Gainesville, GA 30503</small>
         
         <BiBoltCircle className='mt-6 ml-[10rem] text-7xl'/>

         <div className='text-2xl flex ml-[3rem] mb-5'>Evangelical Council for <br />
         Financial Accountability</div>
          </div>
        </div>

          <div className='hidden md:grid md:w-[113.2rem]  bg-stone-900
          -ml-[19rem] mt-9 text-white pb-[2.3rem] '>
            <div className='grid grid-cols-2'>
            
            <div className='flex flex-col2 mt-20 '>
            <div className='ml-[7rem] '>
          <div className='font-bold text-5xl'> Content</div>
          <p className='mt-1 text-3xl -ml-[1rem]'>Messages</p>
          <p className='mt-1 text-3xl -ml-[1rem]'>Devotions</p>
          <p className='mt-1 text-3xl -ml-[2rem]'>Podcast</p>
          <p className='mt-1 text-3xl -ml-[3.3rem]'>Legal</p>
          
            </div>

            <div className='ml-[9rem]'>
          <div className='font-bold text-5xl'> Contact</div>
          <p className='mt-1 text-3xl -ml-[1rem]'>Messages</p>
          <p className='mt-1 text-3xl -ml-[1rem]'>Devotions</p>
          <p className='mt-1 text-3xl -ml-[2rem]'>Podcast</p>
          <p className='mt-1 text-3xl -ml-[3.3rem]'>Legal</p>
          <p className='mt-1 text-3xl -ml-[3.3rem]'>Legal</p>
          <p className='mt-1 text-3xl -ml-[3.3rem]'>Legal</p>
            </div>
          </div>
          <p  className=' text-4xl mt-20 mb-[3rem] text-justify 
        px-[3rem] -ml-[13rem]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
         Fuga, rerum, perspiciatis quaerat nulla similique in porro 
         cum ipsam soluta est, dignissimos provident quibusdam expedita
          velit ratione impedit! Reprehenderit hic tempora, commodi 
          sint iure quo praesentium ad ex quisquam excepturi obcaecati,
           magnam dolorum veniam aliquam illum eum vel voluptate
            consectetur voluptates? Facere natus exercitationem modi 
            perspiciatis! Modi ipsa laborum magnam aspernatur alias,
          ullam tempora dolorem nobis, officiis nesciunt facilis 
          expedita ducimus.
            </p>
          </div>


         <div className='grid grid-cols-2'>  
           <div className=''>
         <img src={logo1} alt=""
         className='h-[4.9rem] rounded-md ml-[2.7rem]' />  
        <small className='flex ml-10'>PO Box 315</small>
        <small className='flex ml-10'>Gainesville, GA 30503</small>
        </div>

          <div className='mt-[5rem] ml-[30rem]'>
         <BiBoltCircle className='mt-6 ml-[10rem] text-[5rem]'/>

         <div className='text-3xl flex ml-[3rem] mb-5'>Evangelical Council for <br />
         Financial Accountability</div>
           </div>
          </div>

          </div>

</div>

)
} 
export default Bottom