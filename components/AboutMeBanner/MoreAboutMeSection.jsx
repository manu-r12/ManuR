import Image from 'next/image'
import styles from './about.module.css'

import React from 'react'

const AboutMeSecond = () => {
  return (
    <div className={styles.bottomContainer}>
        <div className={styles.box}>
        <div className={styles.imageDiv}>
         <Image src={"/images/myimage2.webp"} objectFit='cover' fill={true}/>
            
        </div>
        <h1 style={{fontFamily: "Playfair Display"}}>A hobbyist</h1>
        <p>
             In my free time , i enjoy reading books , doing gardening , try to cook my favoirate food(still learning though) and all sort of things that make a happy person.

        </p>
        </div>
        <div className={styles.box1}>
        <div className={styles.imageDiv1}>
         <Image src={"/images/myimage1.jpg"} objectFit='cover' fill={true}/>
            
        </div>
        <h1 style={{fontFamily: "Playfair Display"}}>Lifelong learner</h1>
        <p>
        I love learning, whether it's about programming or anything else. Being a lifelong learner is a big part of me, and it keeps me motivated to explore, grow, and adapt in our ever-changing world

        </p>
        </div>
  </div>
  )
}

export default AboutMeSecond