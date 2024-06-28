import React, { useState } from 'react';
import './Experience.css';
import Modal from './Modal';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experiences = [
    { id: 1, title: "Experience 1", description: "Details about Experience 1" },
    { id: 2, title: "Experience 2", description: "Details about Experience 2" },
  ];

  const handleClick = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-grid">
        {experiences.map(exp => (
          <div key={exp.id} className="experience-block" onClick={() => handleClick(exp)}>
            {exp.title}
          </div>
        ))}
      </div>
      {selectedExperience && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>{selectedExperience.title}</h3>
            <p>{selectedExperience.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
