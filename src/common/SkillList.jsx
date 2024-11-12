import React from 'react'

export default function SkillList({src ,p}) {
  return (
   <span>
        <img src={src} alt="Checkmark icon"/>
        <p>{p}</p>
    </span>
  )
}
