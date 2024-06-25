import { motion } from 'framer-motion';
import React from 'react'

import { BsArrowRight } from "react-icons/bs";

function Card({width,start,para,button,hover="false"}) {

  return (

    <motion.div whileHover={{backgroundColor: hover==="true" && "#7443ff"}} className={`bg-zinc-800 px-8 py-7 flex flex-col  justify-between  rounded-xl ${width} hover:pl-10 transition-all ease-linear  `} >
      
      <div>
         
         <div className='flex  mb-10 items-center justify-between'>

         <h3> upnext : news </h3>
         
         <BsArrowRight />
        
         </div>
         
          <h1 className=' text-xl'>lets get to it <br /> together . </h1>
         
      </div>

         
         <div className='down w-full  mt-32'>
         
          {start && <h1 className='  text-7xl font-semibold capitalize tracking-tight'>start a project </h1>}

         {button && <button className=' mt-5  px-4  py-1 rounded-full border-yellow-50 border-[1px]'> contact us</button> }

         { para && <p className=' mt-3 text-sm text-zinc-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> }

         </div>


    </motion.div>
  )
}

export default Card