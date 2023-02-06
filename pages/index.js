import React from "react";
import { useDispatch } from "react-redux";
import { CategoryDesktop, CategoryMobile } from "../components";
import { productCart } from "../features/productSlice";
import { client } from "../lib/client";
import { motion } from "framer-motion";
import { containerVariants } from "../lib/motion";

const Products = ({ products }) => {
  const dispatch = useDispatch();
  dispatch(productCart(products));

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      exit='exit'
      animate='visible'
    >
      <CategoryMobile />
      <CategoryDesktop />
    </motion.div>
  );
};

export default Products;
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
