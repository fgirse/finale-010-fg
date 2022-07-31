import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image' 
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <h1 className='text-white text-center text-sm'></h1>  <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
       <h1 className='text-white text-center text-sm'>nicht angemeldet</h1> <br />
      <button className="drop-shadow-2xl shadow-slate-800 border rounded-2xl text-[1.666rem] fond-black w-40 text-white bg-sky-800 hover:bg-amber-400" onClick={() => signIn()}>Login</button>
    </>
  )
}