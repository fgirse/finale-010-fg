import React from 'react';
import LogoNeu from '../components/icons/svg/LogoNeu';
import Link from 'next/link';
import { useState} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"


export default function Infosection ()  {
  const { data: session } = useSession()

  console.log(session)
                     if (session) {
                      
                      return(

                      <>
                      <section className=" overflow-hidden sticky -top-0 z-50 h-20 w-[100vw] mx-auto md:hidden lg:bg-amber-800 lg:block :bg-block">
                          <div className="mx-auto w-full flex flex- justify-around items-end md:flex-row md:items-center md:justify-start md:gap-x-5">
                              <div className="">
                                    <LogoNeu className="ml-5 mt-3 p-1 w-24 h-12 lg:w-40 lg:h-16"></LogoNeu>
                              </div>

                              <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-2">
                                <svg className="w-6 h-6" fill="none" stroke="#fff200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">0761 38386747</p>
                              </div>

         
                              <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
                                      <svg className="w-6 h-6" fill="#fff200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                      <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">rettungsanker-freiburg@gmx.de</p>
                              </div>

                              <div className='flex flex-row justify-start items-center"'>


                              </div>
                              <h1 className="border rounded-2xl  py-1 px-2 text-xs text-white w-48 font-mono">login: {session.user.email}</h1>
                                  <button className='drop-shadow-2xl shadow-slate-800 border rounded-2xl text-[1.666rem] fond-black w-40 text-white bg-sky-800 hover:bg-amber-400 'onClick={() => signOut()}>Log out</button> 
                             <Link href="/rettungsankerChat"><a  className='border rounded-2xl text-[1.666rem] shadow-2xl shadow-slate-700 fond-black w-40 text-white bg-slate-800 hover:bg-amber-400 text-center'>Blog</a></Link> 
                              </div>
                            </section>
                            </>

                      )
                    }

                    return (

                    <>
                    <section className=" overflow-hidden sticky -top-0 z-50 h-20 w-[100vw] mx-auto md:hidden lg:bg-amber-800 lg:block :bg-block">
                        <div className="mx-auto w-full flex flex- justify-around items-end md:flex-row md:items-center md:justify-start md:gap-x-5">
                            <div className="">
                                  <LogoNeu className="ml-5 mt-3 p-1 w-24 h-12 lg:w-40 lg:h-16"></LogoNeu>
                            </div>

                            <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-2">
                              <svg className="w-6 h-6" fill="none" stroke="#fff200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                              <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">0761 38386747</p>
                            </div>

       
                            <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center gap-x-1">
                                    <svg className="w-6 h-6" fill="#fff200" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                                    <p className="font-sans font-bold text-gray-100 lg:text-sm xl:text-lg 2xl:text-xl ">rettungsanker-freiburg@gmx.de</p>
                            </div>

                            <div className='flex flex-row justify-start items-center"'>


                            </div>
                            <h1 className="text-yellow-200 font-black font-mono animate-bounce running"> nicht angemeldet !!! </h1><br />
                                                <button className='drop-shadow-2xl border rounded-2xl text-[1.666rem] shadow-slate-700 fond-black w-40 text-white bg-sky-600 hover:bg-amber-400 hover:animate-bounceInUp' onClick={() => signIn()}>LOGIN
           
                                  </button>
                            </div>
                          </section>
                      </>
                    )
                    
                  }
                 
                  