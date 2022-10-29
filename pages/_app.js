//import '@/css/prism.css'
import '../styles/main.css'
//hoto/css/prettyPhoto.css"
//ipsy.css"
//import "../public/html6/css/jquery.timeline.css"
//import 'katex/dist/katex.css'
import Script from 'next/script'
import { useEffect } from 'react'
import '@fontsource/inter/variable-full.css'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { SessionProvider } from 'next-auth/react'
import $ from 'jquery'

if (typeof window !== 'undefined') {
  require('jquery')
}

export default function App({ Component, pageProps: { session, ...pageProps } }) {
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
