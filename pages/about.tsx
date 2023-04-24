import React from 'react'

// import transition
import { transition1 } from '@/transitions/transitions'

// import motion
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'

const About = () => {
    return (

        <Layout>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center lg:gap-x-24 lg:flex-row">
                    {/* image */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={transition1}
                        className="order-2 lg:order-1"
                    >
                        <Image
                            src="/img/about/about-img.png"
                            alt=""
                            width={533}
                            height={0}
                            className="w-[450px] h-auto"
                        />
                        {/* <img className="w-full h-full" src="/img/about/about-img.png" alt="" /> */}
                    </motion.div>
                    {/* text */}
                    <motion.div
                        initial={{ opacity: 0, y: '-50%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-50%' }}
                        transition={transition1}
                        className="order-1 lg:order-2 max-w-[480px]"
                    >
                        <h2 className="section-title">À propos de <span className="gradient__text">moi</span> 👋</h2>
                        <p className="mt-6 mb-8">Je me suis spécialisé sur React.js ainsi que son écosystème Javascript. J&apos;ai une forte appétence pour l&apos;UI/UX design, j&apos;utilise Figma pour créer puis intégrer les maquettes. Je suis donc très sensible au produit, son ergonomie et sa fluidité.</p>

                        <div className="mb-10 lg:mb-0">
                            <div className="flex justify-center items-center w-[140px] h-[140px] rounded-full bg-gradient-to-r from-[#918ef4] to-[#64c3e5] p-[2px] cursor-pointer">
                                <Link href="/portfolio" className="flex justify-center items-center flex-col bg-transparent w-[100%] h-[100%] rounded-full">
                                    <div className="flex justify-center items-start flex-row">
                                        <p className="font-medium text-[18px] leading-[23px] mr-2 text-white">Voir</p>

                                    </div>
                                    <p className="font-medium text-[18px] leading-[23px] text-white">
                                        mon portoflio
                                    </p>
                                </Link>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </Layout>

    )
}

export default About