import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {

  const { currency } = useContext(ShopContext);

  return (
    <Link to={`/product/${id}`}>
      
      <div className="border-4 border-black p-2 group bg-white transition-transform">
        <div className="aspect-square bg-gray-100 border-2 border-black mb-2 overflow-hidden relative">
          <img src={image[0]} className=" hover:scale-110 transition ease-in-out" />
        </div>
        <p className="text-xs uppercase">{name}</p>
        <button className="w-full mt-2 bg-black text-white text-[10px] py-1 uppercase hover:bg-pink-500 transition-colors">
          {currency}{price}
        </button>
      </div>

    </Link>
  )
}

export default ProductItem