import React from 'react'
import Image from 'next/image'
import HeroTeam from '../components/Animationen/HeroTeamAnimated'

const team = () => {
  return (
    <>
     
        <div className=" mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-0">
            <span>
              <HeroTeam />
            </span>

            <Image
              className="mx-auto "
              src="/LogoAlt.png"
              layout="responsive"
              width="1000"
              height="150"
              alt="Portrait"
            />
          </div>
          <div className="-mt-1 flex flex-wrap">
            <div className="-mt-12 w-full p-1 md:w-1/2 lg:w-1/3">
              <div className="flex items-center justify-center  rounded-lg py-12">
                <div className="w-60 text-center">
                  <Image
                    className="mx-auto rounded-full"
                    src="/Matrose.png"
                    layout="responsive"
                    width="200"
                    height="250"
                    alt="Portrait"
                  />
                  <h3 className="font-heading mb-1 text-4xl font-bold">Simon</h3>

                  <p className="mb-3 text-3xl text-amber-400">Obermaat</p>
                  <p className="text-center text-lg text-gray-100">
                    Simon ist Teammitglied der ersten Stunde. Im richtigen Leben studiert Simon an
                    der Uni Erziehungswissenschaften und hat gerade seinee Master absolviert. Simon
                    ist ausgewiesener SC Freiburg Fan und wann immer möglich begleited er das Team
                    zu den Auswärtsspielen
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-0 w-full p-4 md:w-1/2 lg:w-1/3">
              <div className="flex items-center justify-center  rounded-lg py-12">
                <div className="h-[16vh] w-[16vw] text-center">
                  <Image
                    className="order-first mx-auto rounded-full "
                    src="/portrait-mick1.png"
                    layout="responsive"
                    width="300"
                    height="390"
                    alt="Portrait"
                  />
                  <h3 className="font-heading mt-111111111111112 mb-1 text-4xl font-bold">Mick</h3>
                  <p className="mb-2 text-3xl text-amber-400">Captain</p>
                  <p className="text-center text-lg text-gray-100">
                    {' '}
                    Volker Schneider und Michael Schreck haben 2017 die Idee und das Konzept des
                    Rettungsankers initiert und liessen den Kahn in September 2017 vom Stapel
                    laufen. Seit Januar 2020 zeigt sich Michael nun in alleiniger Verantwortung für
                    den Rettungsanker und steurt das Schiff in diesen unruhigen Zeiten
                    verantwortungsvoll durch die hohen Wogen{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="-mt-20 w-full p-4 md:w-1/2 lg:w-1/3">
              <div className="flex items-center justify-center  rounded-lg py-12">
                <div className="w-60 text-center">
                  <Image
                    className="mx-auto rounded-full"
                    src="/Matrose.png"
                    layout="responsive"
                    width="200"
                    height="250"
                    alt="Portrait"
                  />
                  <h3 className="font-heading mb-1 text-4xl font-bold">Anne</h3>
                  <p className="mb-2 text-3xl text-amber-400">I Offizierin</p>
                  <p className="text-center text-lg text-gray-100">
                    {' '}
                    Auch Anne ist Teammitglied derersten Stunde nach Stapelablauf des
                    Rettungsanker-Mit Ihrer langjährigen Gastroerfahrung ist sie ein wichtiger
                    Pfeiler im Team des Rettungsankers
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <div className="flex items-center justify-center  rounded-lg py-12">
                <div className="text-center">
                  <Image
                    className="mx-auto rounded-full"
                    src="/matrose.png"
                    layout="responsive"
                    width="200"
                    height="250"
                    alt="Portrait"
                  />
                  <h3 className="font-heading mb-1 text-4xl font-bold">Kalim</h3>
                  <p className="text-3xl text-gray-400">Leichtmatrose</p>
                </div>
              </div>
            </div>
            {/*<div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="flex items-center justify-center  rounded-lg py-12">
              <div className="text-center">
                <Image
                  className="mx-auto rounded-full"
                  src="/matrose.png"
                  layout="responsive"
                  width="200"
                  height="250"
                  alt="Portrait"
                />
                <h3 className="font-heading mb-1 text-4xl font-bold">Simon</h3>
                <p className="text-3xl text-gray-400">Obermaat</p>
              </div>
            </div>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <div className="flex items-center justify-center  rounded-lg py-12">
              <div className="text-center">
                <Image
                  className="mx-auto rounded-full"
                  src="/matrose.png"
                  layout="responsive"
                  width="200"
                  height="250"
                  alt="Portrait"
                />
  <h3 className="font-heading mb-1 text-4xl font-bold">Simon</h3>*/}
        
    </div>
    </div>
    
   </>
  )

}

export default team
