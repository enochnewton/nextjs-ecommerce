import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import Image from "next/image";
import ProductContainer from "./ProductContainer";
import { useDispatch, useSelector } from "react-redux";
import { categoryItems, exploreItems } from "../features/productSlice";
import { motion } from "framer-motion";
import { fadeIn } from "../lib/motion";
const CategoryMobile = () => {
  const { products, selectedProducts } = useSelector(state => state.product);
  const [dropDown, setDropDown] = useState(false);
  const [setItems] = useState(products);
  const dispatch = useDispatch();
  const handleCategories = category => {
    dispatch(categoryItems(category));
    setItems(selectedProducts);
  };
  const handleItems = category => {
    dispatch(exploreItems(category));
    setItems(selectedProducts);
    setDropDown(false);
  };

  return (
    <div className='flex flex-col sm:hidden'>
      <div className='flex sm:hidden justify-between text-[12px] mt-3 font-medium'>
        <div className='flex gap-4 text-very-dark-blue'>
          <button
            onClick={() => handleCategories("men")}
            className='flex items-center gap-1 px-3 py-1 shadow-lg rounded-2xl bg-pale-orange'
          >
            <Image src='/man.png' alt='man' width={20} height={20} />
            Men
          </button>
          <button
            onClick={() => handleCategories("women")}
            className='flex items-center gap-1 px-3 py-1 shadow-lg rounded-2xl bg-pale-orange'
          >
            <Image src='/woman.png' alt='woman' width={20} height={20} />
            Women
          </button>
        </div>
        {/* category */}
        <div className='relative items-center px-3 py-1 shadow-lg rounded-2xl bg-pale-orange'>
          <div
            onClick={() => setDropDown(prev => !prev)}
            className='flex items-center gap-2 cursor-pointer'
          >
            Category
            <AiOutlineArrowDown />
          </div>
          {dropDown && (
            <motion.div
              variants={fadeIn("up", "spring", 0, 0.5)}
              initial='hidden'
              animate='show'
              className='absolute flex flex-col h-[100px] w-[100px] left-0 justify-between p-3 top-9 rounded-2xl bg-pale-orange'
            >
              <button
                onClick={() => handleItems("jewelery")}
                className='flex gap-3'
              >
                <Image src='/jewelery.png' alt='woman' width={13} height={13} />
                Jewelery
              </button>
              <hr />
              <button
                onClick={() => handleItems("clothes")}
                className='flex gap-3'
              >
                <Image src='/purse.png' alt='woman' width={13} height={13} />
                Clothing
              </button>
              <hr />
              <button
                onClick={() => handleItems("shoes")}
                className='flex gap-3'
              >
                <Image src='/shoe.png' alt='woman' width={13} height={13} />
                Shoes
              </button>
            </motion.div>
          )}
        </div>
      </div>
      <ProductContainer />
    </div>
  );
};

export default CategoryMobile;
