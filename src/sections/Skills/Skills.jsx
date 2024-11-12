import React from 'react'
import styles from './Skills.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
export default function Skills() {
  return (
    <section id="skills"className={styles.container}>
   <h1 className="sectionTitle">Skills</h1>
   <div className={styles.skillList}>
    <SkillList src={checkMarkIcon} p="HTML"/>
    <SkillList src={checkMarkIcon} p="CSS"/>
    <SkillList src={checkMarkIcon} p="JavaScript"/>
    <SkillList src={checkMarkIcon} p="React"/>
    <SkillList src={checkMarkIcon} p="Java"/>
    <SkillList src={checkMarkIcon} p="SQL"/>
    <SkillList src={checkMarkIcon} p="BootStrap"/>
   </div>
    </section>
  )
}
