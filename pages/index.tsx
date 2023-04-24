import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// import motion
import { motion } from 'framer-motion';

// import Link 
import Link from 'next/link';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { transition1 } from '@/transitions/transitions';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row md:flex-row lg:pt-10">
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="flex-1 order-3 lg:order-1 md:order-1"
          >
            <h1 className="text-[32px] md:text-[40px] lg:text-[52px] font-bold leading-tight mb-6">Samuel N. <br /> <span className="gradient__text">Front-End</span> Developer 🚀</h1>
            <p className="max-w-[440px] md:max-w-[320px] leading-relaxed mb-8" >Je développe des interfaces utilisateurs, des sites web, des web app, landing pages, et bien plus encore !
            </p>

            <Link href="/contact" className="btn lg:h-16 w-[220px] lg:w-[210px] gap-x-3 lg:text-base text-white">
              Contactez-moi
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </Link>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={transition1}
            className="flex-1 max-w-[450px] mb-10 md:mt-0 lg:mt-0 order-2 md:order-1 lg:order-1"
          >
            <Image
              width={400}
              height={400}
              alt="photo samuel ndjouli"
              src="/img/home/home-img.png"
            />
          </motion.div>

        </div>
      </div>
    </Layout>

  )
}
