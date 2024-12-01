import React from 'react'
import styles from './PictureStyles.module.css';
import PictureImg from '../../assets/Portfolio_image.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/RasikaResume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Picture() {
    const{ theme, toggleTheme}=useTheme();

    const themeIcon= theme==='light'? sun:moon;
    const githubIcon= theme==='light'? githubLight:githubDark;
    const linkedinIcon= theme==='light'? linkedinLight:linkedinDark;
  
    return (
  
  <section id="picture" className={styles.container}>
    <div className={styles.colorModeContainer}>
        <img 
        src={PictureImg}
        className={styles.picture} 
        alt="Profile picture of Rasika"
        ></img>
        <img 
        className={styles.colorMode}
        src={themeIcon} 
        alt="Color mode icon" 
        onClick={toggleTheme}
        /> 
      
    </div>
    <div className={styles.info}>
     
    <h1>Rasika</h1>
    <h2>Frontend Developer</h2>
    <span>
        <a href='https://github.com' target="_blank">
        <img src={githubIcon} alt="Github icon"/>
        </a>
        <a href='https://linkedin.com' target="_blank">
        <img src={linkedinIcon} alt="Linkeddin icon"/>
        </a>
    </span>
    <p className={styles.description}>
      Hi there! I'm a frontend developer with a passion for creating websites and applications.Let’s connect and create something amazing together!
    </p>
    <a href={CV} download>
    <button class name ="hover">
    Resume
    </button></a>
    </div>
    </section>
  );
}

export default Picture;
