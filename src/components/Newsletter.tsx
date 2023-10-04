import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export const Newsletter =() => {
  return (
    <div className='px-4 lg:px-14 w-screen mx-auto bg-neutralSilver py-16'>
        <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
            <div className='text-center'>
                <h2 className='lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug'>Lorem ipsum dolor sit amet.</h2>
                <div className='flex items-center justify-center gap-8'>
                    <button className='btn-primary'>Get Demo<FiArrowRight className='inline-block ml-2'/></button>
                </div>
            </div>
        </div>
    </div>
  )
}
