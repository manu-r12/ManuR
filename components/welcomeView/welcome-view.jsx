'use client';
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../navbar/navbar'
import styles from './wlecome.module.css'
import Image from 'next/image'
import { motion } from 'framer-motion';
import SouthIcon from '@mui/icons-material/South';

import { LocationCityOutlined, LocationOnSharp } from '@mui/icons-material';
import gsap from 'gsap';
import { getScrollY } from '@/lib/getScrollY';


const WelcomeView = () => {

    const scrollY = getScrollY(); 
    const scale = 1 - scrollY / 1000;
    const opacity = 1 - scrollY / 300;
    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const speed = 0.02
    // for moving the images
    const handleMouseMove = (e) =>{
      const {movementX, movementY} = e;
      gsap.set(ref1.current, {x: `+=${movementX * speed}`, y: `+=${movementY * speed}`})
      gsap.set(ref2.current, {x: `+=${movementX * 0.03}`, y: `+=${movementY *  0.03}`})
      gsap.set(ref3.current, {x: `+=${movementX *  0.04}`, y: `+=${movementY *  0.04}`})
    }

  return (
        <div
          onMouseMove={(e) => handleMouseMove(e)}
          style={{ transform: `scale(${scale})`, opacity: opacity }} 
          className={styles.container} id='banner'>  
                 <Navbar/>
          <div ref={ref1}  className={styles.plane}>
          <motion.div
          initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }} className={styles.floatingImages}>
            <Image width={300} height={350} src={"/images/i1.jpeg"}/>
          </motion.div> 
          </div>
          <div ref={ref2} className={styles.plane}>
             <motion.div
          initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}  className={styles.floatingImages1}>
            <Image width={300} height={350} src={"/images/i2.jpeg"}/>
          </motion.div>
          </div>
          <div ref={ref3} className={styles.plane}>
          <motion.div
          initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}  className={styles.floatingImages2}>
            <Image width={300} height={350} src={"/images/i3.jpeg"}/>
          </motion.div>  
     
          </div>
       
          <motion.div
          initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}  className={styles.arrow}>
            <Image className={styles.arrow} width={100} height={100} src={"/icons/a2.png"}/>
          </motion.div>  
           
       
  
            <motion.p  initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.9 }} className={styles.floatingText}>I like aesthetic things😉</motion.p>

        
     
          <div className={styles.subContainer}>
          <motion.div
          initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut", delay: .8 }}
            className={styles.contents}>
              <div  className={styles.textsForWelcome}>
               <h1  className={styles.welcomeTextForMob}>An Optimistic Passionate <span className={styles.progammerP}>Programmer</span></h1>
                <h1  className={styles.welcomeText}>An Optimistic&nbsp;&nbsp;&nbsp; Passionate <span className={styles.progammerP}>Programmer</span></h1>
                <div className={styles.basedInDiv}>
                <h1 style={{display:"flex", alignItems:"center"}}><div className={styles.line} />Based in</h1>
                <p className={styles.aboutMeP}>I'm Manu Rajbhar, a skilled programmer. I'm dedicated to creating exceptional digital solutions. Let's work together to turn your ideas into functional and user-friendly software.</p>
                </div>
                <h1 className={styles.indiaText}><LocationOnSharp fontSize='large'/>India</h1>
            
              </div>
          </motion.div>
              
            <motion.div
          initial={{opacity: 0 , y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{ duration: 1, ease: "easeOut", delay: 1.3}} className={styles.downArrow}>
           
            <SouthIcon className={styles.downArrowIcon} fontSize='medium'/>
            </motion.div>
          </div>
        </div>
  )
}

export default WelcomeView


