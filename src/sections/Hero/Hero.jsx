import React from 'react'
import styles from './Hero.module.css'
import heroImg from '../../assets/heroimg.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import mailLight from '../../assets/mail-white.jpg'
import mailDark from '../../assets/mail-dark.jpg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'

import CV from '../../assets/Aruneet Updated cv.pdf'
import { useTheme } from '../../common/ThemeContext'

export default function Hero() {
    const {theme,toggleTheme} = useTheme();

    const themeIcon=theme==='light'?sun:moon;
    const mailIcon=theme==='light'?mailLight:mailDark;
    const githubIcon=theme==='light'?githubLight:githubDark;
    const linkedinIcon=theme==='light'?linkedinLight:linkedinDark;
  return (
    <section id="hero" className={styles.container}>
    <div className={styles.colorModeContainer}>
    <img className={styles.hero} src={heroImg} alt="Profile Picture of Aru"/>
    <img className={styles.colorMode}src={themeIcon} alt="color mode icon" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
     <h1>Aruneet</h1>
     <h2>Frontend Developer</h2>
     <span><a href="mailto:aruneet526@gmail.com" target="_blank">
      <img  className={styles.mailIcon} src={mailIcon} alt="mail icon"></img>
     </a>
     <a href="https://github.com/Aruneet-11" target="_blank">
      <img  className={styles.githubIcon} src={githubIcon} alt="github icon"></img>
     </a>
     <a href="https://www.linkedin.com/in/aruneet-kaur-a7b9941bb/" target="_blank">
      <img  className={styles.linkedinIcon} src={linkedinIcon} alt="linkedin icon"></img>
     </a>
      </span>
     <p className={styles.description}> I am an enthusiastic learner and a passionate Frontend developer with a strong foundation in HTML, CSS, JavaScript, and frameworks like React.</p>
    
     <a href={CV} download target='_blank'>
        <button className="hover" >Resume</button>
     </a>
    </div>
    </section>
  )
}
