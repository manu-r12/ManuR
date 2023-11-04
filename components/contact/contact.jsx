import { useInView , motion} from 'framer-motion'
import styles from './contact.module.css'

import React, { useRef } from 'react'
import { EmailOutlined, GitHub, Instagram, LinkedIn, MuseumOutlined, MusicNote, MusicNoteOutlined, MusicNoteTwoTone, WhatsApp } from '@mui/icons-material'
import Link from 'next/link'

const Contact = () => {
    const ref = useRef(null)
  const isInView = useInView(ref, {amount: 0.4 ,once: true})
  return (
    <motion.div id='contact' ref={ref}   
    style={{backgroundColor : isInView ? "#d5cdc4" : "black"}} className={styles.container}>

    <motion.div 
                
               initial={{opacity: 0 , y: 40}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 40}}
              transition={{ duration: 0.7, ease: "easeIn", delay: 0.3}} className={styles.pingBtn}><Link href={"mailto::manurajbhar12@gmail.com"}>Ping Me</Link></motion.div>


    <motion.h1 
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3}} className={styles.mainHeading}>Let's Talk...</motion.h1>

    <motion.div  initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3}} className={styles.contactInformations}>
        <div className={styles.socialLinks}>
            <h1>My Digital Spaces</h1>
            <div className={styles.links}>
                      
                            <Link  href={"https://www.linkedin.com/in/manu-r-b08125219/"} className={styles.link}><LinkedIn fontSize='large'/>LinkedIn</Link>
                            <Link href={"https://github.com/manu-r12"} className={styles.link}><GitHub fontSize='large'/>GitHub</Link>
                            <Link href={"https://www.instagram.com/manu_r_3/"} className={styles.link}><Instagram fontSize='large'/>Instagram</Link>
                            <Link href={"https://open.spotify.com/user/31i4bnc4eho2s2eurc7uvr5olgfq?si=b99cc5193f4244db"} className={styles.link}><MusicNoteTwoTone fontSize='large'/>Spotify</Link>
            </div>
        </div>
        <div className={styles.contactInfo}>
            <h1>Contact Details</h1>
            <div className={styles.contactInfoDiv}>
                <h1 style={{cursor: "default"}} className={styles.contactInfoElements}><EmailOutlined fontSize='large'/>manurajbhar12@gmail.com</h1>
                <Link href={"https://api.whatsapp.com/send/?phone=9548275470&text&type=phone_number&app_absent=0"} className={styles.contactInfoElements}><WhatsApp fontSize='large'/>Talk to me on WhatsApp</Link>
            </div>
        </div>
    </motion.div>          
    
    </motion.div>
  )
}

export default Contact

