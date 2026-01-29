import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate, } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData);
    }


  }, [cartItems, products])

  return (
    <div className='bg-white border-t-4 border-black pt-14 min-h-screen'>

      <div className='text-center mb-8'>
        <h1 className='text-7xl font-black uppercase text-[#FF49DB] '> <span className='drop-shadow-[0_4px_0px_rgba(0,0,0,1)]'> YOUR </span><span className='text-black drop-shadow-[0_4px_0px_rgba(236,72,153,1)]'>CART</span></h1>
      </div>

      <div className='px-4 sm:px-8 lg:px-16'>
        {
          cartData.map((item, index) => {

            const productData = products.find((products) => products._id == item._id);

            return (

              <div key={index} className='bg-white border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-6 mb-6'>
                <div className='grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5] items-center gap-4' >
                  <div className='flex items-start gap-6' >
                    <img className='w-16 sm:w-20 border-2 border-black' src={productData.image[0]} alt="" />
                    <div>
                      <p className='text-xs sm:text-lg font-black text-black'>{productData.name}</p>
                      <div className='flex gap-5 mt-3 items-center'>
                        <p className='text-lg font-black text-black'>{currency} {productData.price}</p>
                        <p className='px-2 sm:px-3 sm:py-1 border-2 border-black bg-white font-bold text-black'>{item.size}</p>
                      </div>
                    </div>

                  </div>

                  <input onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} type="number" min={1} defaultValue={item.quantity} className='border-3 border-black max-w-10 sm:max-w-20 px-1 sm:px-2 py-1 font-bold text-black' />
                  <img onClick={() => updateQuantity(item._id, item.size, 0)} src={assets.bin_icon} alt="" className='w-4 sm:w-5 cursor-pointer ' />
                </div>
              </div>
            )
          })
        }
      </div>

      <div className='flex justify-end my-20 px-4 sm:px-8 lg:px-16'>
        <div className='w-full sm:w-[450px] bg-cyan-400 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] p-6'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3 font-bold uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black transition-all'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart