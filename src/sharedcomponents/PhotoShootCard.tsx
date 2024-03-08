import Image from 'next/image'
import React from 'react'
import Button from './Button'

const PhotoShootCard = () => {
  return (
    <div className='bg-white rounded max-w-sm mx-auto shadow-md'>
      <Image src={'/wisuda.jpg'} width={500} height={300} alt='wisuda' className='rounded-t max-h-52 object-cover'/>
      <div className='rounded-b gap-2 divide-y'>
        <div className='px-5 py-2 flex flex-col gap-2'>
          <h4 className='font-semibold'>Foto Wisuda (Post Graduation)</h4>
          <div className='flex flex-row gap-2 items-center text-slate-600 font-semibold text-sm'>
            <Image src={'/googleIcon.svg'} alt='photographer' width={25} height={25} />
            <div>Aleria</div>
          </div>
        </div>

        <div className='flex flex-row justify-between items-center gap-5 px-5 py-2'>
          <p className='text-sm font-semibold text-sky-500'>Rp 300.000</p>
          <Button text='Lihat Photoshoot' size='small' />
        </div>
      </div>
    </div>
  )
}

export default PhotoShootCard