import styles from './styles.module.scss'
import { BsGithub } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = false;

  return isUserLoggedIn ? (
    <button 
      className={styles.signInButton}
      type="button">
      <BsGithub color="#04d361" />
      Álvaro Sena
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ): (
    <button 
      className={styles.signInButton}
      type="button">
      <BsGithub color="#eba417" />
      Sign with github
    </button>
  )
}