import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Verify = () => {
    const {navigate, token, setCartItems, backendUrl, userId} = useContext(ShopContext)
    const [searchParams, setSearchParams] = useSearchParams()

    const success = searchParams.get('success')
    const orderId = searchParams.get('orderId')

    const verifyPayment = async () => {
        try {
            if(!token) {
                console.log('No token available')
                return null
            }

            if(!userId) {
                console.log('No userId available')
                return null
            }

            const response = await axios.post(backendUrl + '/api/order/verifyStripe', {success, orderId, userId}, {headers: {token}})

            if (response.data.success) {
                toast.success('Payment verified successfully!')
                setCartItems({})
                navigate('/orders')
            }
            else {
                toast.error('Payment verification failed')
                navigate('/cart')
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyPayment()    
    }, [token, success, orderId] )
  return (
    <div></div>
  )
}

export default Verify