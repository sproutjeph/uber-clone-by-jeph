import React, { useEffect, useState } from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'
import { auth } from '../../firebase'
const ActionHeader = () => {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  return (
    <header className="flex items-center justify-between">
      <img
        className="h-28"
        src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"
        alt="Uber Logo"
      />
      <div
        className="flex cursor-pointer items-center"
        onClick={() => signOut(auth)}
      >
        <h4 className="mr-4 w-20 text-sm">{user?.name}</h4>
        <img
          className=" h-20 w-20 rounded-full border-gray-500 p-px "
          src={user?.photoUrl}
          alt="user profile photo"
        />
      </div>
    </header>
  )
}

export default ActionHeader
