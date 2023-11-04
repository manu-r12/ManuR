import React from 'react'
import styles from './footer.module.css'
const Footer = () => {

   function scrollToComponent() {
        const elementToScrollTo = document.getElementById('banner');
        if (elementToScrollTo) {
          elementToScrollTo.scrollIntoView({ behavior: 'smooth' , block: 'start' , inline: 'start' });
        }
      }
  return (
    <div className={styles.footer}>
     <div className={styles.footerDetails}>
        <p   className={styles.copyright}>© 2023 <span style={{fontWeight: "bold"}}>Manu Rajbhar</span></p>
        <p  >Designed and Coded With ❤️ by Manu</p>
        <p onClick={scrollToComponent}  style={{cursor: "pointer"}} >Back to top</p>
     </div>
    </div>
  )
}

export default Footer