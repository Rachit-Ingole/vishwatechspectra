import React from 'react'
import {PRICES } from '../utils/data'
import VTS4 from '../assets/VTS4-scaled.jpg'

export default function EventCard(props) {

    const {name,cart,handleCart} = props 
    
  return (

   
        <div className='bg-slate-700 rounded-lg flex flex-col backdrop-blur-md bg-opacity-40 h-fit p-2 gap-2'>
        <div className='flex justify-between'>
            <h1 className='text-2xl '>{name}</h1>
            <h1 className='self-end font-semibold text-xs'>{Math.ceil(Math.random() * 30)}/{Math.ceil(Math.random()*12)}/2024</h1>
        </div>
        <img className="rounded-xl" src={VTS4}/>
        <div className='grid grid-cols-2 gap-4'>
            <h1 className='mr-auto'>Entry Fees: <span className='font-semibold'>{PRICES[name][0] != 0 ? ` ₹${PRICES[name][0]}` : " Free"}</span></h1>

            <div className='ml-auto'> 
                {PRICES[name][1] != 0 &&
                <>
                <h1 className='font-semibold'>Prizes:</h1>
                <h1>Winner: <span className='font-semibold'>₹{PRICES[name][1]}</span></h1>
                <h1>Runner Up: <span className='font-semibold'>₹{PRICES[name][2]}</span></h1>
                </>
                }
            </div>
                
            { cart.includes(name)?
            <div className='flex ml-auto mt-[5px] bg-red-600 p-1.5 rounded-md mb-[8px] cursor-pointer col-span-2' onClick={()=>{handleCart(name)}}>
                <h1>Remove from Cart</h1>
            </div> :
            <div className='flex ml-auto mt-[5px] bg-blue-400 p-1.5 rounded-md mb-[8px] cursor-pointer col-span-2' onClick={()=>{handleCart(name)}}>
                <h1>Add to Cart</h1>
            </div>}
        </div>
        </div>
    
  )
}
