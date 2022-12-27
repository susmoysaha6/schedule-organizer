import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Link from 'next/link';
import Banner from '../components/Banner/Banner';
import Todos from '../components/Todos/Todos';


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


  return (
    <div >
      <Head>
        <title>SCHEDULE ORGANIZER</title>
      </Head>
      <Banner />

      {
        !user ?
          <div className='flex flex-col'>
            <p className='text-3xl text-center my-10 font-semibold'>Please login to manage your schedule</p>
            <button onClick={handleGoogle} className='btn w-1/2 mx-auto bg-blue-800 '>Sing In</button>
          </div>
          :
          <Todos />
      }
    </div>
  )
}
