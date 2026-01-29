import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10));
    }, [products])
    return (
        <div className='my-10 bg-yellow-400 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-4 sm:px-8 lg:px-16 py-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={"COLLECTION"} />
                <p className='w-3/4 m-auto sm:text-sm md:text-base text-black font-bold'>
                    Explore our freshest arrivals, featuring cutting-edge designs and must-have pieces that define the season's hottest trends.
                </p>
            </div>
            {/* Rendering Products */}
            <div className='grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={index} id={item._id} image = {item.image}  name={item.name}  price={item.price}/>

                    ))
                }
            </div>
        </div>
    )
}

export default LatestCollection