'use client'
import React, { useRef } from 'react'
import styles from './projects.module.css'
import Link from 'next/link'
import { NorthEastOutlined } from '@mui/icons-material'
import { useInView,  motion} from 'framer-motion'

const Projects = ({Name, link, platform}) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.5 ,once: true})
    
  return (
    <motion.div 
         ref={ref}
    initial={{opacity: 0 , y: 40}}
    animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 40}}
   transition={{ duration: 0.4, ease: "easeInOut",}} className={styles.container}>
        <div className={styles.details}>
            <h1>{Name}</h1>
            <p>{platform}</p>
        </div>
        <div className={styles.linkIcon}>
            <Link href={`${link}`}><NorthEastOutlined className={styles.link}  fontSize='large'/></Link>
        </div>
    </motion.div>
  )
}

export default Projects