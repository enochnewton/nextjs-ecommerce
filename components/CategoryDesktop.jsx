import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryItems, exploreItems } from "../features/productSlice";
import ProductContainer from "./ProductContainer";

const CategoryDesktop = () => {
  const { products, selectedProducts } = useSelector(state => state.product);
  const [setItems] = useState(products);
  const dispatch = useDispatch();
  const handleCategories = category => {
    dispatch(categoryItems(category));
    setItems(selectedProducts);
  };
  const handleItems = category => {
    dispatch(exploreItems(category));
    setItems(selectedProducts);
  };
  return (
    <div className='hidden mt-8 sm:grid desktop'>
      {/* category */}
      <div className='flex bg-pale-orange rounded-tr-[16px] justify-center h-[50px] category'>
        <h1 className='flex items-center justify-center w-full gap-6 text-tertiary'>
          <Image width={30} height={40} src='/party.png' alt='category' />
          Category
        </h1>
        <button
          onClick={() => handleCategories("men")}
          className='flex items-center justify-center w-full gap-6'
        >
          <Image width={30} height={40} src='/man.png' alt='man' />
          Men
        </button>
        <button
          onClick={() => handleCategories("women")}
          className='flex items-center justify-center w-full gap-6'
        >
          <Image width={30} height={40} src='/woman.png' alt='woman' />
          Women
        </button>
      </div>
      {/* explore */}
      <aside className='font-[700] h-max rounded-tl-[16px] bg-pale-orange mr-3 pt-4  font-serif explore flex flex-col items-center'>
        <h1 className='flex items-center gap-3 my-10 text-tertiary'>
          <Image width={30} height={40} src='/explore.png' alt='explore' />
          Explore
        </h1>
        <hr className='w-full h-[1px]' />
        <button
          onClick={() => handleItems("clothes")}
          className='flex items-center justify-center w-full gap-6 my-9 '
        >
          <Image width={30} height={40} src='/purse.png' alt='explore' />
          Clothes
        </button>
        <hr className='w-full h-[1px]' />
        <button
          onClick={() => handleItems("shoes")}
          className='flex items-center justify-center w-full gap-6 my-9'
        >
          <Image width={30} height={40} src='/shoe.png' alt='explore' />
          Shoes
        </button>
        <hr className='w-full h-[1px]' />
        <button
          onClick={() => handleItems("jewelery")}
          className='flex items-center justify-center w-full gap-6 my-9'
        >
          <Image width={30} height={40} src='/jewelery.png' alt='explore' />
          Jewelery
        </button>
      </aside>
      <div className='flex flex-wrap justify-center gap-x-3 last:justify-start products'>
        <ProductContainer />
      </div>
    </div>
  );
};

export default CategoryDesktop;
