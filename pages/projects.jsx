'use client';
import React from 'react'
import styles from '../styles/Home.module.css'
import { ArrowBackIos } from '@mui/icons-material'
import { useRouter } from 'next/router'
import Projects from '@/components/ProjectContainer/projects'

const ProjectsPage = () => {

  const router = useRouter()

  const handleClick = () => {
      router.push("/")
  }
  return (
      <div className={styles.projectsContainer}>
      <p onClick={handleClick} ><ArrowBackIos fontSize='small'/>Get Back</p>
          <h1><div className={styles.dot}/>Projects</h1>
          <div className={styles.ProjectDetails}>
            <h1>These are my favourite ones</h1>
              <Projects Name={"E- Waste Locator"} link={"https://github.com/manu-r12/E-Waste-Locator.git"} platform={"(Smart India Hacathon) Web Application"}/>            
              <Projects Name={"Image Recogintion"} link={"https://github.com/manu-r12/See-Image"} platform={"iOS Application"}/>
              <Projects Name={"Expense-Tracker"} link={"https://github.com/manu-r12/Expense-Trackert"} platform={"Web Application"}/>
              <Projects Name={"Dino Cards Game"} link={"https://github.com/manu-r12/DinoCards"} platform={"iOS Application"}/>
              <Projects Name={"Netflix Clone"} link={"https://github.com/manu-r12/Netflix-Clone"} platform={"Web Application"}/>
          </div>
     </div>
  )
}

export default ProjectsPage