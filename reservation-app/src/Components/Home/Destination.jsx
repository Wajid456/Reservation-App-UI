import React from 'react'
import moscow from "../asset/moscow.jpg"
import seoul from "../asset/seoul.jpg"
import istanbul1 from "../asset/istanbul1.jpg"
import dubai from "../asset/dubai.jpg"
import bangkok from "../asset/bangkok.jpg"
import beijing1 from "../asset/beijing1.webp"


const Destination = () => {
  return (
    <div>
  
   <div className='md:my-10 my-[-2rem] flex flex-col items-center justify-center'>
   <h1 className='text-2xl font-bold mr-8'>Trending Destinations</h1>
   <p className='text-lg my-2 mx-3'>Most popular choices for travelers</p>
   </div>
   
   <div className='md:flex items-center md:justify-center   mx-3  md:gap-5 my-10'>
    <div>
    <h1 className='md:hidden block text-xl font-bold text-center mb-3'>Moscow</h1>
    <img src={moscow} alt="Error" className='w-[30rem] hover:border hover:border-black rounded-lg' />
    <h1 className='md:block hidden text-2xl font-bold md:my-[-16.5rem] mx-7 '>Moscow</h1>
    </div>
    <div>
    <h1 className='md:hidden block text-xl font-bold text-center my-3'>Seoul</h1>
    <img src={seoul} alt="Error" className='w-[30rem] hover:border hover:border-black rounded-lg' />
    <h1 className='md:block hidden text-2xl font-bold md:my-[-16.5rem] mx-5 '>Seoul</h1>
    </div>
    </div>

    <div className='md:my-[20rem] mx-8 md:flex items-center justify-center md:gap-4 my-[-2rem]'>

     <div className=''>
     <h1 className='md:hidden block text-2xl font-bold mb-3 mx-5'>Bangkok</h1> 
     <img src={bangkok} alt="Error" className='w-[20rem] hover:border hover:border-black rounded-lg' />
     <h1 className='md:block hidden text-2xl font-bold my-[-13.3rem] md:mx-7 mx-9'>Bangkok</h1> 
     </div> 

     <div className=''>
     <h1 className='md:hidden block text-2xl font-bold mb-3 mx-5'>Dubai</h1> 
     <img src={dubai} alt="Error" className='w-[20rem] hover:border hover:border-black rounded-lg' />
     <h1 className=' md:block hidden text-2xl font-bold my-[-13.3rem] md:mx-7 mx-9'>Dubai</h1> 
     </div>

     <div className='my-[-1rem]'>
     <h1 className='md:hidden block text-2xl font-bold mb-3 my-5 mx-5'>Beijing</h1> 
     <img src={beijing1} alt="Error" className='w-[20rem] hover:border hover:border-black rounded-lg' />
     <h1 className='md:block hidden text-2xl font-bold my-[-13.3rem] md:mx-7 mx-9'>Beijing</h1> 
     </div>

    </div>

   

  

    </div>
  )
}

export default Destination
