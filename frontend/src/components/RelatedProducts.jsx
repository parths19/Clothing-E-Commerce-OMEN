import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const RelatedProducts = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (!products || products.length === 0) return;

        let productsCopy = products.slice();

        if (category) productsCopy = productsCopy.filter((item) => item.category === category);
        if (subCategory) productsCopy = productsCopy.filter((item) => item.subCategory === subCategory);

        setRelated(productsCopy.slice(0, 5));

    }, [products, category, subCategory])


  return (
    <div className='my-24 bg-yellow-400 border-3 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-4 sm:px-8 lg:px-16 py-10'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6' >
            {related.map((item, index) => (
                <ProductItem key={item._id || index} id={item._id} name={item.name} price={item.price} image={item.image} />
            ))}
        </div>

    </div>
  )
}

export default RelatedProducts