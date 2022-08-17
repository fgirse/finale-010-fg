import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer'
import Image from 'next/image'
import team from 'pages/team'
import { defaultOrder } from 'ol/renderer/vector'
import SCFLogo from'../public/ScFreiburg'
import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons'
import  useSWR from "swr";
import LiveTicker from '../components/LiveTicker'
import Marquee from "react-fast-marquee";


const GetSCF = () => {

  const [tabelleBL, setTabelleBL] = useState([])
  const [dataSCF, setDataSCF] = useState([])
  
  

  const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
  const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
  const url2 = (Url, { headers: { 'X-Auth-Token': Token } })
  const url3 = 'https://api.randomuser.me/'
  const url4 =
    'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'


    useEffect(() => {
      getData()
    
    
    }, [])
  
    const getData = async () => {
      const response = await axios(Url, { headers: { 'X-Auth-Token': Token } })
      setTabelleBL((response.data.standings[0].table));

      
    }
    const Emblem = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.team.crestUrl);
    const Rang =  tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.position);
    const Spieltag = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.playedGames);
    const ToreErzielt = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.goalsFor);
    const ToreErhalten = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.goalsAgainst);
    const Siege = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.won);
    const Niederlagen = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.lost);
    const Remis = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.draw);
    const Punkte = tabelleBL.filter(Tabelle => (Tabelle.team.name === "SC Freiburg")).map(data => data.points);
  return (

  <>
        <div className='hidden lg:block lg:py-1 lg:px-3 rounded-2xl lg:fixed lg:top-[26vh] lg:left-[12vw] font-black lg:w-4/12 lg:bg-red-900 border font-mono text-center text-white lg:text-[1.0rem]'>
     <Marquee speed={120} loop={3}>
    
        <SCFLogo className="ml-5 mr-5  w-12 h-12 bg-white"/>
          <div className='flex flex-row justify-center items-center gap-x-3'>
           <h1 className='ml-5'> ++++++++++++++++++++++++++++++++++++++++++ SC FREIBURG TICKER ++++++++++++++++++++++++++++++++++++++ </h1>
                  
           <img src={Emblem} height="36" width="36" alt="Eblem" />
           <img src={Emblem} height="36" width="36" alt="Eblem" />
           <img src={Emblem} height="36" width="36" alt="Eblem" />
           <h1 className='ml-5'> BUNDESLIGA </h1>
           <h1>Spieltag: <span className='text-amber-200 ml-1'>{Spieltag}</span></h1>
           <h1>Rang: <span className='text-amber-200 ml-1'>{Rang}</span></h1>
           <h1>Torverhältnis: <span className='text-amber-200 ml-1'>{ToreErzielt} : {ToreErhalten}</span></h1>
           <h1 className=''>Siege:<span className='text-amber-200 ml-1'>{Siege}</span></h1>
           <h1 className=''>Niederlagen:<span className='text-amber-200 ml-1'>{Niederlagen}</span></h1>
           <h1 className=''>Unentschieden:<span className='text-amber-200 ml-1'>{Remis}</span></h1>
           <h1 className=''>Punkte:<span className='text-amber-200 ml-1'>{Punkte}</span></h1>
          </div>
    
      

          

        
        </Marquee>


     </div>
    </>
  )
}

export default GetSCF