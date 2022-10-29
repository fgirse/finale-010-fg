import React from 'react'
import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className="flex h-screen flex-col items-center justify-between">
          <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-start lg:gap-x-5">
            <h1 className="mt-12 w-96 rounded-xl border py-1 px-3 text-center text-xl text-lime-400">
              angemeldet: {session.user.email}
            </h1>{' '}
            <br />
            <button
              className="fond-black w-48 rounded-2xl border bg-slate-800 py-1 px-2 text-center text-[1.0rem] text-white shadow-2xl shadow-slate-700 hover:bg-amber-400"
              onClick={() => signOut()}
            >
              Abmelden
            </button>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <h1 className="text-center text-sm text-white">nicht angemeldet</h1> <br />
      <button
        className="fond-black w-40 rounded-2xl border bg-sky-800 text-[1.666rem] text-white shadow-slate-800 drop-shadow-2xl hover:bg-amber-400"
        onClick={() => signIn()}
      >
        Login
      </button>
    </>
  )
}
