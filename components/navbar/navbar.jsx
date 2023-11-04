import Link from 'next/link'
import styles from './navbar.module.css'
import { motion, useScroll } from 'framer-motion'


import React from 'react'
import Image from 'next/image'
import { getScrollY } from '@/lib/getScrollY'

const Navbar = () => {
  const scrolly = getScrollY()
  const { scrollYProgress } = useScroll();
  const scrollToComponentB = (id) => {
    const componentB = document.getElementById('contact');

 
      componentB.scrollIntoView({ behavior: 'smooth' });
  
  };


  return (
    <div className={styles.container}>
        <nav className={styles.navContainer}>
            <div style={{fontFamily:"Playfair Display",  fontWeight: "600", fontSize:"35px"}} className={styles.logoDiv}>
              Manu♡R
            </div>
            <motion.div
               initial={{opacity: 0 , x: -50}}
               animate={{opacity: 1, x: 0}}
               transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}   className={styles.links}>
                <Link className={styles.link} href={"#"}>About Me</Link>
                <Link  className={styles.link}  href={"/projects"}>Projects</Link>
                <p style={{cursor: "pointer"}} onClick={scrollToComponentB} className={styles.link}  href={"#"}>Contact Me</p>
            </motion.div>
            <motion.div
       initial={{opacity: 0 , x: 50}}
       animate={{opacity: 1, x: 0}}
       transition={{ duration: 1, ease: "easeOut", delay: 1.1 }}  className={styles.otherLinks}>
                <Link className={styles.otherLink} href={"#"}>Resume</Link>
                </motion.div>
        </nav>
        <motion.div
        className={styles.progressbar}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}

export default Navbar