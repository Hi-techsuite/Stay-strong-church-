import react from 'react'



const  Input = () =>{
    return(
        <div >
         
         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[60rem] md:-ml-[10rem]'
        placeholder='First Name'  />

         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[60rem] md:-ml-[10rem]'
        placeholder='Last Name'  />
        
        <div className='md:flex md:flex-col-2 md:mx-[20rem]'>
           
         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[27rem] md:-ml-[10rem]'
        placeholder='Bussiness / Church Name'  />

<input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[27rem] md:ml-[5rem]'
        placeholder='Email'  />
        </div>

         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[60rem] md:-ml-[10rem]'
        placeholder='Mobile Phone'  />

        <div className='md:flex md:flex-col-2 md:mx-[20rem]'>

         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[27rem] md:-ml-[10rem]'
        placeholder='Street Address'  />

<input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[27rem] md:ml-[5rem]'
        placeholder='City'  />
        </div>

         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[60rem] md:-ml-[10rem]'
        placeholder='Zip / Postal Code'  />

      <div className='md:flex md:flex-col-2 md:mx-[20rem]'>

         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[27rem] md:-ml-[10rem]'
        placeholder='Select Country'  />

<input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[27rem] md:ml-[5rem]'
        placeholder='Select State / Province / Region'  />
         </div>

         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[60rem] md:-ml-[10rem]'
        placeholder='Home Phone #'  />

         <input type="text"
        className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
        rounded-full items-center border-2 border-gray-600 mt-[2rem]
        md:w-[60rem] md:-ml-[10rem]'
        placeholder='Prayer'  />
   
           <textarea className='p-4 w-[32rem] text-2xl outline-none -ml-[1rem]
         items-center border-2 border-transparent mt-[2rem] h-[15rem]
        md:w-[60rem] md:-ml-[10rem]' placeholder='Your Prayer' maxLength='500'>
      </textarea>       
         <div className='text-2xl -ml-[16rem]
         md:flex md:ml-[5rem]'>
            500 Characters Remaining
            </div> 
           
            <div className=' flex flex-col-2 ml-[5.5rem] mt-[3rem] '>
     <input type="checkbox" className="h-[2rem] w-[3rem] border-transparent
             cursor-pointer  " 
            /> 
         <p className='text-2xl'>Send me text updates from staystrong</p>
            </div>


            <p className='border bg-green-950 mt-[4rem] w-[10rem]
        p-3 text-white rounded-full mx-[5.9rem] md:font-bold
         md:ml-[5rem] md:w-[15rem] md:text-3xl md:mt-[10rem] font-bold
         text-2xl '>
        
          Send
        </p>
      
        </div>
    )
}
export default Input