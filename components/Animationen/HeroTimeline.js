/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

const HeroTimeline = () => {
  const el = useRef()
  const q = gsap.utils.selector(el)
  const tl = useRef()

  useEffect(() => {
    tl.current = gsap
      .timeline()

      .from(q('#Overlay'), {
        autoAlpha: 0,
        duration: 2,
      })

      .from(q('#LogoAlt'), {
        autoAlpha: 0,
        duration: 2,
      })
      .from(q('#die'), {
        autoAlpha: 0,
        duration: 2,
      })
      .from(q('#kiez'), {
        autoAlpha: 0,
        duration: 2,
      })

      .to(q('#Overlay'), {
        autoAlpha: 0,
        duration: 1,
      })

      .to(q('#LogoAlt'), {
        autoAlpha: 0,
        duration: 1,
      })
      .to(q('#die'), {
        autoAlpha: 0,
        duration: 1,
      })
      .to(q('#kiez'), {
        autoAlpha: 0,
        duration: 1,
      })
  }, [])

  return (
    <div
      ref={el}
      id="Overlay"
      className="relative mt-24 hidden  lg:flex lg:w-full lg:flex-col lg:items-center lg:justify-center "
    >
      <div
        className="h- left-30 absolute top-10 w-9/12 rounded-2xl border bg-gray-900/50"
        id="Overlay"
      >
        <div className="lg:mx-auto lg:mt-8 lg:w-6/12 lg:p-4 ">
          <Image
            id="LogoAlt"
            src="/Logoalt.png"
            width="160"
            height="24"
            layout="responsive"
            alt="Logoalt"
          />
        </div>

        <h1
          id="die"
          className="font-['Bowlby One SC'] headingE -mt-12 p-4 text-center text-[8rem] uppercase text-white"
        >
          die
        </h1>
        <h1
          id="kiez"
          className="font-['Bowlby One SC'] headingF -mt-20 p-4 text-center text-[8rem] uppercase text-red-800"
        >
          kiezkneipe
        </h1>
      </div>
    </div>
  )
}

export default HeroTimeline
