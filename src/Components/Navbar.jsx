import React from 'react'
import Button from './Button'

function Navbar() {
  return (
    
    <div className=' max-w-screen-xl mx-auto  flex items-center justify-between py-6  px-6 border-b-2 border-zinc-600 '>

       <div className='navl flex items-center'>
             
       <img src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" srcset="" />

              <div className='links text-sm   ml-32 flex items-center  gap-10  '>

              { ["Home","Work","Carrier","","News",].map((elem,index)=>(
                
                <a key={index} className='flex items-center' href="#">
                  
                {elem.length===0 && ( <span className=' inline-block w-[2px] h-5 bg-zinc-700  '> </span> )}  
                      
                {index==1 ? ( <span style={{boxShadow:"0 0 0.25em #00FF19"}} className=' inline-block w-[4px] h-[4px] rounded-full bg-[#00FF19] mr-1 '> </span> ):null}  

                  
                  {elem}</a> 


                ))
              }    

              </div>  
       </div>

        <Button title={"Get Started"} /> 

    </div>
  )
}

export default Navbar