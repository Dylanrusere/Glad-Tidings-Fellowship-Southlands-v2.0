// src/components/ProgramsSection.jsx
import React from 'react'
import PropTypes from 'prop-types'
import './Components.css'

const ProgramsSection = ({ title, intro, programs }) => {
  return (
    <div className="overall_container">
      <div className="programs_container">
        <p className="program_section_title">{title}</p>
        {intro && <p className="section_intro">{intro}</p>}
        <div className="programs_grid">
          {programs.map((program, index) => (
            <div key={index} className="program_card">
              <img src={program.icon} alt={program.name} className="program_icon" />
              <h4 className="program_name">{program.name}</h4>
              <p className="program_description">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

ProgramsSection.propTypes = {
  title: PropTypes.string.isRequired,
  intro: PropTypes.string,
  programs: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ProgramsSection
