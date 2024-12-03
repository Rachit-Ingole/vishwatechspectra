import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import CartPage from './components/CartPage'

function App() {
  const [cart,setCart] = useState([])
  const [cartPage,setCartPage] = useState(false)

  function handleCart(name){
    if(cart.includes(name)){
      const newCart = cart.filter((item)=> item !== name)
      setCart(newCart)
      localStorage.setItem('cart',JSON.stringify({cart:newCart}))
    }else{
      setCart([...cart,name])
      localStorage.setItem('cart',JSON.stringify({cart:[...cart,name]}))
    }
    
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localCart = localStorage.getItem('cart')
    if(!localCart){
      return
    }
    localCart = JSON.parse(localCart).cart
    setCart(localCart)
  },[])




  return (
    <main className='min-h-screen bg-fixed min-h-screen w-[100%] bg-[url("src/assets/Background.jpg")] bg-cover text-white text-sm sm:text-base'>
      <Navbar/>
      {cartPage ? <CartPage cart={cart} setCart={setCart} setCartPage={setCartPage} handleCart={handleCart}/> : <MainBody cart={cart} cartPage={cartPage} setCartPage={setCartPage} handleCart={handleCart}/>}
    </main>
  )
}

export default App
