import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import '../css/App.css'
import Script from 'next/script'
//import '../components/Light/css/styles.css'
import { useEffect } from 'react'

import '@fontsource/inter/variable-full.css'
import "../css/Signin.module.css"
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { SessionProvider } from 'next-auth/react'


const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET


if (typeof window !== "undefined") {
  require("jquery");

}

export default function App({ Component,
   pageProps: { session, ...pageProps }, }) {
  return (
 





    <ThemeProvider attribut="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
 
     

      </Head>

      <Analytics />
      <SessionProvider session={session}>
        <LayoutWrapper>
          <Component {...pageProps} />
        </LayoutWrapper>
      </SessionProvider>
    </ThemeProvider>
    
  )
}
