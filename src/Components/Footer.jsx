import React from 'react'

function Footer() {
  return (
    <div className=' mt-16 w-full'>
         <div className=' max-w-screen-xl mx-auto border-t-[1px] border-zinc-500 py-10 flex  gap-2'>
            
            <div className=' basis-1/2 ' >
               
                <h1 className='text-[10vw] font-semibold tracking-tight '>Refokus. </h1>
            
              <div className=' mt-10 text-zinc-600 flex gap-7 '> 
              {["Privacy Policy ","Cookie Policy ","Impression","Terms"].map(elem=><a key={elem} href='#'>{elem}</a> )}
              </div>
            
            
            </div>

            <div className=' basis-1/3 text-zinc-600 text-end px-5' >
                <div  >
                    <h1 className='mb-5'>Socials</h1>
                    {["instagram","twitter(X ?) ","Linkdin"].map(item=><a key={item} className='flex flex-col ' href='#'>{item}</a> )}

                </div>
            </div>
            
            <div className=' basis-1/3 text-zinc-600 text-end px-5' >
                <div >
                    <h1 className='mb-5'>Sitemap</h1>
                    {["instagram","twitter(X ?) ","Linkdin"].map(item=><a key={item} className='flex text-white  flex-col ' href='#'>{item}</a> )}

                </div>
            </div>
           
            <div className=' basis-1/2 px-2' >
               
                <div className=' flex flex-col justify-center items-end text-right' >
                    <h3>Refokus is pioneering digital agency driven by design and empowered by technology </h3>

                    <button className=' mt-8 px-3 py-1 bg-blue-700  flex items-center gap-2  '> 
                    <img className='h-8' src="https://imgs.search.brave.com/-CZK0jnb_oYGDp5FJVpqWJocgrMYX15boFSsQp2PaDY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMtZ2xvYmFsLndl/YnNpdGUtZmlsZXMu/Y29tLzYzYTAxYzhh/YTE4ZTZmMDkwY2Iw/ZTFlNi82NTIwMDVh/ZmQwY2M5MDg1OTMy/M2QwMzBfd2ViZmxv/dy1pY29uLWJsdWUl/MjAtJTIwd2hpdGUu/c3Zn.svg" height={"20px"} alt="" srcset="" />
                    <h2>Enterprise Partner</h2>
                    </button>
                </div>
           
            </div>

         </div>

    </div>
  )
}

export default Footer