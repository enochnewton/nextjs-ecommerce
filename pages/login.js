import Link from "next/link";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "../firebase/config";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../features/authSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const { userName } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogin = e => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const myPromise = signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        router.back();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    toast.promise(myPromise, {
      loading: "Loading...",
      success: `Welcome ${userName}`,
      error: "Error when fetching",
    });
  };
  // login with google

  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    const myPromise = signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(userLoggedIn());
        setEmail("");
        setPassword("");
        router.back();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
    toast.promise(myPromise, {
      loading: "Loading...",
      success: `Welcome ${userName}`,
      error: "Error when fetching",
    });
  };

  return (
    <div className='sm:w-[45%] mx-auto'>
      <form
        onSubmit={handleLogin}
        className='flex flex-col contact-form text-[1.3rem] font-[500] mb-[1.6rem] '
      >
        <h1 className='text-center mb-5 text-[25px] font-bold'>
          Login <br /> welcome back
        </h1>

        <input
          type='email'
          className='form-input'
          placeholder='Enter your Email'
          value={email}
          required
          onChange={e => setEmail(e.target.value)}
        />
        <div className='relative'>
          <input
            type={showPassword ? "text" : "password"}
            className='form-input'
            required
            placeholder='Enter your Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <div onClick={() => setShowPassword(prev => !prev)}>
            {showPassword ? (
              <AiFillEye
                size={30}
                className='absolute cursor-pointer top-[10px] right-5'
              />
            ) : (
              <AiFillEyeInvisible
                size={30}
                className='absolute cursor-pointer top-[10px] right-5'
              />
            )}
          </div>
        </div>

        <button
          type='submit'
          className='px-6 py-3 text-white bg-tertiary rounded-2xl'
        >
          Login
        </button>
      </form>
      <div className='mx-auto w-[80%] flex flex-col items-center mt-3'>
        <h1 className='text-[14px] mt-2 text-center'>
          Dont have an account?
          <Link href='/register' className='ml-1 text-primary'>
            signup
          </Link>
        </h1>
        <div className='flex items-center justify-center w-full gap-2 mt-4'>
          <span className='w-[40%] h-[1px] border-black border ' />
          or
          <span className='w-[40%] h-[1px] border-black border' />
        </div>
        <button
          onClick={loginWithGoogle}
          className='mt-4 sm:w-[250px]  px-6 py-3 text-[15px] shadow-2xl cursor-pointer hover:bg-primary hover:text-white gap-4 border border-black items-center bg-white rounded-2xl flex'
        >
          <FcGoogle size={25} />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
