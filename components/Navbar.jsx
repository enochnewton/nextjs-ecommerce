import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsFillPersonCheckFill, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { styles } from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/router";
import { toast } from "react-hot-toast";
import {
  setCurrentUserName,
  userLoggedIn,
  userLoggedOut,
} from "../features/authSlice";
import { motion } from "framer-motion";
import { navVariants } from "../lib/motion";

const Navbar = () => {
  const { totalQty } = useSelector(state => state.product);
  const [userModal, setUserModal] = useState(false);
  const { isUserLoggedIn, userName } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
        toast.success("Logged out successfully");
      })
      .catch(error => {
        toast.error(error.message);
      });
  };
  // actions when user is signed in or out
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        const { email, displayName } = user;
        if (displayName === null) {
          const initial = email.substring(0, email.indexOf("@"));
          const firstName = initial.charAt(0).toUpperCase() + initial.slice(1);
          dispatch(userLoggedIn());
          dispatch(setCurrentUserName(firstName));
        } else {
          let initial = displayName.substring(0, displayName.indexOf(" "));
          let firstName = initial.charAt(0).toUpperCase() + initial.slice(1);
          dispatch(setCurrentUserName(firstName));
        }
      } else {
        dispatch(userLoggedOut());
      }
    });
  }, [userName, dispatch, isUserLoggedIn]);

  const UserComponent = () => (
    <>
      {isUserLoggedIn && (
        <>
          Hi,{" "}
          {userName.length > 5
            ? userName.substring(0, 5).padEnd(7, ".")
            : userName}
        </>
      )}
    </>
  );

  // animations

  return (
    <motion.nav
      variants={navVariants}
      initial='hidden'
      animate='show'
      className=' w-full bg-white sm:bg-inherit'
    >
      <div className='sm:mt-[36px] sm:w-[90%] h-[65px] sm:h-auto relative text-zinc-700 sm:mx-auto'>
        <div className='flex items-center mt-2'>
          {/* logo */}
          <Link href={"/"} className=''>
            <Image src='/logo.svg' alt='logo' width={90} height={45} />
          </Link>

          {/* cart and signin */}
          <div
            className={`${styles.flexEnd} justify-end sm:flex-1 flex-[2] gap-5 mr-4`}
          >
            {/* user */}
            <div
              className={`${styles.flexCenter} cursor-pointer relative gap-2`}
            >
              <button onClick={() => setUserModal(prev => !prev)}>
                {isUserLoggedIn ? (
                  <BsFillPersonCheckFill size={25} />
                ) : (
                  <BsPerson size={25} />
                )}
              </button>
              <p className='hidden sm:block'>
                <UserComponent />
              </p>
              {userModal && (
                <div className='absolute z-20 flex flex-col items-center gap-3 p-5 bg-white rounded-lg shadow-md top-10'>
                  <p className='sm:hidden'>
                    <UserComponent />
                  </p>
                  {isUserLoggedIn ? (
                    <button
                      onClick={() => {
                        logoutUser(), setUserModal(false);
                      }}
                      className='flex p-[10px] text-white gap-3 items-center rounded-2xl font-[700] text-[12px] bg-primary'
                    >
                      Logout <FiLogOut />
                    </button>
                  ) : (
                    <Link
                      className='flex p-[10px] text-white gap-3 items-center rounded-2xl font-[700] text-[12px] bg-primary'
                      onClick={() => setUserModal(false)}
                      href={"/login"}
                    >
                      LogIn <FiLogIn />
                    </Link>
                  )}
                </div>
              )}
            </div>
            <Link
              href={isUserLoggedIn ? "/cart" : "/login"}
              onClick={() =>
                isUserLoggedIn || toast.error("Please login first")
              }
              className='relative'
            >
              <AiOutlineShoppingCart size={25} />
              {totalQty > 0 && (
                <span className='cart-item-qty'>{totalQty}</span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
