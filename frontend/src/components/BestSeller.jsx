import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
    if (products.length > 0) { 
        const bestProduct = products.filter((item) => item.bestseller);
        setBestSeller(bestProduct.slice(0, 10));
    }
}, [products]);
  return (
    <div className='my-10 bg-cyan-400 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-4 sm:px-8 lg:px-16 py-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'Best'} text2={'Seller'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-black font-bold'>
            Discover our customer favorites, handpicked for their exceptional quality, style, and popularity among fashion enthusiasts.
            </p>
        </div>
        <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                bestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image = {item.image}  name={item.name}  price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default BestSeller