import React from 'react'
import Image from 'next/image'
import Button from '@/sharedcomponents/Button'
import BottomNav from '@/sharedcomponents/BottomNav'

const HomePage = async () => {
    return (
      <div className='flex min-h-screen flex-col font-poppins max-w-lg mx-auto'>
        <div className='bg-primary text-white h-24'>Hello User</div>
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
        <BottomNav />
      </div>
      )
}

export default HomePage