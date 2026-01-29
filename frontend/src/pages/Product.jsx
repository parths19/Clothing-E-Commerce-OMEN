import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })

  }

  useEffect(() => {
    fetchProductData();
  }, [productId])


  return productData ? (

    <div className='bg-white border-t-4 border-black pt-10 transition-opacity ease-in duration-500 opacity-100 min-h-screen'>
      {/* --------------------------Product Data----------------------------------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row px-4 sm:px-8 lg:px-16'>

        {/* ---------------------------------Product Images-------------------------------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full gap-2'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-shadow' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]' >
            <img className='w-full h-auto border-3 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]' src={image} alt="" />
          </div>
        </div>

        {/* ------------------------------------------Product Info------------------------------------------ */}
        <div className='flex-1 bg-green-400 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6'>

          {/* Product Name */}
          <h1 className='font-black text-3xl mt-2 text-black uppercase'>{productData.name}</h1>

          {/* Product Reviews */}
          <div className='flex items-center gap-1 mt-4'>
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <img src={assets.star_dull_icon} alt="" className="w-4" />
            <p className='pl-2 font-bold text-black'>(12)</p>
          </div>
          
          {/* Product Price */}
          <p className='mt-5 text-4xl font-black text-black'>{currency} {productData.price}</p>
          
          {/* Product Sizes */}
          <div className='flex flex-col gap-4 my-8'>
            <p className='font-black text-black uppercase'>Select Size</p>
            <div className='flex gap-3'>
              {
                productData.sizes.map((item,index) => (
                  <button onClick={() => setSize(item)} className = {`border-2 border-black py-2 px-4 bg-white font-bold text-black hover:bg-cyan-400 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all ${item === size ? 'bg-cyan-400 text-red-600' : ''}`} >{item}</button>
                ))
              }
            </div>
          </div>
          
          {/* ADD TO CART BUTTON */}
          <button onClick={() => addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm font-bold uppercase border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:bg-white hover:text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all'>ADD TO CART</button>
          <hr className='mt-8 border-2 border-black' />

          {/* Warranty Info */}
          <div className='text-sm text-black mt-5 flex flex-col gap-2 font-bold'>
            <p>100% Original Product</p>
            <p>Cash on Delivery Available</p>
            <p>Easy return and exchange policy within 7 days </p>
          </div>
        </div>
      </div>
      
      {/* -----------------------Description & Review Section------------------------------- */}
      <div className='mt-20 px-4 sm:px-8 lg:px-16'>
        {/* Navigation Options */}
        <div className='flex border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>
          <div className='flex-1 bg-cyan-400 border-r-2 border-black px-5 py-4 text-center font-black text-black uppercase hover:bg-cyan-500 transition-colors cursor-pointer'>Description</div>
          <div className='flex-1 bg-yellow-400 px-5 py-4 text-center font-black text-black uppercase hover:bg-yellow-500 transition-colors cursor-pointer'>Reviews (122)</div>
        </div>

        {/* Dialog Box */}
        <div className='flex flex-col gap-4 border-4 border-black p-8 text-sm text-white bg-pink-500 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] font-black relative'>
          <div className='absolute -top-4 left-8 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-pink-500'></div>
          <p>{productData.description}</p>
        </div>

      </div>


      {/* Display related product */}
      <RelatedProducts category = {productData.category} subcategory = {productData.subcategory} />


    </div>
  ) : <div className='opacity-0'> </div>
}

export default Product