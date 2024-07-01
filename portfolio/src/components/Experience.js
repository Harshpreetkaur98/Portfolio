import React, { useState } from 'react';
import Modal from './Modal';
import './Experience.css';

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleOpenModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
  };

  return (
    <div className="experience">
      <h2>Experience</h2>
      <div className="experience-blocks">
        <div className="experience-block" onClick={() => handleOpenModal('Details about Experience 1')}>
          Experience 1
        </div>
        <div className="experience-block" onClick={() => handleOpenModal('Details about Experience 2')}>
          Experience 2
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} title="Experience Details">
        {modalContent}
      </Modal>
    </div>
  );
};

export default Experience;
