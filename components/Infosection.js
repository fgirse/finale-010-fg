import React from 'react'
import LogoNeu from '../components/icons/svg/LogoNeu'
import Link from 'next/link'
import { useState } from 'react'
import {
  faBeer,
  faBirthdayCake,
  faCircleArrowRight,
  faCircleQuestion,
  faHistory,
  faHome,
  faPeopleGroup,
  faVolleyball,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Albers from '../components/icons/svg/Albers'
import Arrow from '../public/Arrow-3-yellow.svg'

export default function Infosection() {
  return (
    <>
      <section className=" :bg-block sticky -top-0 z-50 mx-auto h-20 w-[97vw] overflow-hidden bg-slate-900 md:hidden lg:block lg:bg-amber-800">
        <div className="flex- mx-auto flex w-full items-end justify-around md:flex-row md:items-center md:justify-start md:gap-x-5">
          <div className="">
            <LogoNeu className="ml-5 mt-3 h-[2.666rem] w-24 p-1 lg:h-16 lg:w-40"></LogoNeu>
          </div>

          <div className="hidden gap-x-2 lg:flex lg:flex-row lg:items-center lg:justify-center">
            <svg
              className="h-6 w-6"
              fill="#ffcc00"
              stroke="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            <p className="font-sans font-bold text-gray-100 lg:text-[1.33rem] xl:text-[.6rem]  2xl:text-[1.0rem]">
              0761 38386747
            </p>
          </div>

          <div className="hidden gap-x-1 lg:flex lg:flex-row lg:items-center lg:justify-center">
            <svg
              className="h-6 w-6"
              fill="#fff200"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <p className="font-sans font-bold text-gray-100 lg:text-[1.33] xl:text-[.6rem]  2xl:text-[1.0rem] ">
              rettungsanker-freiburg@gmx.de
            </p>
          </div>

          <div className='items-center" flex flex-row justify-start'></div>
          <Albers className="hidden h-20 w-36 lg:block lg:h-16 lg:w-16" />
          <h1 className="hidden text-white lg:block lg:text-[1.33rem]">
            Anmeldung zum Rettungsanker-Bloq
          </h1>
          <Arrow fill="" className="md: -mt-4 hidden h-20 w-60 lg:block lg:w-40"></Arrow>
          <Link href="/rettungsankerChat">
            <a className="fond-black mr-2 w-36 rounded-2xl border bg-sky-800 text-center text-[1.666rem] text-white shadow-2xl shadow-slate-700 hover:bg-amber-400">
              Blog
            </a>
          </Link>
        </div>
      </section>
    </>
  )
}
