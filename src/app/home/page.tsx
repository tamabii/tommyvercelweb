import { getServerSession } from 'next-auth'
import React from 'react'
import options from '../api/auth/[...nextauth]/options'
import Loading from '@/sharedcomponents/Loading'
import Image from 'next/image'
import { HiOutlineHome, HiOutlineInboxArrowDown, HiOutlinePlus, HiOutlineSquare2Stack, HiOutlineUser } from 'react-icons/hi2'
import Button from '@/sharedcomponents/Button'

const ProfilePage = async () => {
  const session = await getServerSession(options)
  if (session && session.user) {
    return (
      <div className='flex min-h-screen flex-col font-poppins max-w-lg mx-auto'>
        <div className='bg-primary text-white h-24'>Hello {session.user.email}</div>
        <div className='w-full'>
          <p className='p-2'>Categories</p>
          <div className='grid grid-cols-4 gap-4 place-content-center m-4 text-xs font-medium' >
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
          </div>
        </div>
        <div>
          <p className='p-2'>trending Photoshoot</p>
          <div className='grid grid-cols-4 gap-4 place-content-center m-4 text-xs font-medium' >
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
            <div className='min-h-10 p-2 flex flex-col items-center justify-center space-y-2'>
              <Image src={'/portrait.svg'} width={50} height={50} alt='portrait' className='bg-offwhite rounded-full p-2'/>
              <p>portrait</p>
            </div>
          </div>
        </div>
        <div>
          <p>top photographer</p>
          <div className='flex flex-row flex-nowrap gap-4 overflow-auto'>
            <div className='max-w-40 w-full rounded shadow flex flex-col items-center gap-2 px-2 py-5 text-sm shrink-0'>
              <div>
                <Image src={'/defaultphoto.png'} width={100} height={100} alt='photographer image' className='rounded-full'/>
              </div>
              <div>Aleria</div>
              <div>Specialist</div>
              <Button text='Follow' size='small' width='full'/>
            </div>
            <div className='max-w-40 w-full rounded shadow flex flex-col items-center gap-2 px-2 py-5 text-sm shrink-0'>
              <div>
                <Image src={'/defaultphoto.png'} width={100} height={100} alt='photographer image' className='rounded-full'/>
              </div>
              <div>Aleria</div>
              <div>Specialist</div>
              <Button text='Follow' size='small' width='full'/>
            </div>
            <div className='max-w-40 w-full rounded shadow flex flex-col items-center gap-2 px-2 py-5 text-sm shrink-0'>
              <div>
                <Image src={'/defaultphoto.png'} width={100} height={100} alt='photographer image' className='rounded-full'/>
              </div>
              <div>Aleria</div>
              <div>Specialist</div>
              <Button text='Follow' size='small' width='full'/>
            </div>
            <div className='max-w-40 w-full rounded shadow flex flex-col items-center gap-2 px-2 py-5 text-sm shrink-0'>
              <div>
                <Image src={'/defaultphoto.png'} width={100} height={100} alt='photographer image' className='rounded-full'/>
              </div>
              <div>Aleria</div>
              <div>Specialist</div>
              <Button text='Follow' size='small' width='full'/>
            </div>
          </div>
        </div>
        <div className='mb-16'>
          <p>ads</p>
        </div>
        <div className='fixed bottom-0 left-0 right-0 h-16 z-50 bg-primary text-white rounded-t-lg max-w-lg mx-auto'>
          <div className='grid grid-cols-5 gap-4 place-content-center max-w-lg h-full text-center font-light'>
            <button className='flex flex-col justify-evenly items-center text-xs'>
              <HiOutlineHome className='text-xl' aria-hidden={true} />
              <p>Home</p>
            </button>
            <button className='flex flex-col justify-evenly items-center'>
              <HiOutlineSquare2Stack className='text-xl' aria-hidden={true} />
              <p className='text-xs'>Order</p>
            </button>
            <button className='flex flex-col justify-evenly items-center'>
              <HiOutlinePlus className='text-xl' aria-hidden={true} />
              <p className='text-xs'>Add Work</p>
            </button>
            <button className='flex flex-col justify-evenly items-center'>
              <HiOutlineInboxArrowDown className='text-xl' aria-hidden={true}  />
              <p className='text-xs'>Request</p>
            </button>
            <button className='flex flex-col justify-evenly items-center'>
              <HiOutlineUser className='text-xl' aria-hidden={true} />
              <p className='text-xs'>Profile</p>
            </button>
          </div>
        </div>
      </div>
      )
  }
  return (
    <Loading />
  )
}

export default ProfilePage