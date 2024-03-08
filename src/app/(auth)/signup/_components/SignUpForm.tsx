'use client'

import { registerUser } from '@/actions/registerUser'
import Button from '@/sharedcomponents/Button'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'

const SignUpForm = () => {
  const [payload, setPayload] = useState({
    email: '',
    password: ''
  })
  const [emailError, setEmailError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append('email', payload.email)
    data.append('password', payload.password)

    const response = await registerUser(data)
    console.log(response)
    if (response && response.error) {
      setEmailError(response.error)
    }
  }

  return (
    <form className='flex flex-col space-y-5'>
      <div className='grid gap-1'>
        {
          emailError && (
            <p className='text-red text-xs font-semibold'>{emailError}</p>
          )
        }
        <div className='group focus-within:outline-1 focus-within:outline focus-within:border-primary focus-within:outline-primary rounded border border-offwhite p-2 flex flex-row items-center gap-2'>
          <Image src={'mail.svg'} alt='email logo' width={20} height={20} />
          <input
            type="email"
            className='text-slate-600 text-sm font-semibold w-full focus:outline-none'
            placeholder='Email'
            required
            value={payload.email}
            onChange={(e) => setPayload({ ...payload, email: e.target.value })}
            id='email'
            name='email'
          />
        </div>
      </div>
      <div className='group focus-within:outline-1 focus-within:outline focus-within:border-primary focus-within:outline-primary rounded border-offwhite border p-2 flex flex-row items-center gap-2'>
        <Image src={'lock.svg'} alt='email logo' width={20} height={20} />
        <input
          type="password"
          className='text-slate-600 text-sm font-semibold w-full focus:outline-none'
          placeholder='Password'
          required
          value={payload.password}
          onChange={(e) => setPayload({ ...payload, password: e.target.value })}
          id='password1'
          name='password1'
        />
      </div>
      <div className='group focus-within:outline-1 focus-within:outline focus-within:border-primary focus-within:outline-primary rounded border border-offwhite p-2 flex flex-row items-center gap-2'>
        <Image src={'lock.svg'} alt='email logo' width={20} height={20} />
        <input
          type="password"
          className='text-slate-600 text-sm font-semibold w-full focus:outline-none'
          placeholder='Konfirmasi Password'
          required
          id='password2'
          name='password2'
        />
      </div>
      <div className='flex justify-between text-xs font-semibold text-slate-500'>
        <div className='flex flex-row items-center space-x-2'>
          <input type="checkbox" name="remember" id="remember" />
          <p>Remember Me?</p>
        </div>
        <p>Forgot Password</p>
      </div>
      <Button text='Daftar' action={(e) => handleSubmit(e)} />
    </form>
  )
}

export default SignUpForm