import React from 'react'



const Home = () => {


return (

    <div className="-mt-[2rem]">
 
 <div className='flex flex-col-2'>
      <p className='font-bold mt-5 text-xl md:text-3xl md:-ml-[15rem]
       '>
        Trademindshub
      </p>
      <div className=' -mr-[17rem] text-xl font-semibold gap-8 flex-col-6 
      hidden md:flex '>
        <div className='ml-[7rem] font-semibold'>Become a trader</div>
        <div>Discover Inputs</div>
        <div>Program overview</div>
        <div>Learning map</div>
        <div>Eligibility</div>
        <button className='p-4 bg-green-500 text-white  font-bold
      w-[13rem] items-center justify-items-center m-auto rounded-full
      text-2xl ml-[20rem] -mt-3 float-end'>
        User Area
     </button>
      </div>
      <div className=' md:hidden'>
      <p className=' ml-[27rem] mt-5 '>nill</p>
      </div>
      </div>


      <div className='bg-green-800 w-[44.3rem] mt-5 -ml-8 md:w-[112.6rem]
      md:-ml-[18.4rem]'>
           <div className='pt-[19rem] pb-[19rem] md:pt-[10rem] '>
            <div className=' border ml-[6rem] w-[33rem] pb-[5rem] md:ml-[39rem]
            md:w-[35rem] rounded-3xl bg-white md:h-[40rem]'>
           <div className='mt-7 mx-[9rem] font-bold text-2xl'>Tradesmindshubs</div>   
           <div className='font-semibold text-6xl mt-1'>Welcome!</div>
           <div className='mt-2 text-2xl font-semibold'>Use your credentials to log in your account </div>
        
           <div className='mt-[5rem] pb-3'>
        <input type="textarea"
        className='p-4 w-[30rem] text-2xl outline-none
          rounded-lg items-center border-2 border-gray-400'
        placeholder='E-mail*' />
       </div>

       <div className='mt-2 '>
        <input type="textarea"
        className='p-4 w-[30rem] text-2xl outline-none
         rounded-lg items-center border-2 border-gray-400'
        placeholder='Enter Password'/>
       </div>
       <div className='ml-[16rem] mt-3'>
        Don't have an Account?<span className='font-bold'>Sign up</span>
       </div>
  
       <button className='p-5 bg-green-500 text-white  font-bold
      w-[20rem] items-center justify-items-center m-auto rounded-full
      text-2xl mt-14'>
        Continue
     </button>
          
            </div>
           </div>
      </div>

     <div className='mt-[5rem] -ml-[27rem]'>
      <div className='font-bold text-3xl'>
        Trademindshub
      <div className='text-2xl -ml-[6rem] mt-3'>
        Contact us
      </div>
      </div>
      <div className='text-gray-500 mt-2'>
        support@Trademindshub.com
      </div>

      <div className='text-2xl -ml-[9.3rem] font-bold mt-3'>
        Legal
      </div>
      <div className='text-gray-500 mt-2 -ml-[10rem]'>
       Privacy
      </div>
      <div className='text-gray-500 mt-2'>
        support@Trademindshub.com
      </div>
     </div>
    </div>
)
}


export default Home