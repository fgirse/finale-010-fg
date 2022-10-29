import siteMetadata from '../data/siteMetadata'
import headerNavLinks from '../data/headerNavLinks'
import Logo from './icons/svg/LogoNeu'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Infosection from './Infosection'
import Image from 'next/image'
import ScrollTop from '../components/ScrollTopAndComment.js'

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <Infosection />
      <div className="mx-auto flex h-screen w-[97vw] flex-col justify-between bg-slate-900">
        <header className="lg:mx-auto flex items-center justify-end gap-8 py-1 lg:w-full lg:bg-[url('/Wood.svg')] lg:bg-cover lg:bg-no-repeat">
          <div className="leading-2 flex items-center text-base">
            <div className="hidden flex-row items-stretch justify-around sm:flex">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 font-bold uppercase text-slate-50 hover:text-amber-400 dark:text-gray-100                                                               sm:p-4 md:text-[0.66rem] lg:text-[.88rem] 2xl:text-[1.85rem]"
                >
                  <div className="lg:w-[4rem] 2xl:w-24">
                    <Image
                      className="hover:-translate  hover:-translate-y-1 hover:scale-110 hover:transform"
                      src="/Bulleye.svg"
                      height="840"
                      width="840"
                      layout="responsive"
                      alt="Illustration"
                    />
                  </div>
                  {link.icon}
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <ScrollTop />
        <Footer />
      </div>
    </>
  )
}

export default LayoutWrapper
