import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'
import Iframe from 'react-iframe'
import Logo from '../icons/svg/LogoNeu'

function Modal12() {
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="inset-0 flex items-start justify-start">
        <button
          type="button"
          onClick={openModal}
          className="text-lg focus-visible:ring-opacity-75 rounded-md px-4 py-2 font-medium text-white hover:text-yellow-400 ty-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Datenschutz
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0  bg-slate-800/50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-24 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl border border-gray-500 bg-slate-900 text-left align-middle shadow-xl transition-all lg:p-24">
                  <Dialog.Title
                    as="h3"
                    className="text-1xl headingB py-2 text-center font-medium leading-6 text-slate-500 lg:text-3xl"
                  >
                    Datenschutz
                  </Dialog.Title>

                  <section className="items-between gray-900 flex flex-col justify-end lg:mt-1 xl:py-2">
                    <div className="lg: mx-auto mt-8 flex  flex-col items-center justify-start md:mt-20 md:w-6/12 lg:mx-auto">
                      <Logo className="h-24 w-24 bg-red-900 p-4 lg:h-96 lg:w-[12vw]"></Logo>
                    </div>
                    <div>
                      <h1 className="headingB lg:headingA mx-auto text-center text-[2rem] text-white lg:text-[6rem] lg:text-gray-600">
                        Datenschutz
                      </h1>
                      
                    <button
                      type="button"
                      className="lg-py-1 inline-flex justify-center rounded-md border border-white bg-green-100 px-4 py-2 text-sm font-medium text-cyan-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 lg:text-[2.0rem]"
                      onClick={closeModal}
                    >
                      zurück
                    </button>
                  </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      
    
    </>
  )
}
export default Modal12