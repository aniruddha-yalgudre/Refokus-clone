import React from 'react'
import { BsArrow90DegRight } from "react-icons/bs";


function Button({title="get started"}) {
  return (
    <div className='w-fit px-5 py-1 bg-white text-black rounded-full flex items-center gap-5 flex-wrap'>
    
         {title}
        <BsArrow90DegRight size={"0.9rem"}/>
        
    </div>
  )
}

export default Button