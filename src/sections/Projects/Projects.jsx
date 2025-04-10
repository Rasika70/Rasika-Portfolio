import React from "react";
import styles from './ProjectsStyles.module.css';
import ExamHallSeating from '../../assets/Exam.jfif';
import HeartDiseasePrediction from '../../assets/Heart.jfif';
import Portfolio from '../../assets/portfolio.jpg';
import EcommerceWebsite from '../../assets/Ecommerce_Logo.jpg'
import ProjectCard from "../../common/ProjectCard";
function Projects(){
    return(
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
            src={ExamHallSeating}
             link="https://github.com/Rasika70/Examhallseating" 
            h3="Exam_Hall_Seating"
            p="Website"
            />
            <ProjectCard 
            src={HeartDiseasePrediction}
             link="https://github.com/Rasika70/HeartDisease_Prediction" 
            h3="Heart_Disease_Prediction"
            p="Research Project"
            />
            <ProjectCard 
            src={Portfolio}
             link="https://github.com/Rasika70/Rasika-Portfolio" 
            h3="Web Portfolio"
            p="Resume"
            />
             <ProjectCard 
            src={EcommerceWebsite}
             link="https://github.com/Rasika70/Ecommerce_website" 
            h3="Ecommerce_website"
            p="Consultancy Project"
            />
            
        </div>
    </section>
);
}

export default Projects;