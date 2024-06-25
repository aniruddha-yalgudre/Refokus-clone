import React from 'react'
import Button from './Button'


function Product({product,mover,count}) {
  return (
    
    <div className='w-full h-[20rem] px-4 py-20  border-zinc-700 border-b-[1px]'>

      
      <div onMouseEnter={()=>{mover(count)}} className='max-w-screen-xl mx-auto  flex items-center  justify-between  overflow-hidden'>
           
           <div>
            <h1 className='text-5xl font-semibold '>{product.title}</h1>
           </div>

            <div className='w-1/3 flex flex-col  gap-5 '>
                <p>{product.description}</p>  
                
                <div className='flex gap-7'>

                  {product.islive && <Button title='Live Website'/>}
                  {product.iscase && <Button title='Case Study'/>}
                  
                </div>

            </div>  
            

      </div>
       

    </div>
  )
}

export default Product