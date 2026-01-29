import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value ))
    }
    else {
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value ))
    }
    else {
      setSubCategory(prev => [...prev,e.target.value])
    }

  }

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy);
  }

  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch(sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
        break;
      
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
        break;

      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(() => {
    sortProducts();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t-3 border-black bg-cyan-400 px-4 sm:px-8 lg:px-16 py-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'>

        {/* Flilter Area */}
        <div className='min-w-60'>
          <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 font-black uppercase text-black border-2 border-black bg-pink-400 px-2 py-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-transform'>FILTERS
            <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} alt="" />
          </p>

          {/* Category Area */}
          <div className= {`border-3 border-black pl-5 py-3 mt-6 bg-[#6fd526] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${showFilter ? '' : 'hidden'} sm:block`} >
            <p className='mb-3 text-sm font-black text-black uppercase'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-bold text-black'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3 border-2 border-black' value={'Men'} onChange = {toggleCategory}/> Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3 border-2 border-black' value={'Women'} onChange = {toggleCategory}/> Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3 border-2 border-black' value={'Kids'} onChange = {toggleCategory}/> Kids
              </p>
            </div>
          </div>

          {/* Subcategory Area */}
          <div className= {`border-3 border-black pl-5 py-3 my-5 bg-[#6fd526] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${showFilter ? '' : 'hidden'} sm:block`} >
            <p className='mb-3 text-sm font-black text-black uppercase'>TYPE</p>
            <div className='flex flex-col gap-2 text-sm font-bold text-black'>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3 border-2 border-black' value={'Topwear'} onChange = {toggleSubCategory}/> Topwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3 border-2 border-black' value={'Bottomwear'} onChange = {toggleSubCategory}/> Bottomwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" className='w-3 border-2 border-black' value={'Winterwear'} onChange = {toggleSubCategory}/> Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Right Area */}
        <div className='flex-1'>

          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'} />
            {/* Sort Area */}
            <select className='border-3 border-black text-sm px-2 bg-pink-400 font-bold shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]' onChange={(e)=> setSortType(e.target.value)} >
              <option value="relavent">Sort By: Relevance</option>
              <option value="low-high">Sort By: Low to High</option>
              <option value="high-low">Sort By: High to Low</option>
            </select>
          </div>

          {/* All Products Area*/}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index)=> (
                <ProductItem key={index} id={item._id} image = {item.image}  name={item.name}  price={item.price}/>
              ))
            }

          </div>

        </div>
    </div>
  )
}

export default Collection