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
    // <section className="section">
    //   <div className="container mx-auto h-full relative">
    //     {/* text & img wrapper */}
    //     <div className="flex flex-col justify-center">
    //       {/* text */}
    //       <div className="w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start">
    //         <h1 className="h1">
    //           samuel n. <br /> front-end developer
    //         </h1>
    //         <p className="text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12">Lorem Ipsum sit amet dolor.</p>
    //         <Link href="/contact" className="btn mb-[30px]">
    //           Contactez-moi
    //         </Link>
    //       </div>

    //       {/* image */}
    //       <div className="flex justify-end max-h-96 lg:max-h-max">
    //         <div className="relative lg:-right-40 overflow-hidden">
    //           <img src="/img/home/woman.png" alt
    //             ="" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <Layout>
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:flex-row lg:pt-10">
          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: '-50%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-50%' }}
            transition={transition1}
            className="flex-1"
          >
            <h1 className="text-[32px] lg:text-[52px] font-bold leading-tight mb-6">Samuel N. <br /> <span className="gradient__text">Front-End</span> Developer 🚀</h1>
            <p className="max-w-[440px] leading-relaxed mb-8" >Je développe des interfaces utilisateurs, des sites web, des web app, landing pages, et bien plus encore !
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
            className="flex-1 max-w-[450px]"
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
