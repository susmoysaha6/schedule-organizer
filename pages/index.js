import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { user, googleSignIn, logOut } = useContext(AuthContext);

  const handleGoogle = () => {
    googleSignIn()
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.error(err))
  }

  return (
    <div >
      <Head>
        <title>SCHEDULE ORGANIZER</title>
      </Head>
      <Banner />
      <Link href='/blog'>Blog</Link>
      {
        !user ?
          <p>Please login</p>
          :
          <input type="text" className='input' />
      }
    </div>
  )
}
