'use client'

import { useSession } from 'next-auth/react'


import AuthHomeView from './sections/authHomeView'
import NonAuthHomeView from './sections/NonAuthHomeView'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      {session ? (<AuthHomeView/>

      ) : (
<NonAuthHomeView/>
      )}
    </>
  )
}