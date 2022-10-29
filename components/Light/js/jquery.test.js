import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

export default function JqueryTest() {
  useEffect(() => {
    window.welcomeMessage = 'Welcome to CodingDeft!'
  }, [])

  return <div className={styles.container}>Hello</div>
}
