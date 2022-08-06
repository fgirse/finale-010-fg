import React from 'react'
import Modale03 from '../components/Modale/Modal03'
import Animation from '../components/Animationen/HeroTimeline'
import Link from '../components/Link'
import NukaCarousel from '../components/NukaCar'
import Image from 'next/image'
import LogoNeu from '../components/icons/svg/Logo_neu.svg'
import Flensburger from '../components/icons/svg/Flensburger'
import Ganter from '../components/icons/svg/Ganter'
import Astra from '../components/icons/svg/Astra'
import sketchy from 'theme-ui-sketchy-preset'
import { ThemeProvider, Card, Text } from 'theme-ui'
import tickerSCF from '../components/GetDataSCFreiburg';


const theme = {
  ...sketchy,
}

const Home = () => {
  return (
    <>
    <section className="mx-auto flex w-full flex-col">
    
          
    <div className="bg-top-right mx-auto h-[100vh] bg-slate-900/70 bg-[url('/collage02.png')] bg-[length:100%_77%] bg-no-repeat lg:h-screen lg:w-full lg:bg-slate-900 lg:bg-[url('/Test03.png')] lg:bg-[length:100%_75%] lg:bg-no-repeat">
        <Animation/>
        <div className="bg red-500 z-50 relative w-[33vw] h-36 top-[1vw] left-[33vw]">
                    <tickerSCF className="absolute left-50 w-full h-20"/>
                         <h1 className="text-[3rem] text-white text-center font-mono">SC FREIBURG TICKER</h1>   
        
        
        
        
        
        
        
        
        
        
        
        </div>
        </div>
   
</section>

{/*======================================================================= SECTION ÖFFNUNGSZEITEN BEGRÜSSUG ===========================================================*/}
<section className=" mx-auto -mt-[26vh] w-full bg-slate-900 lg:mt-[12vh] 2xl:mt-5">
    {/*======================================================================= FLEXBOX ===========================================================*/}
    

    <div className=" h-min-  mx-auto flex w-11/12 flex-col items-center justify-center lg:-mt-[12vh] lg:flex-row lg:items-start lg:justify-start lg:gap-20 xl:-mt-60">
   
        <div className=" roundfulled-3xl bg-blue-900/10 lg:w-full">
            <div className="flex flex-col items-center justify-start">
                <p className="py-6 px-12 text-center text-4xl font-bold uppercase tracking-tight text-yellow-500 dark:text-white md:text-4xl xl:text-5xl">
                    öffnungzeiten
                    
                </p>
                <p className="text-center text-xl text-gray-300 sm:text-xl md:text-base lg:text-xl">
                    Montag-Donnerstag: 18 bis 24 Uhr
                </p>
                <p className="sm:text-1xl text-xl text-gray-300  md:text-base lg:text-xl xl:text-center">
                    Freitag und Samstag: 15 bis 03 Uhr
                </p>
                <p className="sm:text-1xl xl:text- text-center text-xl   text-gray-300 md:text-base lg:text-xl">
                    Sonntag: Ruhetag
                </p>
            </div>
        </div>

        <div className=" w -2/3 lg:bg--900/10">
            <div className="flex flex-col items-center justify-center lg:flex-row">
                <div className="flex flex-col lg:flex">
                    <h5 className="mb-3 py-6 text-center font-sans text-5xl font-bold tracking-tight text-yellow-500 dark:text-white xl:text-6xl">
                        "Moin Moin Moin"
                    </h5>
                    <p className="z-5  mb-1 w-full text-justify text-[.95rem] font-normal text-gray-300 dark:text-gray-400 lg:text-[1.3rem] xl:text-[2.33rem] xl:leading-10">
                        <img
                            className="shape-lighthouse h-48 w-48 lg:h-3/5 lg:w-6/12"
                            src="/lighthouse4.png"
                            alt="leuchtturm illustration"
                            layout="responsive" />
                        In Hommage an eine typische Kiez-Kneipe auf St.Pauli, haben wir im Herzen von
                        Freiburg ein Lokal eröffnet, welches es so südlich der Elbe wohl kein zweites Mal
                        gibt. Ausgebaut im Stile eines Schiffrumpfes, ist der im Herzen der Altstadt
                        gelegene Rettungsanker-Freiburg idealer Treffpunkt um nach Feiereabend etwas zu
                        entspannen und nette Leute kennenzulernen. Wir sind stolz auf unser buntes,
                        internationales Publikum. Unser Rettungsanker ist auch ideale Location zur
                        Durchführung Ihres privaten oder geschäftlichen Events{' '}
                        <Link className="h-16 w-20 cursor-pointer rounded-xl bg-slate-500 px-2 text-center text-xl hover:bg-sky-900 ">
                            <span className="text-center text-xl">
                                <a href="./events">INFO                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                </a>
                            </span>{' '}
                        </Link>{' '}
                        &nbsp;Sprechen Sie uns an oder kontaktieren Sie uns vor Ort oder schreiben Sie uns eine
                        email.Wir freuen uns Sie im Rettungsanker begrüsssen zu dürfen <br />
                        <br />
                        Michael Schreck und das Team des Rettungsankers
                    </p>
                </div>

            </div>
            <button
                type="button"
                className="mx-auto hover:bg-orange-700- relative mt-6 flex w-6/12 flex-col items-center justify-center rounded-lg border border-transparent bg-orange-700 px-4 py-2 font-sans text-2xl font-medium text-gray-200 hover:bg-yellow-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-3xl lg:w-2/12 lg:mb-20 lg:text-2xl xl:mt-2 lg:flex lg:flex-col lg:items-center"
            >
                <svg
                    className="w-16 lg:w-20 "
                    fill="#ffffff"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <a className="ui btn" href="mailto:rettungsanker-freiburg@gmx.de?">
                    SOS e-mail
                </a>
            </button>
        </div>
    </div>

    {/*======================================================================= ENDE FLEXBOX ===========================================================*/}
</section>
<section className=" bg-slate-900">
    <div className="hidden grid-rows-2 gap-3 overflow-hidden md:grid md:grid-cols-3 lg:grid">
        <div className="relative z-40 mx-auto w-10/12 md:w-11/12">
            <Image
                className="relative z-40"
                width="619"
                height="696"
                src="/bulleye.png"
                layout="responsive"
                alt="Bullauge" />
        </div>
        <div className="mx-auto w-10/12 md:w-11/12">
            <Image width="619" height="696" src="/bulleye.png" layout="responsive" alt="Bullauge" />
        </div>
        <div className="mx-auto w-10/12 md:w-11/12">
            <Image width="619" height="696" src="/bulleye.png" layout="responsive" alt="Bullauge" />
        </div>
    </div>
</section>
{/*======================================= SECTION KNEIPE =======================================================================*/}


<section className="mx-auto w-full bg-slate-900 py-12">
    <h1 className="headingF text-center text-7xl text-yellow-600 lg:-mt-[58vh] lg:text-[12rem]">
        Die Kneipe
    </h1>

    <div
        className="mx-auto relative overflow-hidden rounded-lg w-11/12 bg-[url('/Hero-png)] bg-contain bg-no-repeat lg:bg-cover lg:bg-no-repeat p-12 text-center"
        style={{ backgroundImage: "url('/Hero.png')", height: '100vh',width:"100vw"}}
    >
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed">
            {/* <div className="flex h-full items-center justify-center">
   <div className="text-white">
     <h2 className="mb-4 text-4xl font-semibold">Heading</h2>
     <h4 className="mb-6 text-xl font-semibold">Subheading</h4>
   </div>
</div>*/}
        </div>
    </div>
</section>
    {/*========================================================== SECTION INFO ==============================================================*/}
    <section className="-mt-[86vh] lg:mt-0 bg-slate-900">
        <ThemeProvider theme={theme}>
            <div className="lg:items-center mx-auto -mt-1 grid grid-cols-1 items-center justify-center p-16 md:grid-cols-3 md:justify-around  md:p-6 lg:max-w-8xlg:w-11/12 lg:gap-x-5 xl:mt-[vh]">
                <Card
                    className=" w-[90vw] justify-self-center lg:w-10/12"
                    mb={3}
                    mt={20}
                    sx={{
                        maxWidth: 700,
                        padding: '12px',
                        color: '#ffffff',
                        backgroundColor: 'rgba(104,11,11,.9)',
                        border: '3px white solid',
                        boxShadow: '10px 5px 10px rgba(254, 254, 254, 0.3)'
                    }}
                    onGotPointerCapture={2}
                >
                    <div className=" border- mx-auto border-gray-100 p-4 w-full ">
                        <Image src="/LogoNeu.png" object-fit="cover" layout="responsive" height="260" width="250" alt="Illustration"></Image>
                    </div>
                    <Text>
                        <p className="text mt-10 text-center text-2xl font-bold uppercase">Kiezkneipe</p>
                        <p className="text-center text-xl">Gemütlich nordisches Ambiente im Herzen der Altstadt Freiburgs gelegen. Orginales Kiez
                            und Waterkant-Feeling mit Astra , Flensburger & Co. Frisches würziges Ganter Pils vom
                            Fass. Qualitativ hochwertige Weine aus der Region (Weingut Heinemann - Scherzingen).
                            Grosse Auswahl an Longdrinks und Cocktails. Besonders beliebt Captains Blaubär und
                            Störtebeckers Love. Eine genaue Auflistung unseres Angebotes ist unter der Rubrik
                            Drinks hinterlegt</p>
                    </Text>
                </Card>

                <Card
                    className=" w-[90vw] justify-self-center lg:w-10/12"
                    mb={3}
                    mt={20}
                    sx={{
                        maxWidth: 700,
                        padding: '12px',
                        color: '#ffffff',
                        backgroundColor: 'rgba(104,11,11,.9)',
                        border: '3px white solid',
                        boxShadow: '10px 5px 10px rgba(254, 254, 254, .3)'
                    }}
                    onGotPointerCapture={2}
                >


                    <div className="w-full border- object-contain mx-auto border-gray-100 p-4">
                        <Image src="/Zeichnung-1.svg
                        " layout="responsive" height="610" width="610" alt="fussball"></Image>


                    </div>
                    <Text>
                        <p className="text mt-10 text-center text-2xl font-bold uppercase">Sportarena</p>
                        <p className="text-center text-xl">Jeden Samstag-Spieltag der laufenden Bundesliga-Saison Live TV Event in unserer
                            Sportarena natürlich mit Schwerpunkt unseres SC Freiburgs. Wann immer möglich auch
                            Spiele der Champions League und natürlich der grossen Turniere von EM und WM. Bei Top
                            Spielen des SC Freiburg mit grosser Publikumsnachfrage sind Reservierungen über unser
                            Booking-Tool zu empfehlen - Unten folgender Button und Du bist direkt dabei !!</p>
                    </Text>
                </Card>
                <Card
                    className=" w-[90vw] justify-self-center lg:w-10/12"
                    mb={3}
                    mt={20}
                    sx={{
                        maxWidth: 700,
                        padding: '12px',
                        color: '#ffffff',
                        backgroundColor: 'rgba(104,11,11,.9)',
                        border: '3px white solid',
                        boxShadow: '10px 5px 10px rgba(254, 254, 254, .3)'
                    }}
                    onGotPointerCapture={2}
                >
                    <div className="border- mx-auto border-gray-100">
                        <Image src="/Albers-white.png" object-fit="cover" layout="responsive" height="250" width="250" alt="hans_albers"></Image>
                    </div>
                    <Text>
                        <p className="text mt-10 text-center text-2xl font-bold uppercase">Blonder Hans</p>
                        <p className="text-center text-xl">Hans Phillip August Albers (* 22.September 1891 in Hamburg , 24. Juli 1960 in Berg,
                            Bayern) war ein deutscher Schauspieler und Sänger, der als "blonder Hans" zum
                            Volksidol wurde. Zu den bekanntesten Spielfilmen in denen er mitwirkte gehören "der
                            Mann, der Sherlock Holmes war" (1937), "Münchhausen" (1943), "die grosse Freiheit
                            Nr.7" (1943) sowie "Auf fer Reeperbahn Nachts um halb eins"</p>
                    </Text>
                </Card>
            </div>
        </ThemeProvider>
    </section>
    {/*========================================================== SEKTION BIERE ENDE ==============================================================*/}


    <section>

    <div className=" flex flex-col items-center lg:flex-row lg:justify-center ">


        <div className=" w-9/12 rounded-3xl bg-white/5 p-3">
            <p className='text-center text-slate-100 py-4 text-[.85rem]'>Sitze in der ersten Reihe und reserviere Tisch in der Sportarena!!!</p>
            <Modale03 />
        </div>



    </div>
</section>
{/*======================================= =================== ENDE SECTION ===============================================================*/}
{/*========================================================== SECTION BIERE ==============================================================*/}
<section className="bg-slate-900">
    <ThemeProvider theme={theme}>
        <div className="lg:max-w-8xl lg:item11s-center mx-auto -mt-1 grid grid-cols-1 items-center justify-center p-16 md:grid-cols-3 md:justify-around  md:p-6 lg:w-11/12 lg:gap-x-5 xl:mt-[vh]">
            <Card
                className="justify-self-center"
                mb={3}
                mt={20}
                sx={{
                    maxWidth: 700,
                    padding: '12px',
                    color: '#ffffff',
                    backgroundColor: 'orange',
                    border: '3px white solid',
                    boxShadow: '10px 5px 10px rgba(244, 216, 154, 0.9)'
                }}
                onGotPointerCapture={2}
            >
                <div className="border- mx-auto border-gray-100">
                    <Astra object-fit="cover" height="25vh" width="100%"></Astra>
                </div>
                <Text>
                    <p className="text mt-10 text-center text-2xl font-bold uppercase">Astra Bier</p>
                    <p className="text-center text-xl">natürlich direkt vom Kiez in den Anker</p>
                </Text>
            </Card>

            <Card
                className="justify-self-center"
                mb={3}
                mt={20}
                sx={{
                    maxWidth: 700,
                    padding: '12px',
                    color: '#ffffff',
                    backgroundColor: 'orange',
                    border: '3px white solid',
                    boxShadow: '10px 5px 10px rgba(244, 216, 154, 0.9)'
                }}
                onGotPointerCapture={2}
            >
                <div className="border- mx-auto border-gray-100">
                    <Ganter aobject-fit="cover" height="25vh" width="100%"></Ganter>
                </div>
                <Text>
                    <p className="text mt-10 text-center text-2xl font-bold uppercase">Ganter Bier</p>
                    <p className="text-center text-xl">köstliches Ganter-Bräu vom Fass</p>
                </Text>
            </Card>
            <Card
                className="justify-self-center"
                mb={3}
                mt={20}
                sx={{
                    maxWidth: 700,
                    padding: '12px',
                    color: '#ffffff',
                    backgroundColor: 'orange',
                    border: '3px white solid',
                    boxShadow: '10px 5px 10px rgba(244, 216, 154, 0.9)'
                }}
                onGotPointerCapture={2}
            >
                <div className="border- mx-auto border-gray-100">
                    <Flensburger object-fit="cover" height="25vh" width="100%"></Flensburger>
                </div>
                <Text>
                    <p className="text mt-10 text-center text-2xl font-bold uppercase">Flensburger</p>
                    <p className="text-center text-xl">das blonde Herbe aus dem hohen Norden</p>
                </Text>
            </Card>
        </div>
    </ThemeProvider>
</section>


{/*========================================================== SEKTION BIERE ENDE ==============================================================*/}
{/*========================================================== SEKTION CAROUSSEL ===============================================================*/}
<section className=" mx-auto w-full bg-slate-900 py-2 md:mx-auto md:w-full lg:py-20">
    <div className="mb-2 w-5/12 lg:-mt-2 lg:w-3/12 lg:p-8 ">
        <Image
            src="/Albers-white.png"
            alt="Impressionen"
            height="208 "
            width="195"
            layout="responsive" />
    </div>
    <h1 className="headingB lg:headingA mb-6 text-center text-5xl text-gray-50 lg:-mt-20 lg:text-[4.66rem] lg:text-yellow-500">
        Impressionen Rettungsanker
    </h1>

    <div className="mx-auto w-9/12 lg:border-4  lg:border-slate-100 lg:mt-[5vh] lg:w-6/12 lg:h-auto">
        <NukaCarousel />
    </div>
    <p className="mt-1 text-center text-xs text-white lg:text-lg">
        Impressionen aus dem Rettungsanker
    </p>
</section>
{/*========================================================== SECTION CAROUSSEL ENDE==============================================================*/}
<hr className="mx-auto mt-[40vh] w-full md:w-11/12 lg:mt-0 " />
{/*========================================================== SECTION IMPRESSUM          =================================================*/}

{/*======================================= SECTION IMPRESSUM ENDE =======================================================================*/}
</>
  )
}

export default Home