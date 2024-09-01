import React from 'react'

function Footer() {
  return (
    <>
     <div className='mt-8 w-full bg-black px-8 md:px-[300px] flex md:flex-row flex-col space-y-6 md:space-y-0 items-start justify-between text-sm md:text-md py-8'>
      <div className='flex flex-col text-white'>
        <p>Featured blogs</p>
        <p>Most viewed</p>
        <p>Readers choice</p>

      </div>
      <div className='flex flex-col text-white'>
        <p>Forum</p>
        <p>Support</p>
        <p>Recent blogs</p>

      </div>
      <div className='flex flex-col text-white'>
        <p>Privacy policy</p>
        <p>Abous us </p>
        <p>Terms and conditions</p>
        <p>Terms of service</p>

      </div>

      </div>
      <p className='py-2 pb-6 text-center text-sm text-white bg-black'>All rights reserved @CodeCosm 2024</p>
    </>
  )
}

export default Footer