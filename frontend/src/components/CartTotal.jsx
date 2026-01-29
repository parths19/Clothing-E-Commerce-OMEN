import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {
    const {currency, delivery_fee, getCartAmount} = useContext(ShopContext);
  return (
    <div className='w-full bg-yellow-400 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6'>
        <div className='text-2xl mt-10'>
            <Title text1={'CART'} text2={'TOTAL'}/>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm font-bold'>
            <div className='flex justify-between text-black'>
                <p>Subtotal</p>
                <p>{currency} {getCartAmount()}.00</p>
            </div>
            <hr className='border-2 border-black' />
            <div className='flex justify-between text-black'>
                <p>Shipping Fee</p>
                <p> {currency}{delivery_fee}.00</p>
            </div>
            <hr className='border-2 border-black' />
            <div className='flex justify-between text-black font-black text-lg' >
                <b>Total</b>
                <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal