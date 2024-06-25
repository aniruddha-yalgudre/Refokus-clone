import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

function Products() {

const [products, setproducts] = useState(
 
  [
    {title:"Arqitel",description:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",islive:true,iscase:false},
    {title:"Cula",description:"We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",islive:false,iscase:false},
    {title:"TTR",description:"We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",islive:true,iscase:true},
    {title:"Maniv",description:"A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",islive:false,iscase:false},
    {title:"Yahoo!",description:"We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",islive:false,iscase:false},
    ]
    
)


const [pos, setpos] = useState(0)

const mover=(val)=>{
     
 setpos(val*20)

 
 setproducts(prev=>(

  prev.map((item ,index)=>

   val==index ? (
   {...item,iscase:true ,islive:true }): {...item,islive:true,iscase:false} )
 
 ))

}






  return (

    <div className='mt-32 relative '>

    {products.map((val,index)=>( <Product product={val} key={index} mover={mover} count={index}/> ))}
    

    <div className='absolute top-0 w-full h-full  pointer-events-none overflow-hidden '>
        
        <motion.div
        
        initial={{y:pos ,x:"-50%"}} 
        animate={{y:pos+`rem`}}
        transition={{ease:[0.76,0,0.24,1],duration:0.5}}
        
        className='window  absolute rounded-3xl w-[26rem] h-[20rem] left-[42%]  overflow-hidden'>
              
              <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76,0,0.24,1],duration:0.2}}  className='window  w-full h-full bg-sky-100'>  <video className=' absolute w-full h-full object-cover object-center ' src="https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm" muted autoPlay loop  ></video>  </motion.div>
              <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76,0,0.24,1],duration:0.2}}  className='window  w-full h-full bg-sky-200'>  <video className=' absolute w-full h-full object-cover object-center ' src="https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4" muted autoPlay loop  ></video>  </motion.div>
              <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76,0,0.24,1],duration:0.2}}  className='window  w-full h-full bg-sky-300'>  <video className=' absolute w-full h-full object-cover object-center 'src="https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm" autoPlay muted loop></video> </motion.div>
              <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76,0,0.24,1],duration:0.2}}  className='window  w-full h-full bg-sky-400'> <video className=' absolute w-full h-full object-cover object-center ' src=" https://cdn.refokus.com/website/Maniv-Compressed.mp4" autoPlay muted loop></video> </motion.div>
              <motion.div animate={{y:-pos+`rem`}}  transition={{ease:[0.76,0,0.24,1],duration:0.2}}  className='window  w-full h-full bg-sky-500'> <video className=' absolute w-full h-full object-cover object-center ' src="https://cdn.refokus.com/website/2022/videos/yahoo.webm" muted autoPlay loop  ></video>  </motion.div>
              
        </motion.div>      
  
      
    </div >


    </div>
  )
}

export default Products