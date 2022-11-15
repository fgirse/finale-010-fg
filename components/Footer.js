import Link from 'next/link'
import siteMetadata from '/data/siteMetadata'
import SocialIcon from '/components/social-icons/'
import Image from 'next/image'
import Astra from './icons/svg/Astra'
import LogoLeckerladen from './icons/svg/LogoLeckerladen'
import Flensburger from './icons/svg/Flensburger'
import Modale11 from './Modale/Modal11'
import Modale12 from './Modale/Modal12'
import Modale13 from './Modale/Modal13'
import Modale14 from './Modale/Modal14'
import Modale15 from './Modale/Modal15'
import Modale16 from './Modale/Modal16'
import React from 'react'
import Skyline from './icons/svg/Skyline_weiss_3'

const Footer = () => {
  return (
       
       <>
<section className='bg-[#020818]'>
<hr className="my- border-gray-400" />
  <div className="mt-12 pt-26 border-3 border-l-0 border-r-0 border-white  "> 
    <div className="pb-16 border-b-3 border-white">
      <div className="container px-4 mx-auto ">
        <div className="flex flex-wrap -mx-4 justify-between">
{/*============================================================ section A - Logo==============================*/}
          <div className=" w-full md:w-auto xl:w-1/3 px-4 mb-14 xl:mb-0">
            <a className="hidden lg:inline-block mx-auto mb-12" href="#">
              <img className="w-56 lg:h-24" src="/LogoNeu.png" alt=""/>
            </a>
{/*============================================================ section B-Links ==============================*/}
            <div className="mt-12 flex flex-col items-center lg:-mt-0 lg:flex-row lg:flex-wrap lg:justify-between lg:items-center "><Modale11/><Modale12/><Modale13/><Modale14/><Modale15/><Modale16/></div>
{/*============================================================ section C-Partner ==============================*/}        
            <h4 className="order-last mt-24 text-4xl lg:order-none lg:text-2xl font-semibold text-yellow-300">unsere Partner</h4>
              <div className="flex flex-col  lg:flex lg:flex-row lg:justify-around">
                  <div className="w-/12 px-4 flex flex-row justify-evenly items-baseline gap-x-16 lg:justify-between lg:items-center lg:gap-x-24">
             
                    <div className=" h-20 w-20 lg:h-24 lg:w-24">
                        <Image
                          src="/Astra.svg"
                          width="5vw"
                          height="5vh"
                          layout="responsive"
                          alt="Logo Astra"
                        />
                      </div>
                      <div className=" transform translate-y-3 h-24 w-24 lg:w-32 lg:h-32">
                        <Image
                          src="/LogoLeckerladen.svg"
                          width="20vw"
                          height="20vh"
                          layout="responsive"
                          alt="Logo Leckerladen"
                        />
                      </div>
                      <div className=" transform translate-y-4 h-20 w-16 lg:h-16 lg:w-16">
                        <Image
                          src="/Flens-logo.svg"
                          width="5vw"
                          height="5vh"
                          layout="responsive"
                          alt="Logo Flensburger"
                        />
                      </div>
                </div>
              </div>
        </div>
{/*============================================================ section D -Newsletter ==============================*/}
          <div className=" order-first w-full md:w-auto lg:order-none xl:w-1/3 px-4">
            <h4 className="text-yellow-400 text-xl md:text-2xl font-extrabold mb-10">Rettungsanker Newsletter anfordern</h4>
            <h4 className="text-yellow-100 text-xl md:text-sm font-extrabold mb-10">email eingeben und dabei sein!!!</h4>
            <div className="inline-flex">
              <input className="p-3 w-2/3 md:w-auto bg-white border-l-2 border-t-2 border-b-2 border-r-2 border-white rounded-l rounded-tl rounded-bl text-md font-extrabold text-white placeholder-white bg-transparent outline-none" type="email" placeholder="hans.albers@reeperbahn.de"/>
              <button className=" flex-shrink-0 inline-block w-auto ml-2 items-center justify-center h-full py-4 px-5 leading-6 text-md text-white font-extrabold bg-yellow-600 hover:bg-green-800 border-3 border-white rounded transition duration-200">senden</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    {/*============================================================ section E - Social Links ==============================*/}
    <div className="container px-4 pt-16 pb-20 mx-auto bg-no-repeat sm:bg-[length:100%,50%] sm:py-4 lg:w-full lg:bg-[#020818] ">
    <div className="-mt-36 w-full lg:w-auto flex items-center justify-center">
          <a className="inline-block text-white hover:text-gray-200 mr-8" href="#">
            <svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M10.7247 29.5454V16.2767H15.2637L15.9446 11.1041H10.7247V7.80212C10.7247 6.305 11.1469 5.28473 13.3381 5.28473L16.1284 5.28361V0.657045C15.6458 0.59554 13.9895 0.454529 12.0616 0.454529C8.03601 0.454529 5.28 2.86466 5.28 7.28983V11.1041H0.727295V16.2767H5.28V29.5454H10.7247Z" fill="currentColor"></path>
            </svg>
          </a>
          <a className="inline-block text-white hover:text-gray-200 mr-8" href="#">
            <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M31.3636 3.24326C30.2259 3.74735 29.0053 4.08922 27.7228 4.24185C29.0323 3.45765 30.0347 2.21382 30.5098 0.73624C29.2814 1.46245 27.9255 1.98978 26.4808 2.27563C25.3239 1.04144 23.6783 0.272705 21.853 0.272705C18.3513 0.272705 15.5121 3.11195 15.5121 6.61175C15.5121 7.10811 15.5681 7.59291 15.6762 8.05649C10.4073 7.79185 5.73508 5.26745 2.60806 1.43154C2.06145 2.36639 1.75049 3.45569 1.75049 4.61846C1.75049 6.81841 2.87074 8.75952 4.57044 9.89518C3.5313 9.86043 2.55397 9.57457 1.69837 9.09942V9.17862C1.69837 12.2496 3.88478 14.8127 6.78387 15.396C6.25271 15.5389 5.69261 15.6181 5.11317 15.6181C4.70372 15.6181 4.30776 15.5776 3.91953 15.5003C4.72685 18.0208 7.06781 19.8538 9.8414 19.904C7.67236 21.6037 4.93741 22.6139 1.96685 22.6139C1.45503 22.6139 0.950892 22.583 0.454529 22.5269C3.26094 24.329 6.59271 25.3797 10.1736 25.3797C21.8377 25.3797 28.2134 15.7186 28.2134 7.33993L28.1922 6.51907C29.4379 5.63053 30.5156 4.51417 31.3636 3.24326Z" fill="currentColor"></path>
            </svg>
          </a>
          <a className="inline-block text-white hover:text-gray-200" href="#">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.6677 0.636353H24.3319C29.3122 0.636353 33.3638 4.68801 33.3636 9.6679V24.3321C33.3636 29.312 29.3122 33.3636 24.3319 33.3636H9.6677C4.68782 33.3636 0.636353 29.3122 0.636353 24.3321V9.6679C0.636353 4.68801 4.68782 0.636353 9.6677 0.636353ZM24.3321 30.4599C27.711 30.4599 30.4601 27.711 30.4601 24.3321H30.4599V9.6679C30.4599 6.28913 27.7109 3.54007 24.3319 3.54007H9.6677C6.28893 3.54007 3.54007 6.28913 3.54007 9.6679V24.3321C3.54007 27.711 6.28893 30.4601 9.6677 30.4599H24.3321ZM8.42856 17.0002C8.42856 12.2737 12.2736 8.42856 17 8.42856C21.7263 8.42856 25.5714 12.2737 25.5714 17.0002C25.5714 21.7265 21.7263 25.5714 17 25.5714C12.2736 25.5714 8.42856 21.7265 8.42856 17.0002ZM11.38 17C11.38 20.0988 13.9012 22.6198 17 22.6198C20.0988 22.6198 22.62 20.0988 22.62 17C22.62 13.901 20.099 11.3798 17 11.3798C13.901 11.3798 11.38 13.901 11.38 17Z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
{/*============================================================ section F -Copyright ==============================*/}
        <hr className="mx-auto w-6/12 my-6 border-gray-400" />
      <div className="flex flex-row justify-between">
      
            <div className="mx-auto w-full px-4 text-center md:w-8/12">
              <div className="py-1 text-sm font-semibold text-gray-400 lg:text-[0.77rem]">
                Copyright © {new Date().getFullYear()}{' '}
                <span className="font-black text-amber-600"> MEDICUS DESIGN Basel Switzerland</span>{' '}
                &{' '}
                <a
                  href="https://www.rettungsanker-freiburg.de"
                  className="text-gray-400 hover:text-gray-400"
                >
                  Rettungsanker-Freiburg
                </a>
                <Skyline className="-mt-12 mx-auto w-48 h-48 opacity-95"/>
              </div>
            </div>
          </div>
      
      </div>
    

</section>


     </>
    
  )
}

export default Footer