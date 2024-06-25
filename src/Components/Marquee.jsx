import { motion } from 'framer-motion'
import React from 'react'


function Marquee({imagesurl,direction}) {
  
  return (
    
    <div className=' w-full flex  leading-none overflow-hidden'>
              
        <motion.div initial={{x:direction==="left" ? "0" : "-100%"  }} 
                   animate={{x:direction==="left" ?"-100%" :"0" }} 
                   transition={{ease:'linear',duration:14, repeat:Infinity}}

                   className='flex flex-shrink-0 gap-16 py-5 pr-4'>

               {imagesurl.map((url,index)=> <img key={index} src={url} className='w-32 flex-shrink-0' ></img>)}

        </motion.div>

        <motion.div initial={{x:direction==="left" ? "0" : "-100%"  }} 
                   animate={{x:direction==="left" ?"-100%" :"0" }} 
                   transition={{ease:'linear',duration:14, repeat:Infinity}}

                   className='flex flex-shrink-0 gap-16 py-5 pr-4'>

               {imagesurl.map((url,index)=> <img key={index} src={url} className='w-32 flex-shrink-0' ></img>)}

        </motion.div>


    </div>
  )
}

export default Marquee