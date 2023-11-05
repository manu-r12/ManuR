
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import WelcomeView from '@/components/welcomeView/welcome-view'
import About from '@/components/AboutMeBanner/about'
import SkillsSection from '@/components/Skills/skills'
import Project from '@/components/projects/projects'
import Contact from '@/components/contact/contact'
import Lenis from '@studio-freight/lenis'
import { useMotionValue, useSpring , motion} from 'framer-motion'
import { useEffect } from 'react'

import Footer from '@/components/footer/footer'





export default function Home() {

  

  useEffect(() =>{
    const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  })


  return (
    <>
      <Head>
        <title>Manu R</title>
        <meta name="description" content="Hi, Nice to meet you! My name is Manu R, and I'm a passionate developer and designer. Explore my portfolio and discover my work in web development, design, and more." />
        <meta name="keywords" content="web developer, web designer, portfolio, Manu R, Manu Rajbhar Web Developer, Manu Rajbhar India, E3MR  web development, web design, front-end development, UI/UX design" />
     
      
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main className={styles.main}>

        <WelcomeView/>
        <About/>
      
        <SkillsSection/>
        <Project/>
        <Contact/>
        {/* <Footer/> */}
      </main>
    </>
  )
}
