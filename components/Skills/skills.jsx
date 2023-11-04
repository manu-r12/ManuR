import styles from './skills.module.css'
import { useInView , motion } from 'framer-motion'
import React, { useRef } from 'react'

const SkillsSection = () => {


  const ref = useRef(null)
  const isInView = useInView(ref, {amount: 0.4 ,once: true})

  const ios = ["Swift", "SwiftUI", "MVVM", "CoreData", "ARKit", "CoreML", "API"]
  const web = ["Next.js", "React", "HTML", "CSS (SCSS)", "JavaScript", "Node.js", "Redux",
   "Framer Motion", "GraphQL" , "AWS" , "FireBase", "MongoDB"]
            
  return (
    <div className={styles.container}>
      <motion.h1 ref={ref}   
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
               transition={{ duration: 0.7, ease: "easeOut", delay: 0.1}}className={styles.mainHeading}>
               <div className={styles.dot}/>Expertise</motion.h1>
      <div className={styles.skillsSection}>
      <motion.div 
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
               transition={{ duration: 0.7, ease: "easeOut", delay: 0.3}} className={styles.skill}>
              <h1 className={styles.skillHeading}>Full-Stack Development</h1>
              <div className={styles.skillName}>
                {web.map(s =>{
                  return <p className={styles.skillP}>{s}</p>
                })}
              </div>
          </motion.div>
          <motion.div 
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
               transition={{ duration: 0.7, ease: "easeOut", delay: 0.5}} className={styles.skill}>
              <h1 className={styles.skillHeading}>iOS Development</h1>
              <div className={styles.skillName}>
                {ios.map(s =>{
                  return <p className={styles.skillP}>{s}</p>
                })}
              </div>
          </motion.div>
         
          <motion.div 
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
               transition={{ duration: 0.7, ease: "easeOut", delay: 0.7}} className={styles.skill}>
                <h1 className={styles.skillHeading}>visionOS</h1>
                <p className={styles.p}>ARKIt , SwiftUI , Currently Learning..</p>
          </motion.div>
          <motion.div 
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
               transition={{ duration: 0.7, ease: "easeOut", delay: 0.7}} className={styles.skill}>
                <h1 className={styles.skillHeading}>Machine Learning (Neural Network)</h1>
                <p className={styles.p}>Currently Learning..</p>
          </motion.div>
          <motion.div 
               initial={{opacity: 0 , y: 100}}
               animate={isInView ? { opacity: 1, y: 0 }: {opacity: 0, y: 100}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.7}} className={styles.skill}>
              <h1 className={styles.skillHeading}>Problem Solving</h1>
              <p className={styles.p}>I love to think all the time...</p>
          </motion.div>
      </div>
    </div>
  )
}


export default SkillsSection