import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const onSumbitHandler = async (event) => {
    event.preventDefault();

    try {

      // Sign Up State
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }

      //Login State
      else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password })
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem('token', response.data.token)
        }
        else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  },[token])

  return (

    <div className='bg-white min-h-[70vh] flex items-center justify-center px-4'>
      <form onSubmit={onSumbitHandler} className='bg-cyan-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 w-full max-w-2xl text-center relative'>
        <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-b-6 border-l-transparent border-r-transparent border-b-cyan-400'></div>
        <div className='inline-flex items-center gap-2 mb-6'>
          <p className='font-black text-4xl text-black uppercase'>{currentState}</p>
        </div>

        {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Name' className='border-2 border-black bg-white w-full px-4 py-4 mb-8 font-bold text-black focus:bg-pink-100 transition-colors' required />}
        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Email' className='border-2 border-black bg-white w-full px-4 py-4 mb-8 font-bold text-black focus:bg-pink-100 transition-colors' required />
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className='border-2 border-black bg-white w-full px-4 py-4 mb-8 font-bold text-black focus:bg-pink-100 transition-colors' required />

        <div className='w-full flex justify-between text-base mb-12 font-bold text-black'>
          <p className='cursor-pointer hover:text-pink-600 transition-colors'> Forget Password? </p>
          {
            currentState === 'Login'
              ? <p onClick={() => { setCurrentState('Sign Up') }} className='cursor-pointer hover:text-pink-600 transition-colors'>Create Account </p>
              : <p onClick={() => { setCurrentState('Login') }} className='cursor-pointer hover:text-pink-600 transition-colors'>Login Here </p>

          }
        </div>

        <button className='cursor-pointer bg-black text-white px-12 py-4 font-bold uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all'> {currentState === 'Login' ? 'Sign In' : 'Sign Up'} </button>
      </form>
    </div>
  )
}

export default Login