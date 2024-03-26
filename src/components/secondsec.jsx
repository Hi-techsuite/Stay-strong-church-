import React from 'react'





import strong2 from '../app/strong2.mp4'
import stay1 from '../app/stay1.mp4'
import stay2 from '../app/stay2.mp4'
import stay3 from '../app/stay3.mp4'
import stay4 from '../app/stay4.mp4'
import stay5 from '../app/stay5.mp4'


const Second = () => {


return (
    <div className="mt-6  ">
   
        <input type="search"
        className='p-4 w-[35rem] text-2xl outline-none -ml-[4rem]
        rounded-full items-center border-2 border-gray-600
        md:w-[101rem] md:-ml-[5rem] '
        placeholder='Search by title or keyword'  /> 
        
   
            <div className=' md:flex md:flex-col-2'>        
           
         <div className=' w-[35rem] h-[10rem] md:w-[40rem] md:h-[40rem] 
             md:ml-[15rem] mt-6 ml-[3.5rem]'>
           <video src={strong2}  controls 
          className='rounded-lg w-[40rem] h-[23rem] md:w-[40rem] 
          md:h-[30rem] cursor-pointer' >    
               </video>
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>The Power Of One Moment</div>
                <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;29,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>

            <div className=' w-[35rem] h-[10rem] ml-[3.5rem] md:ml-[7rem]
            md:w-[40rem] md:h-[40rem] mt-[24rem] md:mt-[0.9rem]'>
                 <video src={stay1}  controls 
          className='rounded-lg w-[35rem] h-[23rem] md:w-[40rem]
           md:h-[31rem] cursor-pointer' >    
               </video>
                <div className='flex font-bold mt-3 ml-1 text-3xl
                 md:text-3xl  '>I Refused To Be A  Professional</div> 
                 <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;8,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>
            </div>
        

         <div className='mt-[24rem] md:mt-[13rem]'>
         <div className=' md:flex md:flex-col-2 '>
            <div className=' w-[35rem] h-[10rem] md:w-[40rem] md:h-[40rem]
              md:ml-[15rem] md:-mt-[10rem] ml-[3.5rem]'>
                <video src={stay2} controls 
          className='rounded-lg w-[35rem] h-[23rem] md:w-[40rem] md:h-[30rem]
          cursor-pointer' >    
               </video>
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>Revealing Isreal's Destiny Part 3</div>
                <br /> 
         <div className='flex font-bold mt-1 ml-1 text-xl  md:text-3xl'>
            </div>
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            December &nbsp;1,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>    

            <div className=' w-[35rem] h-[10rem] ml-[3.5rem]  md:w-[40rem] 
            md:h-[40rem] md:ml-[7rem] md:-mt-[10.4rem] mt-[24rem] '>
              <video src={stay3}  controls 
          className='rounded-lg w-[35rem] h-[23rem] 
          md:w-[40rem] md:h-[31rem] cursor-pointer' >    
               </video>
                <div className='flex font-bold mt-3 ml-1 text-3xl
                md:text-3xl '>Revealing Isreal's Destiny Part 1</div> 
               <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
            November &nbsp;24,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>
         </div>
        </div>

        <div className='mt-[24rem] md:mt-[13rem]'>
         <div className=' md:flex md:flex-col-2'>
            <div className=' w-[35rem] h-[10rem] md:w-[40rem] md:h-[30rem]
             md:ml-[15rem] md:-mt-[10rem] ml-[3.5rem]'>
               <video src={stay4}  controls 
          className='rounded-lg w-[35rem] h-[23rem] md:w-[40rem] md:h-[30rem]
          cursor-pointer' >    
               </video>
                <div className='flex font-bold mt-1 ml-1 text-3xl
                 md:text-3xl'>Revealing Isreal's Destiny Part 2</div> 
         <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
         November &nbsp;17,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>

            <div className=' w-[35rem] h-[10rem] ml-[3.5rem] md:w-[40rem]
             md:h-[30rem] md:ml-[7rem] md:-mt-[10rem] mt-[22rem]'>
                <video src={stay5}  controls 
          className='rounded-lg w-[35rem] h-[23rem] md:w-[40rem] md:h-[30rem]
          cursor-pointer' >    
               </video>
                <div className='flex font-bold mt-2 ml-1 text-3xl
                  md:text-3xl'>Signs Of The Times: Isreal In Prophecy</div> 
          <br />
         <p className='flex text-gray-500 text-2xl ml-1  md:text-3xl'>
         November &nbsp;3,&nbsp;2023</p> 
         <div className=' border-b-2 border-gray-300 mt-2'></div>

            </div>
         </div>
        </div>

        <div className='border bg-green-950 mt-[24rem] w-[rem]
        p-3 text-white rounded-full mx-[15rem] md:font-bold
         md:ml-[51rem] md:w-[15rem] md:text-3xl md:mt-[10rem] font-bold
         text-2xl '>
        
            Load More
        </div>


    </div>
)
}


export default Second