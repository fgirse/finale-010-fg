import { useState } from 'react'
import { getCsrfToken } from 'next-auth/react'
import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'

import { getProviders, getSession, signIn } from 'next-auth/react'

export default function SignIn({ providers, csrfToken, session }) {
  return (
    <>
      <section className="mx-auto mt-8 flex w-4/12 flex-col items-center border bg-slate-800">
        <form method="post" action="/api/auth/signin/email">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="mt-12 flex flex-col gap-y-3 ">
            <label className="text-gray-300">
              Email address
              <input
                className="ml-2 font-mono text-gray-800"
                type="email"
                id="email"
                name="email"
                placeholder="hans-albers@reeperbahn.de"
              />
            </label>
            <button
              className="mb-2 w-72 rounded-xl border bg-gray-500 py-2  px-3 text-center text-white"
              type="submit"
            >
              Sign in with Email
            </button>
          </div>
        </form>

        <form method="post" action="/api/auth/callback/credentials">
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <div className="mt-12 flex flex-col gap-y-3 ">
            <label className="text-gray-300">
              Username
              <input className="ml-2" name="username" type="text" />
            </label>
            <label className="text-gray-300">
              Password
              <input className="ml-2" name="password" type="password" />
            </label>
            <button
              className="mb-2 w-72 rounded-xl border bg-gray-500 py-2  px-3 text-center text-white"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>

        <div className="mt-12">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="mb-2 w-72 rounded-xl border bg-gray-500 py-2  px-3 text-center text-white"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps(context) {
  const { req } = context
  const session = await getSession({ req })

  if (session) {
    return {
      redirect: { destination: '/' },
    }
  }

  return {
    props: {
      providers: await getProviders(context),
      csrfToken: await getCsrfToken(context),
    },
  }
}
