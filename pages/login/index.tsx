import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'

import { auth, provider } from '../../firebase'
const LoginPage = () => {
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/')
      }
    })
  }, [])
  return (
    <div className=" mx-auto mt-8 flex max-w-2xl flex-col items-start justify-center px-4">
      <img
        className="h-24"
        src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
        alt=""
      />
      <h1 className="mb-4 pt-4 text-5xl text-gray-500">
        Log in to access Your account
      </h1>

      <img
        className="h-40"
        src="https://i.ibb.co/CsV9RYZ/login-image.png"
        alt=""
      />

      <button
        onClick={() => signInWithPopup(auth, provider)}
        className=" mt-4 w-full bg-black py-1 text-white"
      >
        Sign in with Google
      </button>
    </div>
  )
}

export default LoginPage
