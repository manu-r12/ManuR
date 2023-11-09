import Image from 'next/image'
import styles from './about.module.css'
import React, { useRef } from 'react'
import Link from 'next/link'
import { GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { useInView , motion} from 'framer-motion'

const About = () => {

    const phrase = "In my free time , i enjoy reading books , doing gardening , try to cook my favoirate food "
    const ref = useRef(null)
    const isInView = useInView(ref, {amount: 0.4 ,once: true})

  return (
    <div id='about' className={styles.container}>
        
        <motion.h1 ref={ref}   
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1}} className={styles.headingTitle}><div className={styles.dot}/>About</motion.h1>
        <div className={styles.subContianer}>
                <div className={styles.secton1} >
                       
                        <motion.h1   initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4}} className={styles.myName} >My Name is Manu Rajbhar but you can call me MR.</motion.h1>
                        <motion.p   initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4}}>I'm a passionate programmer with a lifelong passion for computers and technology. Since the age of 11, when my father introduced me to my first computer, I've been captivated by the magic of the digital world. From those early days of curiosity, I've grown into a good developer, interested in building Websites , Games , Machine Learning Models and iOS Applications. I've embraced the ever-evolving tech landscape, refining my skills and knowledge to create user-friendly digital solutions. I love turning ideas into functional, elegant websites and apps that leave a lasting impact and my goal is to make technology accessible and enjoyable for all.</motion.p>
                </div>
                <div className={styles.secton2} >
                    <motion.div   initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4}} className={styles.imageCircle}>
                                <div className={styles.innerCircle}>
                               <Image src={"/images/imgm.jpg"} style={{scale:"1" , top: "6%"}} objectFit='cover'  fill={true}/>
                                </div>
                    </motion.div>
                    <motion.div   initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4}} className={styles.smallCircle}>
                                 <div className={styles.innerSmallCircle}>
                                <p> Hi, Nice to meet you today! : )</p>
                                </div>
                    </motion.div>
                  
                </div>
        </div>

                     <motion.div   initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4}} className={styles.Links}>
                            <Link  href={"https://www.linkedin.com/in/manu-r-b08125219/"} className={styles.link}><LinkedIn fontSize='large'/></Link>
                            <Link href={"https://github.com/manu-r12"} className={styles.link}><GitHub fontSize='large'/></Link>
                            <Link href={"https://www.instagram.com/manu_r_3/"} className={styles.link}><Instagram fontSize='large'/></Link>
                            {/* <Link href={"https://open.spotify.com/user/31i4bnc4eho2s2eurc7uvr5olgfq?si=b99cc5193f4244db"} className={styles.link}><MusicNoteTwoTone fontSize='large'/></Link> */}
                    </motion.div>

                    <div className={styles.patterns }>
                     <Image src={"/images/svg.png"} height={200} width={200} />
                     <Image src={"/images/svg.png"} height={200} width={200} />
                     <Image src={"/images/svg.png"} height={200} width={200} />
                     <Image src={"/images/svg.png"} height={200} width={200} />
                     <Image src={"/images/svg.png"} height={200} width={200} />
                     <Image src={"/images/svg.png"} height={200} width={200} />
                     <Image src={"/images/svg.png"} height={200} width={200} />
                     <Image src={"/images/svg.png"} height={200} width={200} />
                 
                        
                    </div>
       
    </div>
  )
}

export default About