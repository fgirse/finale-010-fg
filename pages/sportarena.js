/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { useEffect, useState } from 'react'
import TabelleBL from '../components/TabelleBL'
import axios from 'axios'
import React, { useMemo } from 'react'
import { container } from 'tailwindcss/defaultTheme'
import HeroSportarenaAni from '/components/Animationen/HeroSportarenaAnimated'
import Modale03 from '../components/Modale/Modal03'

export default class FetchDataUser extends React.Component {
  state = {
    loading: true,
    tabelle: [],
  }

  async componentDidMount() {
    const Token = '41c4813ea4f746fbbdd2bdb9c5250aa4'
    const Url = 'https://api.football-data.org/v2/competitions/2002/standings?'
    const url2 = (Url, { headers: { 'X-Auth-Token': Token } })

    const url4 =
      'https://api.football-data.org/v2/competitions/2002/standings?X-Auth-Token=41c4813ea4f746fbbdd2bdb9c5250aa4'
    const response = await fetch(Url, { headers: { 'X-Auth-Token': Token } })
    const data = await response.json()
    console.log(data.season)
    this.setState({ tabelle: data.season, loading: false })
    
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.tabelle) {
      return <div>didn't get data Bundesliga</div>
    }

    return (
      <>
        <container className="mx-auto flex w-full flex-col justify-between">
          <div
            style={{ 'background-image': "url('/sportarena.jpg')" }}
            className="mb-5 h-[120vh] w-full flex-1 border border-yellow-400 bg-cover  bg-no-repeat"
          >
            <HeroSportarenaAni />
            {/*<DataSCFreiburg></DataSCFreiburg>*/}
            <div className="flex flex-col items-center justify-start">
              <p className="headingc mb-5 text-center text-4xl text-white">Tisch reservieren?</p>
              <Modale03></Modale03>
            </div>
            <p className="text-1xl mx-auto mt-5 text-center font-sans text-gray-200 xl:text-2xl">
              Saison vom{' '}
              <span className="font-bold text-yellow-500">{this.state.tabelle.startDate}</span> bis{' '}
              <span className="font-bold text-yellow-500">{this.state.tabelle.endDate}</span>
            </p>
            <p className="xxl:text-4xl mx-auto text-center font-sans text-4xl text-gray-200">
              Die Bundesliga
            </p>
            <p className="mx-auto text-center font-sans text-2xl text-gray-200 xl:text-2xl">
              <span className="font-bold text-yellow-500">
                {this.state.tabelle.currentMatchday}.
              </span>{' '}
              Spieltag
            </p>

         
            <div className="mt-5 mb-5 mx-auto border-2 w-[90vw]  text-[.rem] ">
              <TabelleBL className="mx-auto "></TabelleBL>
            </div>
          </div>

          <div></div>
        </container>
      </>
    )
  }
}