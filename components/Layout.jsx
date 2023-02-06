import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Enoch&apos;s Store</title>
        <link rel='shortcut icon' href='./favicon.ico' type='image/x-icon' />
      </Head>
      <header className='2xl:mx-auto duration-900 2xl:w-[89%]'>
        <Navbar />
      </header>
      <main className='min-h-[76vh] mx-2 sm:mx-10 md:mx-16 2xl:mx-auto 2xl:w-[80%]'>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
