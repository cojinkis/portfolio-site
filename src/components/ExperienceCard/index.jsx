import React, { useState } from "react";
import "./index.scss";

const ExperienceCard = ({ title, company, date, description, companyDescription, onClick }) => {
  return (
    <div className="experience-card" onClick={onClick}>
      <div className="experience-header">
        <h2 className="experience-title">{title}</h2>
        <span className="experience-date">{date}</span>
      </div>
      <h3 className="experience-company">{company}</h3>
      {companyDescription && (
        <p className="experience-company-description">{companyDescription}</p>
      )}
      <p className="experience-description">{description}</p>
      <div className="experience-click-hint">
        Click for more &darr;
      </div>
    </div>
  );
};

export default ExperienceCard;
