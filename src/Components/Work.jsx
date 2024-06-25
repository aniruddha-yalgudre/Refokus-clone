import React, { useState } from 'react'
import { motion } from "framer-motion"
import { useScroll,useMotionValueEvent } from 'framer-motion'



function Work() {

const [images, setimages] = useState([
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",top:"48%",left:"50%",isactive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",top:"55%",left:"47%",isactive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",top:"40%",left:"53%",isactive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",top:"60%",left:"50%",isactive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"46%",left:"55%",isactive:false},
  {url:"https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"42%",left:"48%",isactive:false},
])

const { scrollYProgress } = useScroll();

scrollYProgress.on("change", (latest) => {

 const scrollval = Math.floor(latest*100)

function ImagesShow(arr){

console.log(arr);

setimages(prev=>(

 prev.map((item ,index)=>

 arr.indexOf(index)==-1 ? (
  {...item,isactive:false }): {...item,isactive:true} )

))
}




 switch (scrollval) {
  case 0:
    ImagesShow([0])
    
    break;
  case 1:
    ImagesShow([0,1])

    break;
 
  case 2:
    ImagesShow([0,1,2])

    break;
 
  case 3:
    ImagesShow([0,1,2,3])

    break;
 
 
  case 5:
    ImagesShow([0,1,2,3,4])

    break;
 
  case 6:
    ImagesShow([0,1,2,3,4,5])

    break;
 
  
    default:
  
     break;
 }

})







  return (
    
    <div className='relative  max-w-screen-xl mx-auto ' >
      
          <div className='w-full select-none text-center'>
              
              <h1 className='text-[30vw] text-center font-semibold'> Work</h1>

              <div className=' absolute w-full h-full top-0 left'>

              {images.map((elem,index)=> elem.isactive &&(<img key={index} className=' absolute w-60 h-72 rounded-lg  -translate-x-[50%] -translate-y-[50%] ' style={{top:elem.top,left:elem.left}} src={elem.url}  alt="" /> ))}

              </div>

          </div>
          
      </div>
  )
}

export default Work