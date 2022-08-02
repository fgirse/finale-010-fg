import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image' 
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
      <div className="flex justify-center gap-x-20 items-baseline">
        <h1 className='border rounded-xl w-96 text-lime-400 mt-12 py-1 px-3 text-center text-xl'>angemeldet: {session.user.email}</h1>  <br />
        <button className="border rounded-2xl py-1 px-2 text-[1.666rem] shadow-2xl shadow-slate-700 fond-black w-40 text-white bg-slate-800 hover:bg-amber-400 text-center" onClick={() => signOut()}>Abmelden</button>
        </div>
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