import type { NextPage } from 'next'
import Head from 'next/head'
import { ActionItems, Map } from '../components'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { useRouter } from 'next/router'
const Home: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Uber Clone By Jeph</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col bg-blue-500">
        <Map />
        <ActionItems />
      </main>
    </>
  )
}

export default Home
