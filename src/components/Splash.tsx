import Image from 'next/image'
import React from 'react'

export const Splash = () => {
  return (
    <div className="bg-roseBackground h-dvh" >
        <div className='h-full flex'>
            <Image src="/wallet.png" alt="Wallet" width={120} height={120} />
            <p className='mt-1 text-2xl font-bold'>
                BnK
            </p>
        </div>
    </div>
  )
}
