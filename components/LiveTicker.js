import React from 'react'
import Marquee from "react-fast-marquee";
import { faSoccerBall, faVolleyball} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const LiveTicker = () => {
  return (
    <div className='w-6/12 bg-lime-400 z-50 fixed text-[.66rem] leading-0 text-center overflow-x-hidden text-white lg:text-[1.2rem] font-black'>
        <Marquee>
        <FontAwesomeIcon  className="text-slate-300 p-0 mr-3 w-5 h-5 inline" icon={faVolleyball}/>
        <FontAwesomeIcon  className="text-slate-300 p-0 mr-3 w-5 h-5 inline" icon={faVolleyball}/>
        <FontAwesomeIcon  className="text-slate-300 p-0 mr-3 w-5 h-5 inline" icon={faVolleyball}/>
            SC Freiburg Ticker {''}
         <FontAwesomeIcon  className="text-slate-300 p-0 mr-3 w-5 h-5 inline" icon={faVolleyball}/>
        <FontAwesomeIcon  className="text-slate-300 p-0 mr-3 w-5 h-5 inline" icon={faVolleyball}/>
        <FontAwesomeIcon  className="text-slate-300 p-0 mr-3 w-5 h-5 inline" icon={faVolleyball}/>    
            
            </Marquee>

    </div>
  )
}

export default LiveTicker
