import { useRouter } from "next/router";
import React, { useRef } from "react";
import {
  AiFillStar,
  AiOutlineArrowLeft,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/Ai";
import { useDispatch } from "react-redux";
import Product from "../../components/Product";
import { addToCart } from "../../features/productSlice";
import { client, urlFor } from "../../lib/client";
import {
  containerVariants,
  fadeIn,
  textContainer,
  textVariant,
} from "../../lib/motion";
import { motion } from "framer-motion";

const SingleProduct = ({ product, products }) => {
  const { description, details, name, category, image, _id, price } = product;

  const dispatch = useDispatch();
  const parentRef = useRef(null);
  const router = useRouter();
  const handleAddToCart = id => {
    dispatch(addToCart(id));
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      exit='exit'
      animate='visible'
    >
      <article className='mt-3'>
        <div className='relative sm:flex sm:mt-10'>
          <div className='w-[90%] sm:flex-[1] mx-auto'>
            <motion.div
              variants={fadeIn("up", "spring", 0.3, 0.4)}
              initial='hidden'
              animate='show'
              className='flex justify-between pt-1'
            >
              <button onClick={() => router.back()}>
                <AiOutlineArrowLeft size={25} />
              </button>
              <p className='right-0 text-[12px] text-Grayish-blue sm:absolute'>
                products/{category}
              </p>
            </motion.div>
            {/* description */}
            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.4)}
              initial='hidden'
              animate='show'
              className='mt-2'
            >
              <p className='text-[12px] sm:mb-2 text-Grayish-blue'>{details}</p>
              <p className='text-lg font-bold'>{name}</p>
              <div className='flex mt-2 place-content-center'>
                <img
                  src={urlFor(image)}
                  className='w-full rounded-2xl'
                  alt={category}
                />
              </div>
            </motion.div>
          </div>
          {/* content */}
          <motion.div
            variants={textContainer}
            initial='hidden'
            animate='show'
            className='p-8 sm:mx-14 sm:px-16 sm:flex-1 bg-pale-orange sm:bg-[#fcffe7] mt-7 rounded-3xl'
          >
            <motion.div
              variants={textVariant(0.2)}
              initial='hidden'
              animate='show'
              className='flex justify-between mb-3 text-black sm:mb-6'
            >
              <p className='font-[600]'>${price}</p>
              <AiOutlineHeart size={20} />
            </motion.div>
            <motion.p
              variants={textVariant(0.4)}
              initial='hidden'
              animate='show'
              className='my-9 text-[15px] text-black50 sm:my-14'
            >
              {description}
            </motion.p>
            <motion.div
              variants={textVariant(0.6)}
              initial='hidden'
              animate='show'
              className='flex gap-2 mb-6 sm:mb-10 '
            >
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiFillStar size={25} />
              <AiOutlineStar size={25} />
            </motion.div>
            <button
              onClick={() => handleAddToCart(_id)}
              className='flex p-[18px] hover:bg-secondary bg-tertiary text-white w-full gap-3 justify-center items-center rounded-2xl font-[700] text-[16px]'
            >
              Add to cart
              <AiOutlineShoppingCart size={25} />
            </button>
          </motion.div>
        </div>
      </article>
      {/* bottom section */}
      <div className='maylike-products-wrapper'>
        <h2 className='font-bold underline'>You may also like</h2>
        <div className='marquee'>
          <div ref={parentRef} className='maylike-products-container track'>
            {products.map(item => (
              <Product key={item._id} parent={parentRef} {...item} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SingleProduct;

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product },
  };
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map(product => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
