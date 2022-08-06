import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer'
import Image from 'next/image'

const GetDataSCFreiburg = () => {
  const [tabelleBL, setTabelleBL] = useState([])

  const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
  const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
  const url2 = (Url, { headers: { 'X-Auth-Token': Token } })
  const url3 = 'https://api.randomuser.me/'
  const url4 =  'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios(Url, { headers: { 'X-Auth-Token': Token } })
    setTabelleBL(response.data.standings[0].table)
  }

  const SCFData = tabelleBL
  console.log(SCFData)

    

   

  return (
    <>
    <div className="w-60 h-60 border text-yellow-500 text center text-4xl">
      <p className='text-center text-white text-5xl'>********* tickerSCF ***********</p>
    
    
    
    </div>

      
    </>
  )
}
