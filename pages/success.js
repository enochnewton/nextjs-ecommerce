import Link from "next/link";
import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { runFireWorks, runSchoolPride } from "../lib/utils";
import { styles } from "../styles/styles";

const Success = () => {
  useEffect(() => {
    runFireWorks();
  }, []);

  return (
    <div className='sm:min-h-[69vh] bg-white min-h-[60vh]'>
      <div className={`${styles.success}`}>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2 className='capitalize text-[17px] sm:text-[40px] mt-[15px] font-bold text-[#324d67] '>
          Thank you for your order!
        </h2>
        <p className='email-msg'>Check your email for the receipt.</p>
        <p className='description'>
          If you have any questions, please email{" "}
          <a href='mailto:enochnewton2@gmail.com' className='email'>
            enochnewton2@gmail.com
          </a>
        </p>
        <Link href='/'>
          <button className='bg-tertiary py-3 px-6 rounded-lg text-white hover:opacity-[0.8] hover:text-very-dark-blue'>
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
