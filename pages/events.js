/* eslint-disable prettier/prettier */
import React from 'react'
import Image from 'next/image'
import Modale04 from'../components/Modale/Modal04.js'
import HeroEventAnimated from '@/components/Animationen/HeroeventAnimated.js'

const events =() => {
return(
  <>
 
  <section className='w-full h-[250vw] bg-no-repeat bg-center bg-contain bg-[url("/crowd22.svg")] lg:w-full lg:h-[100vw] lg:bg-[length:55%_55%] lg:bg-right-top' >
    <HeroEventAnimated className=""/>
    <p className='text-8xl headingF text-center text-yellow-500 lg:hidden'>Dein Event</p>
    <div className="relative flex flex-wrap -m-8">
      <div className="w-full md:w-1/2 p-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="md:max-w-lg mx-auto lg:pt-16 md:pb-32">
                <a className="hidden lg:w-60 lg:h-36 mb-28 lg:inline-block" href="#">
                  <img src="/LogoNeu.png" width="300" height="200"  alt="Logo_neu"/>
                </a>
                <h2 className="-mt-16 mb-12 text-4xl md:text-7xl text-yellow-500 font-bold font-heading tracking-px-n lg:mt-0 lg:mb-12 leading-tight">Privater oder Geschäftsevent? </h2>
                <h3 className="mb-9 mt-[35vh] text-2xl text-slate-300 font-bold font-heading leading-normal lg:mt-0">Wir planen Ihren Event nach Ihren speziellen Wünschen und Vorstellungen</h3>
                <ul className="md:max-w-xs lg:max-w-screen-2xl">
                  <li className="mb-5 flex flex-wrap">
                    <svg className="mr-2" width="35" height="35" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#FFDD00"></path>
                    </svg>
                    <span className="flex-1 font-medium leading-relaxed text-xl text-slate-300">Auf Wunsch Catering-Service durch unseren Kooperationspartner</span>
                  </li>
                  <li className="mb-5 flex flex-wrap">
                    <svg className="mr-2" width="35" height="36" viewbox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 23C18.0228 23 22.5 18.5228 22.5 13C22.5 7.47715 18.0228 3 12.5 3C6.97715 3 2.5 7.47715 2.5 13C2.5 18.5228 6.97715 23 12.5 23ZM17.1339 11.3839C17.622 10.8957 17.622 10.1043 17.1339 9.61612C16.6457 9.12796 15.8543 9.12796 15.3661 9.61612L11.25 13.7322L9.63388 12.1161C9.14573 11.628 8.35427 11.628 7.86612 12.1161C7.37796 12.6043 7.37796 13.3957 7.86612 13.8839L10.3661 16.3839C10.8543 16.872 11.6457 16.872 12.1339 16.3839L17.1339 11.3839Z" fill="#FFDD00"></path>
                    </svg>
                    <span className="flex-1 font-medium leading-relaxed text-slate-300">Der Rettungsanker steht Ihnen im Rahmen einer geschlosssenen Gesellschaft zur Verfügung</span>
                    </li>
                </ul>
                <Modale04></Modale04>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-8">
        <div className="p-4 py-16 flex flex-col justify-center bg-blueGray-10 h-full">
          
       
         
            <div className="flex flex-wrap justify-between -m-2 mb-4">
              <div className="w-auto p-2">
                <div className="flex items-center">
                  
              
                </div>
              </div>
             
            </div>
            
          
            <div className="flex flex-wrap justify-center -m-2">
              <div className="w-auto p-2">
            
              </div>
              <div className="w-auto p-2">
                
              </div>
            </div>
          
        </div>
      </div>
    </div>
  </section>
</>
)
}

export default events




