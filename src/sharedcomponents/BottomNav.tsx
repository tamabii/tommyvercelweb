import React from 'react'
import { HiOutlineHome, HiOutlineInboxArrowDown, HiOutlinePlus, HiOutlineSquare2Stack, HiOutlineUser } from 'react-icons/hi2'
import Link from 'next/link'

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 h-16 z-50 bg-primary text-white rounded-t-lg max-w-lg mx-auto'>
          <div className='grid grid-cols-5 gap-4 place-content-center h-full text-center font-light mx-4' >
            <Link href={'/'} className='flex items-center justify-center'>
              <button className='flex flex-col justify-evenly items-center text-xs'>
                <HiOutlineHome className='text-xl' aria-hidden={true} />
                <p>Home</p>
              </button>
            </Link>
            <Link href={'/order'} className='flex items-center justify-center'>
              <button className='flex flex-col justify-evenly items-center'>
                <HiOutlineSquare2Stack className='text-xl' aria-hidden={true} />
                <p className='text-xs'>Order</p>
              </button>
            </Link>
            <Link href={'/addwork'} className='flex items-center justify-center'>
              <button className='flex flex-col justify-evenly items-center'>
                <HiOutlinePlus className='text-xl' aria-hidden={true} />
                <p className='text-xs'>Add Work</p>
              </button>
            </Link>
            <Link href={'/request'}  className='flex items-center justify-center'>
              <button className='flex flex-col justify-evenly items-center'>
                <HiOutlineInboxArrowDown className='text-xl' aria-hidden={true}  />
                <p className='text-xs'>Request</p>
              </button>
            </Link>
            <Link href={'/profile'} className='flex items-center justify-center'>
              <button className='flex flex-col justify-evenly items-center'>
                <HiOutlineUser className='text-xl' aria-hidden={true} />
                <p className='text-xs'>Profile</p>
              </button>
            </Link>
          </div>
        </div>
  )
}

export default BottomNav