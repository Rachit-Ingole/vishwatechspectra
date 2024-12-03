import React from 'react'
import { CATEGORIES } from '../utils/data'
import CategoryHeader from './CategoryHeader'


export default function (props) {
    const {cart,handleCart,cartPage,setCartPage} = props
  return (
    <>
    <div className='pt-[20px] flex justify-center '>

        <div className='w-[85%] h-fit grid grid-cols-1 gap-8'>
            {Object.keys(CATEGORIES).map( (value,idx)=>{
                return (
                    <CategoryHeader cart={cart} handleCart={handleCart} value={value} key={idx}/>  
                )             
            })}
        </div>
        <button className='fixed bottom-4 right-4 bg-blue-400 p-3 rounded-full text-2xl' onClick={()=>{setCartPage(!cartPage)}}><i className="fa-solid fa-cart-shopping"></i></button>
        <div className='fixed flex justify-center items-center right-4 bottom-[60px] h-5 w-5 text-md bg-red-600 rounded-full'>{cart.length}</div>
  
    </div>

    
    </>
  )
}



// <div className='w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-10'>

// <div className='bg-slate-700 w-[100%] rounded-md flex flex-col items-center backdrop-blur-md bg-opacity-40 h-[500px]'>
//     <h1>Event 1</h1>
//     <img className="rounded-xl" src="src/assets/VTS4-scaled.jpg"/>
// </div>
// </div>