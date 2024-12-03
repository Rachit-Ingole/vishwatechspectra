import React, { useState } from 'react'
import { CATEGORIES,PRICES } from '../utils/data'
import EventCard from './EventCard'

export default function CategoryHeader(props) {
    const {value,cart,handleCart} = props
    const [open,setOpen] = useState(false)



    return (
    <div className='bg-slate-700 w-[100%] grid grid-cols-1 rounded-lg backdrop-blur-md bg-opacity-40 h-fit p-1' onClick={()=>{
        if(!open){setOpen(!open)}
    }}>
        <div className='flex items-center w-[100%]'  onClick={()=>{
        setOpen(!open)
    }}>
        <h1 className='ml-[20px] text-2xl sm:text-3xl font-semibold'>{value}</h1>
        {!open ? <i className="fa-solid fa-angle-down text-2xl sm:text-3xl mt-[5px] ml-auto mr-[20px]"></i>:
        <i className="fa-solid fa-angle-up text-2xl sm:text-3xl mt-[5px] ml-auto mr-[20px] "></i>}
        </div>


        
        {open &&
         <div className='mx-auto w-[95%] grid grid-cols-1 sm:grid-cols-2  justify-center mt-[20px] gap-8'> 
            {CATEGORIES[value].map((value,idx)=>{
                return(
                    
                <EventCard cart={cart} handleCart={handleCart} key={idx} name={value}/>
                )
            })}
         </div>
        
        }







    </div>
  )
}
