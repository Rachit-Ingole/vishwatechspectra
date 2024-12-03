import React, { useState } from 'react'
import { PRICES } from '../utils/data'


export default function CartPage(props) {
    const {cart,setCart,setCartPage,handleCart} = props


    function getTotal(){
        var total = 0;
        for(let i in cart){
            total += PRICES[cart[i]][0]
        }
        return total
    }
  return (
    <>
    <div className='grid grid-cols-1 bg-slate-700 w-[85%] rounded-lg backdrop-blur-md bg-opacity-40 h-fit p-5 mx-auto gap-3'>
        <h1 className='text-lg'>Items:</h1>
        {cart.map((value,idx)=>{
            return(
            <div key={idx} className='bg-slate-700 rounded-lg flex justify-between items-center backdrop-blur-md bg-opacity-40 h-fit p-2 gap-2'>
                <h1 className='mr-[10px]'>{value} x 1</h1>
                <i onClick={()=>{handleCart(value);}} className="fa-solid fa-trash text-red-500 text-lg cursor-pointer mr-auto"></i>
                <h1>₹{PRICES[value][0]}</h1>
            </div>
            )
        })}

        <div className='flex justify-between items-center'>
            <h1 className='text-lg'>Items Total:</h1>
            <h1 className='text-lg'> ₹{getTotal()}</h1>
        </div>
    </div>

    <div className='flex justify-center mt-[20px] '>
        <button className='mx-auto bg-blue-400 p-2 rounded-lg' onClick={() => {alert("Thank you for purchase");setCart([])}}>Checkout</button>
    </div>

    <button className='fixed bottom-4 left-4 bg-blue-400 p-3 rounded-full text-2xl' onClick={()=>{setCartPage(false)}}><i className="fa-solid fa-arrow-left"></i></button>
    </>
  )
}
