import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../components";
import { clearCart } from "../features/productSlice";
import getStripe from "../lib/getStripe";
import { motion } from "framer-motion";
import { containerVariants } from "../lib/motion";

const Cart = () => {
  const { cart, totalQty, totalPrice } = useSelector(state => state.product);
  const router = useRouter();
  const dispatch = useDispatch();

  // stripe payment
  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();

    toast.loading("Redirecting...");
    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <motion.div
      variants={containerVariants}
      initial='hidden'
      exit='exit'
      animate='visible'
      className='absolute top-0 right-0 w-full bg-[#fcffe7]'
    >
      <div className='relative sm:mx-auto sm:w-[60%]'>
        {/* top */}
        <div className='w-[96%] mt-4 mb-[100px] mx-auto'>
          <div className='flex items-center justify-between mb-6'>
            <button onClick={() => router.push("/")}>
              <AiOutlineArrowLeft size={25} />
            </button>
            <p className='font-[500] text-lg text-very-dark-blue'>My cart</p>
            <button
              onClick={() => dispatch(clearCart())}
              className='text-error'
            >
              Clear({totalQty})
            </button>
          </div>
          <div className=''>
            {cart?.map(product => (
              <CartItem key={product._id} {...product} />
            ))}
          </div>
        </div>
        {/* checkout */}
        {cart.length > 0 ? (
          <div className='fixed bottom-0 rounded-t-[2rem] sm:relative sm:mt-4 w-full flex left-[50%] translate-x-[-50%] h-[85px] bg-[#c9c0c0]'>
            <div className='flex flex-col flex-1 ml-4 place-content-center'>
              <span className='-mb-2'>Total:</span>
              <p className='font-bold text-[25px]'>${totalPrice.toFixed(2)}</p>
            </div>
            <div className='flex items-center justify-center flex-1'>
              <button
                onClick={handleCheckout}
                className='px-6 py-3 text-white bg-primary rounded-2xl'
              >
                Check out
              </button>
            </div>
          </div>
        ) : (
          <div className='m-auto flex flex-col items-center justify-center gap-8 mt-[96px] w-fit'>
            <h1 className='font-bold text-[20px]'>Your Cart is Empty</h1>
            <Link
              href={"/"}
              className='flex p-[18px] w-max text-white gap-3 items-center rounded-2xl font-[700] text-[16px] bg-primary'
            >
              Shop now <FiShoppingBag size={20} />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Cart;
