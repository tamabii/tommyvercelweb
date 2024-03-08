import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import GoogleSignInButton from './_components/GoogleSignInButton';
import { getServerSession } from 'next-auth';
import options from '@/app/api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';
import SignUpForm from './_components/SignUpForm';

const Page = async () => {
  const session = await getServerSession(options)
  if (session) {
    redirect('/')
  }
  return (
    <main className='min-h-dvh flex'>
          <section className='hidden items-center justify-center bg-gradient-to-b to-sky-500 from-emerald-600 p-5'>
            <div>
              <Image src="/hero.png" alt="Background image" width={500} height={500} />
            </div>
          </section>
          <section className='grow flex-1 flex items-center justify-center bg-gradient-to-b from-sky-500 to-emerald-600 p-4'>
            <div className='flex flex-col bg-white p-5 rounded shadow space-y-5 max-w-sm md:max-w-md sm:p-10'>
              <div>
                <Link href={'/'}>
                  <h2 className="text-xl font-bold text-sky-500 hover:underline">fotografersamarinda.com</h2>
                </Link>
              </div>
              <div>
                <h3 className='font-semibold text-slate-800'>Buat Sebuah Akun</h3>
                <p className='text-xs font-semibold text-slate'>Silahkan Isi Data Untuk Mendaftar.</p>
              </div>
              <div className='space-y-5 flex flex-col items-center'>
                <GoogleSignInButton />
                <div className="flex flex-row justify-center w-full items-center space-x-3">
                  <hr className='w-full bg-offwhite h-px'/>
                  <p className='text-xs font-semibold whitespace-nowrap text-slate'>atau mendaftar dengan email</p>
                  <hr className='w-full bg-offwhite h-px'/>
                </div>
                <div className='w-full'>
                  <SignUpForm />
                </div>
              <div>
                <p className='text-xs font-semibold text-slate'>Sudah memiliki akun? <span className='text-orange font-semibold'><Link href={'/login'}>Login</Link></span></p>
              </div>
            </div>
          </div>
          </section>
        </main>
    )
}

export default Page