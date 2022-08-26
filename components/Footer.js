import Link from 'next/link'
import siteMetadata from '/data/siteMetadata'
import SocialIcon from '/components/social-icons/'
import Image from 'next/image'
import Astra from './icons/svg/Astra'
import LogoLeckerladen from './icons/svg/LogoLeckerladen'
import Flensburger from './icons/svg/Flensburger'
import Modale11 from './Modale/Modal11' 
import  ScrollTop from './ScrollTopAndComment'


export default function Footer() {
  return (
    <>
    <footer className="relative mx-auto w-[97vw] bg-gray-800 pt-8 pb-6">
    <div
    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
    style={{ height: "10px" }}>

<div className='w60' src="" layout="responsive" height="800" width="1220" alt="Illustration LOGO"></div>
      </div>
  {/*========================================================= NEWSLETTER ==========================*/}
  <section className="relative pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="py-24 md:py-36">
            <div className="w-24 lg:w-36 xl:w-48">
            <Image src="/Albers-white.png" height="170" width="170" layout="responsive" alt="Illustration Albers"/>
            </div>
            
            <h1 className="mb-5 text-2xl lg:text-4xl xl:text-5xL 2xl:text-6xl font-bold text-yellow-300">
              Rettungsanker Newsletter anfordern
            </h1>
            <h1 className="mb-9 text-2xl font-semibold text-gray-200">
               email Addresse eingeben und dabei sein!!!
            </h1>
            <input
              type="email"
              placeholder="jack@example.com"
              name="email"
              autoComplete="email"
              className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-red-200 font-semibold hover:border-gray-700 bg-black"
            />{" "}

          <Link href="rettungsanker-freiburg@gmx.de"><a className="inline-flex items-center px-14 py-3 mt-2 ml-2 font-black text-gray-50 transition duration-500 ease-in-out transform bg-transparent border rounded-lg hover:bg-red-700/60">anfordern</a></Link>

            
 
 
          </div>
        </div>
      </section>
      


  {/*====================================================== ENDE ===================================*/}

  <div className=" before:container mx-auto px-4">
    <ScrollTop/>
    <div className="flex flex-wrap gap-x-10 ">
      <div className="w-full lg:w-4/12 px-4">
        <h4 className="text-yellow-300 text-4xl font-semibold">
            unsere Partner
        </h4>
        <h5 className="text-lg mt-0 mb-2 text-gray-50">
          
        </h5>
        <div className=" h-36 w-full flex flex-row items-start justify-start gap-x-5 lg:gap-x-5 lg:flex-row lg:justify-start lg:items-center">
        
            <div className='w-20 h-20 lg:w-24g:h-24'><Image src="/Astra.svg" width="5vw" height="5vh" layout="responsive" alt="Logo Astra"/></div>
            <div className=' w-20 h-20 lg:w-24 lg:h-24'><Image src="/LogoLeckerladen.svg" width="5vw" height="5vh" layout="responsive" alt="Logo Leckerladen"/></div>   
            <div className=' w-20 h-20 lg:w-16 lg:h-16'><Image src="/Flens-logo.svg" width="5vw" height="5vh" layout="responsive" alt="Logo Flensburger"/></div>
        </div>
      </div>
      <div className="w-full lg:w-8/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
          <span className="block uppercase text-gray-400  font-semibold mb-2 text-[1.0rem]">
              Links
            </span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                  href="https://www.creative-tim.com/presentation">About Us
                </a>
              </li>
              <li>
                <a className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                  href="https://blog.creative-tim.com">Blog
                </a>
              </li>
              <li>
                <a className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                  href="https://www.github.com/creativetimofficial">Github
                </a>
              </li>
              <li>
                <a className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                  href="https://www.creative-tim.com/bootstrap-themes/free">Free Products
                </a>
              </li>

            </ul>
          </div>
          <div className="mt-5 w-full lg:w-4/12 px-4">
            <span className="block uppercase text-gray-400  font-semibold mb-2 text-[1.0rem]">
              Impressum/ Datenschutz
            </span>
            <ul className="list-unstyled">
         
           <Modale11/>
              <li>
                <a className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/privacy">Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/privacy">Sonstiges
                </a>
              </li>
              <li>
                <a className="text-gray-50 hover:text-gray-400 font-semibold block pb-2 text-sm"
                  href="https://creative-tim.com/contact-us">Contact Us
                </a>
              </li>
            </ul>

  </div>
        </div>
      </div>
      </div>
    
    
    <hr className="my-6 border-gray-400" />
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-400 font-semibold py-1">
          Copyright © {new Date().getFullYear()}{" "}<span className='text-amber-600 font-black'>  MEDICUS DESIGN Basel Switzerland</span> & {" "}
          <a
            href="https://www.rettungsanker-freiburg.de"
            className="text-gray-400 hover:text-gray-400"
          >
            Rettungsanker-Freiburg
          </a>.
        </div>
      </div>
    </div>
    </div>
    </footer>
</>





    )
}
