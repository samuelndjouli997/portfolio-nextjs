import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { transition1 } from '@/transitions/transitions'

type Props = {
    children: ReactNode
}

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
}

const Layout = ({ children }: Props): JSX.Element => (

    <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={transition1}
        className='section'
    >
        {children}
    </motion.section>

)

export default Layout