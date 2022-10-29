import React from 'react'
import { useState, useEffect } from 'react'

function useFetchData(url) {
  const [data, setData] = useState(null)

  const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
  const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
  const url2 = (Url, { headers: { 'X-Auth-Token': Token } })
  const url3 = 'https://api.randomuser.me/'
  const url4 =
    'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'

  useEffect(() => {
    fetch(Url, { headers: { 'X-Auth-Token': Token } })
  }, [Url])

  useEffect(() => {
    fetch(Url, { headers: { 'X-Auth-Token': Token } })
      .then((res) => res.json())
      .then((data) => {
        return setData(data.standings[0].table)
      })
      .catch((err) => console.log(`Error: ${err}`))
  }, [Url])

  console.log(data)

  return { data }
}

export default useFetchData
