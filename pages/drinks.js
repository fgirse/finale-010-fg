import React from "react";
import Image from "next/image";
import Astra from "../components/icons/svg/Astra";
import Ganter from "../components/icons/svg/Ganter"
import Flens from "../components/icons/svg/Flensburger"
import Logo from '../components/icons/svg/LogoAlt2'
import MenuItem  from '../components/Menuitem/MenuItem.jsx';
import SubHeading from "../components/SubHeading/SubHeading";
import { data } from '../constants';
import { images } from '../constants'
import LogoAlt from "../components/social-icons"
import HeroDrinksAnimated from "@/components/Animationen/HeroDrinksAnimated";


const Drinks = () => {
  return (
    <>
        <section className="h-[266vh] border-t-4 border-amber-500 bg-black w-full mx-auto"> 
     <SubHeading titel="Retttungsanker Menu"/>
     <div className="w-7/12 flex flex-col items-center mx-auto">
      <HeroDrinksAnimated/>
     {/*<h1 className="text-6xl headingB text-white-500 text-center lg:text-[5.33em]">Drinks {"&"} Snacks</h1>*/}
     <h1 className="p-3 checked:w-11/12 text-center lg:w-4/12 max-auto text-[.9rem] text-slate-400">Preise gelten wie ausgeschrieben incl. 7% Mwst.</h1>
    
          <LogoAlt className="lg:block lg:w-full"/>
     </div>
     <div className="-mt-12 mx-auto w-48 lg:">
            <Image src="/astraglas.png" width="202" height="202"  layout="responsive" alt="menu__img" />
     </div>
    <div className="container lg:mb-3 lg:flex lg-h-[66vh] lg:justify-center lg:items-center lg:gap-x-3 lg:gap-y-20 lg:mr-auto lg:ml-auto lg:flex-wrap ">
     <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
       
           <div className="flex flex-col items start justify-center">
            <p className="text-6xl text-left lg:text-5xl text-slate-100 lg:mt-0">Biere</p>
            <p className="mb-3 w-[20vw] border-b"></p>
            <div className="w-full flex flex-col text-right items-end justify-c-[enter text-slate-200">
              {data.biereA.map((biere, index) => (
                <MenuItem key={biere.title + index} title={biere.title} price={biere.price} tags={biere.tags} />
              ))}
            </div>
          </div>      
                
       
       </div>
     <div className="bg-black flex w-full h-full justify-center items-center pr-1 pl-1 md:w-[25vw] gap-x-2 md:mb-0">
     <div className="hidden lg:block w-10/12 lg:open:checked:h-full lg:transform lg:translate-y-1 xl:">
            <Image src="/astraglas.png" width="202" height="202"  layout="responsive" alt="menu__img" />
          </div>
       </div>
     <div className="-mt-36 bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0 lg:mt-0">
       
                
          <div className="flex flex-col items start justify-center">
            <p className="text-right text-5xl text-slate-100">Biere</p>
            <p className="mb-3 w-[20vw] border-b"></p>
     
            <div className="w-full flex flex-col items-start justify-center text-slate-200">
              {data.biereB.map((biere, index) => (
                <MenuItem key={biere.title + index} title={biere.title} price={biere.price} tags={biere.tags} />
              ))}
            </div>
          </div>
        
     
     </div>
    </div>
    
    
    
    
    
    {/*==================================================================================================*/}
    
    
    <div className=" mb-10 w-[90vw] flex h-[66vh] justify-center items-center gap-x-3 gap-y-20 mr-auto ml-auto flex-wrap container">
     <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
       
           <div className="flex flex-col items start justify-center">
            <p className="text-left text-5xl text-slate-100">Weine Rot</p>
            <p className="mb-3 w-[20vw] border-b"></p>
            <div className="w-full flex flex-col text-right items-end justify-center text-slate-200">
            {data.weineA.map((weine, index) => (
                <MenuItem key={weine.title + index} title={weine.title} price={weine.price} tags={weine.tags} />
              ))}
            </div>
          </div>      
                
       
       </div>
     <div className="bg-black flex w-full h-full justify-center items-center pr-1 pl-1 md:w-[25vw] gap-x-2 md:mb-0">
     <div className="w-10/12 h-full lg:transform lg:translate-y-24 ">
            <Image src="/weinbottle.png" width="474" height="625"  layout="responsive" alt="menu__img" />
          </div>
       </div>
     <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
       
                
          <div className="flex flex-col items start justify-center">
            <p className="text-right text-5xl text-slate-100">Weine                                                                                                                                                                                                                                                                                                                                                                                                                                                                  weiss</p>
            <p className="mb-3 w-[20vw] border-b"></p>
     
            <div className="w-full flex flex-col items-start justify-center text-slate-200">
              {data.weineB.map((weine, index) => (
                <MenuItem key={weine.title + index} title={weine.title} price={weine.price} tags={weine.tags} />
              ))}
            </div>
          </div>
        
     
     </div>
    </div>
    
    
    
    <div className=" mb-16 w-[90vw] flex h-[66vh] justify-center items-center gap-x-3 gap-y-20 mr-auto ml-auto flex-wrap container">
     <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
       
           <div className="flex flex-col items start justify-end">
            <p className="text-left text-5xl text-slate-100">Cocktails/Longdrinks</p>
            <p className="mb-3 w-[25vw] border-b"></p>
            <div className="w-full flex flex-col text-right items-end justify-center text-slate-200">
              {data.cocktailsA.map((cocktail, index) => (
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))}
            </div>
          </div>      
                
       
       </div>
     <div className="mb-16 bg-black flex w-full h-full justify-center items-center pr-1 pl-1 md:w-[25vw] gap-x-2 md:mb-0">
     <div className="w-4/12 h-full lg:transform lg:translate-y-16">
            <Image src="/Cocktail06.png" width="130" height="533"  layout="responsive" alt="menu__img" />
          </div>
       </div>
     <div className="bg-black flex w-full h-full justify-center items-center pr-4 pl-4 md:w-[25vw] gap-x-2 md:mb-0">
       
                
          <div className="flex flex-col items start justify-center">
            <p className="text-right text-5xl text-slate-100">Cocktails/Longdrinks</p>
            <p className="mb-3 w-[25vw] border-b"></p>
     
            <div className="w-full flex flex-col items-start justify-center text-slate-200">
              {data.cocktailsB.map((cocktail, index) => (
                <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
              ))}
            </div>
          </div>
        
     
     </div>
    </div>
    
    
    </section>
    </>
      )}
      export default Drinks
