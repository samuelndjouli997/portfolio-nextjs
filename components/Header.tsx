import React from 'react';

// import components
import Socials from './Socials';
import MobileNav from './MobileNav';

// import Framer motion 
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CgMenuRight } from 'react-icons/cg';

type Props = {
  setNavMobile: (navMobile: boolean) => void
}


const Header = ({ setNavMobile }: Props) => {
  return (
    <header className="py-[30px] lg:pt-[60px]">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link scroll={false} href="/" className="max-w-[200px] text-2xl font-semibold">
          {/* <img src="/img/header/logo.svg" alt="" /> */}
          snafrontdev
        </Link>

        {/* Nav - initially hidden - show on desktop mode */}
        <div className="hidden lg:flex gap-x-[55px]">
          <nav className="flex items-center">
            <ul className="flex gap-x-8">
              <Link scroll={false} href="/" className="border-b-2 border-transparent hover:border-blue transition-all duration-300">
                Home
              </Link>
              <Link scroll={false} href="/about" className="border-b-2 border-transparent hover:border-blue transition-all duration-300">
                About
              </Link>
              <Link scroll={false} href="/portfolio" className="border-b-2 border-transparent hover:border-blue transition-all duration-300">
                Portfolio
              </Link>
              <Link scroll={false} href="/contact" className="border-b-2 border-transparent hover:border-blue transition-all duration-300">
                Contact
              </Link>
            </ul>
          </nav>
          {/* Socials */}
          <Socials />
        </div>
        {/* open nav btn  */}
        <div onClick={() => setNavMobile(true)} className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-3xl" />
        </div>
      </div>

      {/* Mobile Nav
      <MobileNav /> */}
    </header>
  )
};

export default Header;
