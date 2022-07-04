import styles from './styles.module.scss'
import { BsGithub } from 'react-icons/bs'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button 
      className={styles.signInButton}
      type="button"
      onClick={() => signOut()}
      >
      <BsGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ): (
    <button 
      className={styles.signInButton}
      type="button"
      onClick={() => signIn('github')}
      >
      <BsGithub color="#eba417" />
      Sign with github
    </button>
  )
}