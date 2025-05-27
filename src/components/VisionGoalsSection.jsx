// src/components/VisionGoalsSection.jsx
import React from 'react'
import PropTypes from 'prop-types'
import './Components.css'

const VisionGoalsSection = ({ title, goals }) => {
  return (
    <div>
      <div className="overall_container">
        <div className="vision_goals_container">
          <p className="vision_section_title">{title}</p>
          <div className="goals_grid">
            {goals.map((goal, index) => (
              <div key={index} className="goal_item">
                <img src={goal.icon} alt={goal.title} className="goal_icon" />
                <h4 className="goal_title">{goal.title}</h4>
                <p className="goal_description">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

VisionGoalsSection.propTypes = {
  title: PropTypes.string.isRequired,
  goals: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default VisionGoalsSection
