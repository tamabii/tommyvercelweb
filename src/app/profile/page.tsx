import BottomNav from '@/sharedcomponents/BottomNav'
import { getServerSession } from 'next-auth'
import React from 'react'
import options from '../api/auth/[...nextauth]/options'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import Button from '@/sharedcomponents/Button'
import SignoutButton from './_components/SignoutButton'

const Profile = async () => {
  const session = await getServerSession(options)
  if (session && session.user) {
    return (
      <div className='min-h-dvh bg-white'>
        <div className='bg-primary p-4 bg-opacity-50'>
          <div className='flex flex-row items-center gap-4'>
            <Image
              src={'/defaultphoto.png'}
              width={100}
              height={100}
              alt='Photo Profile'
              className='rounded-full'
            />
            <div>
              <p>Aleria</p>
              <p className='text-xs'>Wedding</p>
              <p className='text-xs'>aleria@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <Button text='View Profile' size='small'/>
        </div>
        <div>
          <div className='divide-y divide-offwhite text-sm font-medium'>
            <div className='flex items-center py-3 px-4 hover:bg-lightblue'>Notification</div>
            <div className='flex items-center py-3 px-4 hover:bg-lightblue'>Chat</div>
            <div className='flex items-center py-3 px-4 hover:bg-lightblue'>Offer</div>
            <div className='flex items-center py-3 px-4 hover:bg-lightblue'>Request</div>
            <div className='flex items-center py-3 px-4 hover:bg-lightblue'>My Portfolio</div>
            <SignoutButton />
          </div>
        </div>
        <BottomNav />
      </div>
    )
  }
  redirect('/login')
}

export default Profile