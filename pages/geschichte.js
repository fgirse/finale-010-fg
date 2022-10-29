import React from 'react'
import Image from 'next/image'
import ReactDOM from 'react-dom'
import dynamic from 'next/dynamic'
import jQuery from 'jquery'


const Timeline = dynamic(
  () =>{return import('../components/MyTEST.js');
},
{ssr: false})



export default function geschichte() {
  return (
    <>
    <div>
      
      <section className=" bg-yellow-500/15 ">
        {/*<div className="w-full">
          <h1 className="mt-5 text-center text-6xl text-amber-300">History Timeline</h1>
  </div>*/}
<div className='w-full mx-auto'>
<Timeline/>

</div>
        
      </section>
      <div className='flex flex-row justify-center items-baseline gap-x-2'>
              <div className="m-3 mb-5 text-center text-2xl text-white">Verschiebe die History Timeline mit dem Scrollbar!</div>
              
              <div className='transform -translate-y-3 w-[3vw] h-[1vh]'>
                <Image src="/bgscrollbar_dragger.png" layout="responsive" alt="" width="10" height="4"></Image>
              </div>
      </div>

      </div>
    </>
  )
}
