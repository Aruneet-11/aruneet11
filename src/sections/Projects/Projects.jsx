import React from 'react'
import styles from './Project.module.css'
import cloud from '../../assets/cloudimg.png'
import docs from '../../assets/docs.png'
import todo from '../../assets/todo.png';
import food from '../../assets/goodfood.png';
import ProjectCard from '../../common/ProjectCard'
export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={cloud} link="https://aruneet-11.github.io/WeatherApp/" h3="Sky Snap" p="Weather App"/>
            <ProjectCard src={docs} link="" h3="Docify" p="CoText App"/>
          
            <ProjectCard src={todo} link="https://aruneet-11.github.io/to-dolist/" h3="Task Nest" p="To-Do List App"/>
            <ProjectCard src={food} link="https://aruneet-11.github.io/Foodorder/" h3="Good Food" p="Food Ordering Website"/>
        </div>
    </section>
  )
}
