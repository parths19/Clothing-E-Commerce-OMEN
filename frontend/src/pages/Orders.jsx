import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);


  const loadOrderData = async () => {
    try {

      if (!token) {
        return null;
      }

      const response = await axios.post(backendUrl + '/api/order/userorders', {}, { headers: { token } })
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date

            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const getComicColor = (index) => {
    const colors = ['bg-pink-500', 'bg-yellow-300', 'bg-cyan-300', 'bg-green-400'];
    return colors[index % colors.length];
  };

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (

    <div className='bg-white border-t-4 border-black pt-16 min-h-screen'>

      <div className='text-center mb-12'>
        <h1 className='text-6xl font-black uppercase text-black'> <span className='drop-shadow-[0_4px_0px_rgba(236,72,153,1)]'> MY </span> <span className='text-[#FF49DB] drop-shadow-[0_4px_0px_rgba(0,0,0,1)]'> ORDERS </span> </h1>
      </div>

      <section className="mt-12">
        <h3 className="text-4xl font-black uppercase italic mb-8 border-l-8 border-black pl-4">
          The Order Chronicles
        </h3>

        <div className="relative border-l-4 border-black ml-6 space-y-12 pb-8">
          {orderData.map((item, index) => (
            
            <div key={item.id} className="relative pl-12">

              {/* THE TIMELINE DOT (A BOLT) */}
              <div className="absolute -left-[22px] top-0 w-10 h-10 bg-black border-4 border-white flex items-center justify-center rotate-45">
                <span className="text-white -rotate-45 text-xs font-black">#</span>
              </div>

              {/* THE ORDER PANEL */}
              <div className={`border-4 border-black p-6 ${getComicColor(index)} relative`}>

                {/* Item Description */}
                <div className='flex items-start gap-6 text-sm'>
                  <img src={item.image[0]} alt="" className='w-16 sm:w-20 border-2 border-black' />
                  <div>
                    <p className='sm:text-base font-black text-black'>{item.name}</p>
                    <div className='flex items-center gap-3 mt-1 text-base text-black font-bold'>
                      <p className='text-lg font-black'>{currency}{item.price}</p>
                      <p className='font-bold'>Quantity: {item.quantity} </p>
                      <p className='font-bold'>Size: {item.size}</p>
                    </div>
                    <p className='mt-1 font-bold text-black'>Payment Method: <span className='text-gray-600'> {item.paymentMethod} </span></p>
                  </div>
                </div>


                {/* SPEECH BUBBLE STATUS */}
                <div className="absolute -top-6 -right-4 bg-white border-2 border-black px-3 py-1 font-black text-xs uppercase italic drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  {item.status}!!
                  {/* Small triangle to make it a bubble */}
                  <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-[8px] border-l-transparent border-t-[8px] border-t-black border-r-[8px] border-r-transparent"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase mb-1">{new Date(item.date).toDateString()} </p>
                    <h4 className="text-3xl font-black uppercase italic leading-none">{item.items}</h4>
                  </div>

                  <button onClick={loadOrderData} className="bg-black text-white px-6 py-2 uppercase font-black text-sm hover:bg-pink-500 transition-all border-2 border-black active:translate-y-1">
                    View Intel
                  </button>
                </div>

                {/* ACTION SOUND EFFECT */}
                <span className="absolute -bottom-4 -left-4 bg-pink-500 text-white px-2 py-0.5 text-[10px] font-black italic border-2 border-black tracking-widest uppercase">
                  Zip! Zoom!
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>

  )
}

export default Orders