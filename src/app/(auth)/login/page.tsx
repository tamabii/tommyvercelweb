'use client'

import Button from '@/sharedcomponents/Button';
import { signIn } from 'next-auth/react';
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Page = () => {
  const [loading, setIsLoading] = useState(false);

  if (loading) {
    return <div className='min-h-screen flex items-center justify-center'>Loading</div> // TODO: Add loading animation
  }

  return (<main className='min-h-screen flex'>
          <section className='hidden items-center justify-center bg-gradient-to-b to-sky-500 from-emerald-600 p-5'>
            <div>
              <Image src="/hero.png" alt="Background image" width={500} height={500} />
            </div>
          </section>
          <section className='grow flex-1 flex items-center justify-center bg-gradient-to-b from-sky-500 to-emerald-600 p-5'>
            <div className='flex flex-col bg-white p-5 rounded shadow space-y-5 max-w-sm md:max-w-md sm:p-10'>
              <div>
                <Link href={'/'}>
                  <h2 className="text-xl font-bold text-sky-500 hover:underline">fotografersamarinda.com</h2>
                </Link>
              </div>
              <div>
                <h3 className='font-semibold text-slate-800'>Selamat Datang Kembali!</h3>
                <p className='text-xs font-semibold text-slate-500'>Silahkan login untuk melanjutkan</p>
              </div>
              <div className='space-y-5 flex flex-col items-center'>
                <button
                  onClick={() => signIn('google', {
                    callbackUrl: '/profile',
                  })}
                  className='shadow p-2 border font-semibold text-sm rounded flex flex-row items-center space-x-2'>
                  <Image src='googleIcon.svg' alt='google button' width={20} height={20}/>
                  <span className='text-slate-600'>Login dengan Google</span>
                </button>
                <div className="flex flex-row justify-center w-full items-center space-x-3">
                  <hr className='w-full bg-slate-900 h-px'/>
                  <p className='text-xs font-semibold whitespace-nowrap text-slate-600'>atau lanjutkan menggunakan email</p>
                  <hr className='w-full bg-slate-900 h-px'/>
                </div>
                <div className='w-full'>
                  <form action="" className='flex flex-col space-y-5'>
                    <div className='group focus-within:outline-1 focus-within:outline focus-within:border-sky-500 focus-within:outline-sky-500 rounded border p-2 flex flex-row items-center space-x-2'>
                      <Image src={'mail.svg'} alt='email logo' width={20} height={20} />
                      <input type="text" className='text-slate-600 text-sm font-semibold w-full focus:outline-none' placeholder='Email'/>
                    </div>
                    <div className='group focus-within:outline-1 focus-within:outline focus-within:border-sky-500 focus-within:outline-sky-500 rounded border p-2 flex flex-row items-center space-x-2'>
                      <Image src={'lock.svg'} alt='email logo' width={20} height={20} />
                      <input type="password" className='text-slate-600 text-sm font-semibold w-full focus:outline-none' placeholder='Password'/>
                    </div>
                    <div className='flex justify-between text-xs font-semibold text-slate-500'>
                      <div className='flex flex-row items-center space-x-2'>
                        <input type="checkbox" name="remember" id="remember" />
                        <p>Remember Me?</p>
                      </div>
                      <p>Forgot Password</p>
                    </div>
                    <Button text='Login'/>
                  </form>
                </div>
              <div>
                <p className='text-xs font-semibold text-slate-600'>Belum memiliki akun? <span className='font-semibold text-orange'><Link href={'/signup'}>Buat akun.</Link></span></p>
              </div>
            </div>
          </div>
          </section>
        </main>
    )
}

export default Page