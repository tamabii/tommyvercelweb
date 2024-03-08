'use client'

import { signOut } from 'next-auth/react'
import React from 'react'

const SignoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className='flex items-center py-3 px-4 hover:bg-lightblue w-full hover:text-white'
    >
      Logout
    </button>
  )
}

export default SignoutButton