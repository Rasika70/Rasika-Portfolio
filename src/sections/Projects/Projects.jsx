import React from "react";
import styles from './ProjectsStyles.module.css';
import ExamHallSeating from '../../assets/Exam.jfif';
import HeartDiseasePrediction from '../../assets/Heart.jfif';
import Portfolio from '../../assets/portfolio.jpg';
import SeniorCitizenFilter from '../../assets/SeniorCitizen.jpg'
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
             link="https://github.com/Rasika70/HeartDisease_Prediction" 
            h3="Web Portfolio"
            p="Resume"
            />
             <ProjectCard 
            src={SeniorCitizenFilter}
             link="https://github.com/Rasika70/Senior-Citizen-Filter" 
            h3="Senior_Citizen_Filter"
            p="Beginner Project"
            />
            
        </div>
    </section>
);
}

export default Projects;