import React from 'react'
import vtsLogo from '/src/assets/vts.png'

export default function Navbar() {
  return (
    <header className='pt-[15px] h-[70px] backdrop-blur-[10px]'>
        <img src={vtsLogo} className='h-[50px] w-[400px] m-auto'/>
    </header>
  )
}
