import React from 'react'

// import motion
import { motion } from 'framer-motion'

// import Image
import Image from 'next/image'
import { transition1 } from '@/transitions/transitions'

type itemType = {
    id: number,
    date: string,
    url: string,
    title: string,
    content: string,
    link: string,
    img: {
        stack1: string,
        stack2: string,
        stack3?: string,
    },

}

const ProjectCard = ({ id, date, url, title, content, link, img }: itemType) => {



    return (
        <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '0' }}
            exit={{ x: '100%' }}
            transition={transition1}
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`w-full block lg:grid lg:grid-cols-[2fr_1fr] items-center lg:gap-0 md:gap-4 mb-[72px]`}
        >

            <a href={link} target="_blank">
                <div className="relative overflow-hidden rounded-md shadow-xl">
                    <Image
                        src={url}
                        width={800}
                        height={499}
                        alt=""
                        className="w-full transition ease-in duration-[0.3s] hover:scale-125"
                    />
                </div>
            </a>

            <div className="z-2 flex flex-col lg:text-end lg:items-end gap-2 md:order-2 text-left items-start p-2 lg:-translate-x-14">
                <div className="leading-4">
                    <small className="text-gray-500">{date}</small>
                    <h3 className="text-[24px] font-bold lg:mt-2 lg:mb-2">{title}</h3>
                </div>
                {/* <p className="w-full z-1 p-8 bg-white -ml-6 rounded-md shadow-sm text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br /> Minus, maiores laudantium laboriosam placeat <br /> dolores ipsam rem assumenda <br /> aliquam ratione distinctio!</p> */}
                <p className="w-full z-1 p-8 bg-white -ml-6 rounded-md shadow-sm text-justify">{content}</p>
                <ul className="flex gap-x-4 text-2xl mt-2">
                    <li>
                        <Image width={50} height={50} src={img.stack1} alt="" />
                    </li>
                    <li>
                        <Image src={img.stack2} alt="" width={60} height={60} />
                    </li>
                    {
                        img.stack3 && <li><Image src={img.stack3} width={50} height={50} alt="" /></li>
                    }

                </ul>

            </div>
        </motion.div>

    )
}

export default ProjectCard