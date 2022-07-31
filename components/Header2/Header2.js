import { signOut, useSession } from "next-auth/react"
import styles from './Header2.module.css' //The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and a/voids any flash incorrect content on initial page load.
export default function Header2() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header className="">
      <div className="">
        <p className={`nojs-show ${!session && loading ? styles.loading : styles.loaded}`} >
          {session?.user && (
            <>
              {session.user.image && (
                <span
                  style={{ backgroundImage: `url('${session.user.image}')` }}
                  className=""
                />
              )}
              <span className="">
                <small>Signed in as</small>
                <br />
                <strong>{session.user.email ?? session.user.name}</strong>
              </span>
              <a
                href={`/api/auth/signout`}
                className=""
                onClick={(e) => {
                  e.preventDefault()
                  signOut()
                }}
              >
                Sign out
              </a>
            </>
          )}
        </p>
      </div>
    </header>
  )
}