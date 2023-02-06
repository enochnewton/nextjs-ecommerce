import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const ProductContainer = () => {
  const { products, selectedProducts } = useSelector(state => state.product);
  return (
    <>
      {selectedProducts.length > 0
        ? selectedProducts?.map(product => (
            <Product key={product._id} {...product} />
          ))
        : products?.map(product => <Product key={product._id} {...product} />)}
    </>
  );
};

export default ProductContainer;
