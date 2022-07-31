import { signIn, getCsrfToken, getProviders } from 'next-auth/react'
import Image from 'next/image'
import styles from '../../css/Signin.module.css'

const Signin = ({ csrfToken, providers }) => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
    
    <div className={styles.wrapper} />
    <div className={styles.content}>
      <div className={styles.cardWrapper}>
        <Image src='/katalog_full.svg' width="196px" height="64px" alt='App Logo' style={{ height: '85px', marginBottom: '20px' }} />
        <div className={styles.cardContent}>
          <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
          <input placeholder='Email (Not Setup - Please Use Github)' size='large' />
          <button className={styles.primaryBtn}>
            Submit
          </button>
          <hr />
          {providers &&
            Object.values(providers).map(provider => (
              <div key={provider.name} style={{ marginBottom: 0 }}>
                <button onClick={() => signIn(provider.id)} >
                  Sign in with{' '} {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src='/login_pattern.svg' alt='Pattern Background' layout='fill' className={styles.styledPattern} />
  </div>
  )
}




  export default Signin

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: {
      providers,
      csrfToken
    },
  }
}






/*import { useState } from "react"
import { getProviders, signIn, useSession, getCsrfToken } from "next-auth/react"
import LogoNeu from '../../components/icons/svg/LogoNeu'


export default function SignIn({ csrfToken, email, providers }) {
  return (
    <>
      
      return (
        <h1 className="text-6xl headingF text-yellow-500 text-center mb-12 ">Bloq Rettungsanker</h1>
        <div className="p-3 mb-36 bg-slate-800  h-96 border w-3/12  mx-auto flex flex-col items-center justify-center gap-y-12">
        
        <form method="post" action="/api/auth/signin/email">
        
        <h1 className="text-5xl text-slate-400 mb-24 text-center">Login</h1>
        <LogoNeu className="w-28 h-28 mx-auto "></LogoNeu>
      
      <div className="flex flex-col justify-center items-center gap-y-3">
      <label className="text-white mx-auto text-center flex gap-5 ">
        Email adress
        <input className="text-slate-900 font-mono font-bold" placeholder="hans.albers@st-pauli.de" type="email" id="email" name="email" />
      </label>
      <button className="text-white border ml-5 w-80 rounded-2xl py-2 text-xl cursor-pointer bg-gray-900 hover:bg-gray-500" onClick={() => signIn("email", { email })}>Sign in with Email</button>
      

      </div>
     
    </form>
    {Object.values(providers).map((provider) => {
      if (provider.name==='Email'){
        return;
      }
      return(
        
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)} className="border rounded-xl text-white w-80 py-2 hover:bg-gray-700">
            Sign in with {provider.name}
          </button>
        </div>

      )
})}



        </div>
       </>
  )
}*/





      

       

