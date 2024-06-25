import React from 'react'
import Card from './Card'

function Cards() {
  return (
    

     <div className=" mt-32 cards w-full">
      
         <div className='max-w-screen-xl  mx-auto py-32 flex gap-2' >
          
           <Card width={"basis-1/3"} start={false} para={true} button={false} hover="false" />
           <Card width={"basis-2/3"} start={true} para={true} button={true} hover="true"/>

        </div>


    </div>
  )
}

export default Cards