import React from "react";
import "./index.scss";

const ExperiencePopup = ({ experience, onClose }) => {
  if (!experience) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{experience.title}</h2>
        <h3>{experience.company}</h3>

        {experience.learningGoals && experience.learningGoals.length > 0 && (
          <>
            <h4>Learning Goals & Achievements</h4>
            <ul>
              {experience.learningGoals.map((lg, index) => (
                <li key={index}>
                  <strong>{lg.goal}:</strong> {lg.achievement}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ExperiencePopup;
