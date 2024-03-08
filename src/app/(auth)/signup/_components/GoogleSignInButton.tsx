'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'


const GoogleSignInButton = () => {
  return (
    <button
      onClick={() => signIn('google', {
        callbackUrl: '/profile',
      })}
      className='shadow p-2 border border-offwhite font-semibold text-sm rounded flex flex-row items-center space-x-2'>
      <Image src='googleIcon.svg' alt='google button' width={20} height={20}/>
      <span className='text-slate'>Login dengan Google</span>
    </button>
  )
}

export default GoogleSignInButton