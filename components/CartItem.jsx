import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { removeItem, toggleCartQuantity } from "../features/productSlice";
import { urlFor } from "../lib/client";

const CartItem = ({ image, price, name, details, qty, _id }) => {
  const dispatch = useDispatch();

  return (
    <article className='flex justify-between gap-4 p-3 mt-8 rounded-lg shadow-lg'>
      {/* image */}
      <div className='flex-1'>
        <img src={urlFor(image)} className='w-auto h-[150px]' />
      </div>
      {/* content */}
      <div className='flex-[2]'>
        <div className='mb-2'>
          <p className='mb-1 text-Grayish-blue'>{details}</p>
          <h1 className='font-[600] mb-1'>{name}</h1>
          <p className=''>${price}</p>
        </div>
        {/* buttons */}
        <div className='flex justify-between mt-5 gap-6 w-[93%]'>
          <div className='flex-[2] items-center flex justify-between'>
            <button
              onClick={() =>
                dispatch(toggleCartQuantity({ id: _id, type: "dec" }))
              }
              className='flex items-center justify-center w-8 h-8 rounded-[50%] bg-Grayish-blue'
            >
              <HiOutlineMinus />
            </button>
            <span>{qty}</span>
            <button
              onClick={() =>
                dispatch(toggleCartQuantity({ id: _id, type: "inc" }))
              }
              className='flex items-center justify-center w-8 h-8 rounded-[50%] bg-Grayish-blue'
            >
              <HiOutlinePlus />
            </button>
          </div>
          <div className='flex justify-end flex-1'>
            <button
              onClick={() => dispatch(removeItem(_id))}
              className='flex items-center text-white justify-center w-8 h-8 rounded-[50%] bg-error'
            >
              <AiOutlineDelete />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
