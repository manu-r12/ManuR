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
    <div className={styles.container}>
       
        <motion.h1 ref={ref}   
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1}} className={styles.headingTitle}><div className={styles.dot}/>About</motion.h1>
        <div className={styles.section}>
                <div className={styles.sectionone}>
                    <motion.div  
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1}} className={styles.infoSectionOne}>
                        <h1 className={styles.headingOne}>Happy to meet you today</h1>
                    </motion.div>
                    <div className={styles.infoSectiontwo}>
                        <div className={styles.contactInfo}>
                        <motion.h1    
                    initial={{opacity: 0 , y: 100}}
                  animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
                 transition={{ duration: 0.9, ease: "easeOut", delay: 0.2}}  className={styles.headingName}>My Name is <span style={{backgroundColor:"white", color:"black", borderRadius:"40px", padding:"0px 20px" , fontStyle:"italic"}}>Manu Rajbhar</span> but you can call me <span style={{backgroundColor:"#739072", color:"black", borderRadius:"40px", padding:"0 20px " ,fontStyle:"italic" }}>MR 😄</span></motion.h1>
                        <motion.div  
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3}} className={styles.socialLinks}>
                            <Link href={"https://www.linkedin.com/in/manu-r-b08125219/"} className={styles.link}><LinkedIn fontSize='large'/>LinkedIn</Link>
                            <Link href={"https://github.com/manu-r12"} className={styles.link}><GitHub fontSize='large'/>GitHub</Link>
                            <Link href={"https://twitter.com/manu41844334/status/1644582983419191298?s=46&t=YXCe5bLV4x4XhVVbhDo6HQ"} className={styles.link}><Twitter fontSize='large'/>Twitter</Link>
                            {/* <Link href={"https://www.instagram.com/manu_r_3/"} className={styles.link}><Instagram fontSize='large'/>Instagram</Link> */}
                            {/* <Link href={"#"} className={styles.link}><LinkedIn fontSize='large'/>LinkedIn</Link> */}
                        </motion.div>
                        </div>
                        <motion.h1   
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.4}} className={styles.headingTwo}>I'm a passionate programmer with a lifelong passion for computers and technology. Since the age of 11, when my father introduced me
               to my first computer, I've been captivated by the magic of the digital world. From those early days of curiosity, I've grown into a good developer, interested in building Websites , Games , Machine Learning Models and iOS Applications. I've embraced the ever-evolving tech landscape, refining my skills and knowledge to create user-friendly digital solutions. I love turning ideas into functional, elegant websites and apps that leave a lasting impact and my goal is to make technology accessible and enjoyable for all.</motion.h1>
                    </div>
                </div>
                <motion.div   
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2}} className={styles.sectiontwo}>
                    <Image style={{borderRadius: "40px"}} width={400} height={600} src={"/images/me.jpg"}/>
                </motion.div>
        </div>
       
    </div>
  )
}

export default About