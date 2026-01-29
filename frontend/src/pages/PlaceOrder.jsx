import React, { useContext, useState } from 'react'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'


const PlaceOrder = () => {
  const { navigate, backendUrl, token, cartItems, setCartItems, getCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
  const [method, setMethod] = useState('cod');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value

    setFormData(data => ({ ...data, [name]: value }))
  }

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name : 'Order Payment ',
      order_id : order.id,
      receipt: order.receipt,
      handler : async (response) => {
        console.log(response)
        try {
          const {data} = await axios.post(backendUrl + '/api/order/verifyRazorpay', response, {headers: {token}})
          if (data.success) {
            navigate('/orders')
            setCartItems({})
          }
        } catch (error) {
          console.log(error)
          toast.error(error)
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault()
    try {
      let orderItems = []

      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if (itemInfo) {
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }
      switch (method) {

        // API call for COD
        case 'cod':
          const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })

          if (response.data.success) {
            setCartItems({})
            navigate('/orders')
          }
          else {
            toast.error(response.data.message)
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, { headers: { token } })
          if (responseStripe.data.success) {
            const {session_url} = responseStripe.data
            window.location.replace(session_url)
          } else {
            toast.error(responseStripe.data.message)
          }
          break;

        case 'razorpay':
          const responseRazorpay = await axios.post(backendUrl + '/api/order/razorpay', orderData, { headers: { token } })
          if (responseRazorpay.data.success) {
            initPay(responseRazorpay.data.order)
          }
          else {

          }

          break;

        default:
          break;
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  return (
    <form onSubmit={onSubmitHandler} className='bg-white flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-screen border-t-4 border-black px-4 sm:px-8 lg:px-16'>
      {/* -----------------Left Side -------------------- */}
      <div className='flex flex-col gap-6 flex-1'>
        <div className='text-center mb-10'>
          <h1 className='text-5xl font-black uppercase text-black '> <span className='drop-shadow-[0_4px_0px_rgba(236,72,153,1)]'> DELIVERY </span> <span className='text-[#FF49DB] drop-shadow-[0_4px_0px_rgba(0,0,0,1)]'>INFORMATION</span></h1>
        </div>

        <div className='bg-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-10 flex-1'>
          <div className='flex gap-3 mb-10'>
            <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border-2 border-black bg-white py-4 px-4 w-full font-bold text-black' type="text" placeholder='First Name' />
            <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border-2 border-black bg-white py-4 px-4 w-full font-bold text-black' type="text" placeholder='Last Name' />
          </div>

          <input required onChange={onChangeHandler} name='email' value={formData.email} className='border-2 border-black bg-white py-4 px-4 w-full mb-10 font-bold text-black' type="email" placeholder='Email Address' />
          <input required onChange={onChangeHandler} name='street' value={formData.street} className='border-2 border-black bg-white py-4 px-4 w-full mb-10 font-bold text-black' type="text" placeholder='Street' />

          <div className='flex gap-3 mb-10'>
            <input required onChange={onChangeHandler} name='city' value={formData.city} className='border-2 border-black bg-white py-4 px-4 w-full font-bold text-black' type="text" placeholder='City' />
            <input required onChange={onChangeHandler} name='state' value={formData.state} className='border-2 border-black bg-white py-4 px-4 w-full font-bold text-black' type="text" placeholder='State' />
          </div>

          <div className='flex gap-3 mb-10'>
            <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border-2 border-black bg-white py-4 px-4 w-full font-bold text-black' type="text" placeholder='ZIP Code' />
            <input required onChange={onChangeHandler} name='country' value={formData.country} className='border-2 border-black bg-white py-4 px-4 w-full font-bold text-black' type="text" placeholder='Country' />
          </div>

          <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border-2 border-black bg-white py-4 px-4 w-full font-bold text-black' type="number" placeholder='Phone' />
        </div>
      </div>

      {/* -------------------- Right Side--------------------- */}

      <div className='mt-8 flex-1'>

        <div className='bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 mb-8' >
          <CartTotal />
        </div>

        <div className='bg-green-500 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 flex-1'>
          <h1 className='text-4xl font-black uppercase text-black mb-6'>PAYMENT <span className='text-black'>METHOD</span></h1>
          {/* ---------------PAYMENT METHOD ----------------- */}
          <div className='flex flex-col gap-4 '>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border-2 border-black p-4 cursor-pointer bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
              <p className={`min-w-4 h-4 border-2 border-black rounded-full ${method === 'stripe' ? 'bg-green-400' : 'bg-white'}`} ></p>
              <img className='h-6' src={assets.stripe_logo} alt="" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border-2 border-black p-4 cursor-pointer bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
              <p className={`min-w-4 h-4 border-2 border-black rounded-full ${method === 'razorpay' ? 'bg-green-400' : 'bg-white'}`} ></p>
              <img className='h-6' src={assets.razorpay_logo} alt="" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border-2 border-black p-4 cursor-pointer bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'>
              <p className={`min-w-4 h-4 border-2 border-black rounded-full ${method === 'cod' ? 'bg-green-400' : 'bg-white'}`} ></p>
              <p className='text-black text-sm font-black'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-8 py-3 text-sm font-bold uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black transition-all'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder