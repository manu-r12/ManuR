import React, { useRef } from 'react'
import styles from './project.module.css'
import { NorthEastOutlined } from '@mui/icons-material'
import { useInView , motion} from 'framer-motion'
import { useRouter } from 'next/router'
const Project = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, {amount: 0.4 ,once: true})
  const router = useRouter()

  const handleClick = () =>{
      router.push("/projects")
  }

  return (
    <div onClick={handleClick}  ref={ref} className={styles.container}>
        <motion.h1 
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1}} className={styles.mainHeading}><div className={styles.dot}/>Projects</motion.h1>
        <motion.div 
               initial={{opacity: 0 , y: 60}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 60}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3}} className={styles.linkDiv}>
            <p className={styles.linkp} style={{display:"flex", alignItems:"center", gap:"10px"}}>Click here to see the <span style={{backgroundColor: "#7743DB" , padding: "0px 20px",  borderRadius: "24px", fontStyle:"italic", fontFamily:"Playfair Display"}}>Things</span> i've worked on for fun  <NorthEastOutlined fontSize='large'/></p>

        </motion.div>
        <motion.div 
               initial={{opacity: 0 , y: 60}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 60}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3}} className={styles.linkDivM}>
            <p className={styles.linkp} style={{display:"flex", alignItems:"center", gap:"10px"}}>Click here to see the Things i've worked on for fun  <NorthEastOutlined fontSize='large'/></p>

        </motion.div>
    </div>
  )
}

export default Project