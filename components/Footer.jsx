import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='flex flex-col items-center mt-[32px] gap-3 py-4 bg-white'>
      {/* links */}
      <div className='flex justify-between gap-4'>
        <BsFacebook size={25} color='#FF3C38' />
        <BsInstagram size={25} color='#FF3C38' />
        <BsTwitter size={25} color='#FF3C38' />
        <BsLinkedin size={25} color='#FF3C38' />
      </div>
      <p className='text-center'>©️ 2023 Enoch Kathiomi. All rights reserved</p>
    </div>
  );
};

export default Footer;
