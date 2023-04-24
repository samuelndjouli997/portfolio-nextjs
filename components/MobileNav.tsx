import React, { useState } from 'react';

// import react-icons
import { IoMdClose } from "react-icons/io";
import { CgClose, CgMenuRight } from "react-icons/cg";

// import Link
import Link from 'next/link';

// import motion
import { motion } from 'framer-motion';

// menu variants
const menuVariants = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

type Props = {
  setNavMobile: (navMobile: boolean) => void
}


const MobileNav = ({ setNavMobile }: Props) => {

  return (
    <nav className="lg:hidden bg-primary h-full top-0 bottom-0 w-80 flex justify-center items-center">
      {/* nav open button */}
      <div onClick={() => setNavMobile(false)} className="absolute top-4 right-4 cursor-pointer">
        <CgClose className="text-3xl text-white" />
      </div>
      {/* menu */}


      {/* menu list */}
      <ul className="text-xl flex flex-col gap-y-8 text-white">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

    </nav>
  )
};

export default MobileNav;
