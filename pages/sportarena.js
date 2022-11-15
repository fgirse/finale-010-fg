/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { useEffect, useState } from 'react'
import TabelleBL from '../components/TabelleBL'
import axios from 'axios'
import React, { useMemo } from 'react'
import { container } from 'tailwindcss/defaultTheme'
import HeroSportarenaAnimated from '/components/Animationen/HeroSportarenaAnimated'
import Modale03 from '../components/Modale/Modal03'
import ArenaIlustration from'../components/icons/svg/Arena.js'
import Image from 'next/image'


const Sportarena = () => {

  
  const [tabelle, setTabelle] = useState([]);
  const [loading, setLoading] =useState(true);

  useEffect(() => {
    const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
    const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
    const url2 = (Url, { headers: { 'X-Auth-Token': Token } })
    const url4 =
      'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'
  
 // declare the data fetching function

    const fetchBundesligaData = async () => {
      try {
        const response= await fetch(
          Url, { headers: { 'X-Auth-Token': Token } }
          );
          const json = await response.json();
          console.log(json.season);
          setTabelle(json.season);
        } catch (error) {
          console.log("error", error);
        }
      };

    fetchBundesligaData();
    setLoading(loading = false)
  }, []);

  return (
      <>
      
        <container className=" flex flex-col justify-between w-full mx-auto">
          <div
            style={{ "background-image": "url('/sportarena.jpg')" }}
            className=" mb-5 flex-1 w-full h-[120vh] bg-no-repeat bg-cover border border-yellow-400  ">
          <div className="flex flex-col lg:-mt-40 lg:flex-row lg:justify-center lg:items-center">
                    <HeroSportarenaAnimated/>
            
          </div>
              <div className="-mt-24 lg:-mt-36 mx-auto lg:w-[45Vw] lg:h-[25vh] flex flex-col items-center justify-start rounded-2xl border-4 bg-green-300/30">
                  <p className="py-0 headingF text-3xl text-center text-yellow-600 lg:text-5xl">
                    Tisch reservieren?
                  </p>
              <Modale03 className="py-3"></Modale03>
            </div>
            <p className="mt- mx-auto text-1xl text-gray-200 text-center font-sans xl:text-2xl">
              Saison vom{' '}
              <span className="text-yellow-500 font-bold">
                {tabelle.startDate}
              </span>{' '}
              bis{' '}
              <span className="text-yellow-500 font-bold">
                {tabelle.endDate}
              </span>
            </p>
            <p className="mx-auto text-4xl text-gray-200 text-center font-sans xxl:text-4xl">
              Die Bundesliga
            </p>
            <p className="mx-auto text-2xl text-gray-200 text-center font-sans xl:text-2xl">
              <span className="text-yellow-500 font-bold">
                {tabelle.currentMatchday}.
              </span>{' '}
              Spieltag
            </p>
            <div className='container mx-auto overflow-hidden'>
            <div className="container mx-auto text-xs border border-yellow-500 w-[90vw] md:w-[80vw] xl:w-[80vw]  mb-24">
              <TabelleBL className=""></TabelleBL>
            </div>
            </div>
          </div>

          <div></div>
        </container>
      </>
    )
  }




export default Sportarena;    



