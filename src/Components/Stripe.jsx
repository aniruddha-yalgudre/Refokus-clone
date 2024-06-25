import React from 'react'

function Stripe({val}) {

  return (
    
      
      <div className=' w-72 px-4  py-6  flex items-center  justify-between border-stone-500 border-b-2 border-r-2 border-t-2  '>

        <img src={val.url} alt="" srcset="" />
        <h3> {val.number}</h3>                 


      </div>
  )
}

export default Stripe