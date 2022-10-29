import React from 'react'
import Image from 'next/image'
import Astra from '../components/icons/svg/Astra'
import Ganter from '../components/icons/svg/Ganter'
import Flens from '../components/icons/svg/Flensburger'
import Logo from '../components/icons/svg/LogoAlt2'
import MenuItem from '../components/Menuitem/MenuItem.jsx'
import SubHeading from '../components/comments/SubHeading/SubHeading'
import { data } from '../constants'
import { images } from '../constants'
import LogoAlt from '../components/social-icons'
import HeroDrinksAnimated from '@/components/Animationen/HeroDrinksAnimated'

const Drinks = () => {
  return (
    <>
      <section className="mx-auto h-[266vh] w-full border-t-4 border-amber-500 bg-black lg:h-[312vh]">
        <SubHeading titel="Retttungsanker Menu" />
        <div className="mx-auto flex w-7/12 flex-col items-center">
          <HeroDrinksAnimated />

          <h1 className="max-auto p-3 text-center text-[.9rem] text-slate-400 checked:w-11/12 lg:w-4/12">
            Preise gelten wie ausgeschrieben incl. 7% Mwst.
          </h1>
        </div>
        <div className="lg: mx-auto -mt-12 w-48">
          <Image
            src="/astraglas.png"
            width="202"
            height="202"
            layout="responsive"
            alt="menu__img"
          />
        </div>
        <div className="lg-h-[66vh] container lg:mb-3 lg:mr-auto lg:ml-auto lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-3 lg:gap-y-20 ">
          <div className="flex h-full w-full items-center justify-center gap-x-2 bg-black pr-4 pl-4 md:mb-0 md:w-[25vw]">
            <div className="items start flex flex-col justify-center">
              <p className="text-left text-6xl text-slate-100 lg:mt-0 lg:text-5xl">Biere</p>
              <p className="mb-3 w-[20vw] border-b"></p>
              <div className="justify-c-[enter flex w-full flex-col items-end text-right text-slate-200">
                {data.biereA.map((biere, index) => (
                  <MenuItem
                    key={biere.title + index}
                    title={biere.title}
                    price={biere.price}
                    tags={biere.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center gap-x-2 bg-black pr-1 pl-1 md:mb-0 md:w-[25vw]">
            <div className="xl: hidden w-10/12 lg:block lg:translate-y-1 lg:transform lg:open:checked:h-full">
              <Image
                src="/Astraglas.png"
                width="202"
                height="202"
                layout="responsive"
                alt="menu__img"
              />
            </div>
          </div>
          <div className="-mt-36 flex h-full w-full items-center justify-center gap-x-2 bg-black pr-4 pl-4 md:mb-0 md:w-[25vw] lg:mt-0">
            <div className="items start flex flex-col justify-center">
              <p className="text-right text-5xl text-slate-100">Biere</p>
              <p className="mb-3 w-[20vw] border-b"></p>

              <div className="flex w-full flex-col items-start justify-center text-slate-200">
                {data.biereB.map((biere, index) => (
                  <MenuItem
                    key={biere.title + index}
                    title={biere.title}
                    price={biere.price}
                    tags={biere.tags}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*==================================================================================================*/}

        <div className=" container mb-10 mr-auto ml-auto flex h-[66vh] w-[90vw] flex-wrap items-center justify-center gap-x-3 gap-y-20">
          <div className="flex h-full w-full items-center justify-center gap-x-2 bg-black pr-4 pl-4 md:mb-0 md:w-[25vw]">
            <div className="items start flex flex-col justify-center">
              <p className="text-left text-5xl text-slate-100">Weine Rot</p>
              <p className="mb-3 w-[20vw] border-b"></p>
              <div className="flex w-full flex-col items-end justify-center text-right text-slate-200">
                {data.weineA.map((weine, index) => (
                  <MenuItem
                    key={weine.title + index}
                    title={weine.title}
                    price={weine.price}
                    tags={weine.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center gap-x-2 bg-black pr-1 pl-1 md:mb-0 md:w-[25vw]">
            <div className="h-full w-10/12 lg:translate-y-24 lg:transform ">
              <Image
                src="/weinbottle.png"
                width="474"
                height="625"
                layout="responsive"
                alt="menu__img"
              />
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center gap-x-2 bg-black pr-4 pl-4 md:mb-0 md:w-[25vw]">
            <div className="items start flex flex-col justify-center">
              <p className="text-right text-5xl text-slate-100">Weine weiss</p>
              <p className="mb-3 w-[20vw] border-b"></p>

              <div className="flex w-full flex-col items-start justify-center text-slate-200">
                {data.weineB.map((weine, index) => (
                  <MenuItem
                    key={weine.title + index}
                    title={weine.title}
                    price={weine.price}
                    tags={weine.tags}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" container mb-16 mr-auto ml-auto flex h-[66vh] w-[90vw] flex-wrap items-center justify-center gap-x-3 gap-y-20">
          <div className="flex h-full w-full items-center justify-center gap-x-2 bg-black pr-4 pl-4 md:mb-0 md:w-[25vw]">
            <div className="items start flex flex-col justify-end">
              <p className="text-left text-5xl text-slate-100">Cocktails/Longdrinks</p>
              <p className="mb-3 w-[25vw] border-b"></p>
              <div className="flex w-full flex-col items-end justify-center text-right text-slate-200">
                {data.cocktailsA.map((cocktail, index) => (
                  <MenuItem
                    key={cocktail.title + index}
                    title={cocktail.title}
                    price={cocktail.price}
                    tags={cocktail.tags}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mb-16 flex h-full w-full items-center justify-center gap-x-2 bg-black pr-1 pl-1 md:mb-0 md:w-[25vw]">
            <div className="h-full w-4/12 lg:translate-y-16 lg:transform">
              <Image
                src="/Cocktail06.png"
                width="130"
                height="533"
                layout="responsive"
                alt="menu__img"
              />
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center gap-x-2 bg-black pr-4 pl-4 md:mb-0 md:w-[25vw]">
            <div className="items start flex flex-col justify-center">
              <p className="text-right text-5xl text-slate-100">Cocktails/Longdrinks</p>
              <p className="mb-3 w-[25vw] border-b"></p>

              <div className="flex w-full flex-col items-start justify-center text-slate-200">
                {data.cocktailsB.map((cocktail, index) => (
                  <MenuItem
                    key={cocktail.title + index}
                    title={cocktail.title}
                    price={cocktail.price}
                    tags={cocktail.tags}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Drinks
