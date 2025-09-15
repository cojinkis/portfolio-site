import ExperienceCard from "../ExperienceCard"; // adjust path as needed
import { useState } from "react"
import ExperiencePopup from "../ExperiencePopup"; // adjust path as needed

import "./index.scss";

const experiences = [
  {
    title: "STEM Instructor",
    company: "Creative Encounters",
    companyDescription: "provides STEM camps, programs, clubs, events and workshops for students in elementary and high school. Through fun, hands-on activities, we aim to ignite curiosity, boost confidence, and inspire the next generation of young innovators.",
    date: "May 2025 – Present",
    description:
      "Developed a 40 hour Game Design course for youth aged grade 6-8. Utilized python as well as pygame in order to deliver the course, allowing for youth to develop general coding skills as well as create in depth games with custom art. Worked with a team of 10, creating professional interpersonal skills.",
    learningGoals:[
        {
            goal:"To be able to create a thought-out, robust game design summer camp for grade 6-8's",
            achievement:"Every week came with different minds. On average, I would say the campers left the camp with a working game, and overall a decent grasp on how to tweak and change certain mechanics of the game (e.g. the velocity of enemies, the damage/health of characters). My game design schedule worked well, however I did have to remove the flappy bird demo as it took too much time to complete and the campers would always rather work on their own games. Overall, I believe I was successful in achieving the goal I set for myself."
        },
        {
            goal:"To be a consistent, strong leader to the campers. Seeing as I will be teaching Grade's 6-8, I must be a patient, yet firm, instructor, as this age group could pose a challenge due to a multitude of personal factors.",
            achievement:"I was worried about this goal, as I had never worked with youth before. However, the past 4 months have shown me I am able to be a consistent, strong leader for the campers. I have not had any major issues in the camp room, and have not had to go to a guardian all camp season which, to me, shows that I am able to deescalate situations and also the campers have some level of respect for me where they will listen when needed. I have also felt confident in my abilities when I have reflected periodically throughout the season, as I check in with myself and how I'm doing every so often so I am always the best version of myself. Every week has been unique, and overall I have really enjoyed my time working at this job and instructing youth with the intention to increase interest in STEM."
        },
        {
            goal:"Seeing as I have 9 other Instructors I will be working with throughout the summer, my third goal is teamwork. My goal is to be able to work with such a large group. I have historically worked in teams that reached the largest of 4, so working with a gorup of this size is new to me and I want to be able to get along with each individual on this team",
            achievement:"I excelled at this goal. I get along great with all my co-instructors and coordinators, save a couple of co-instructors. I have formed close relationships with numerous of my co-isntructors, and can work well with all of them even if we are not the closest. I can say without a doubt that I have exceeded my own expectations with this goal."
        }
    ]
  }
//   {
//     title: "Data Analyst Intern",
//     company: "DataWorks",
//     date: "Jan 2024 – Apr 2024",
//     description:
//       "Analyzed datasets, created visualizations, and helped automate reporting pipelines."
//   },
//   {
//     title: "Teaching Assistant",
//     company: "University of Example",
//     date: "Sept 2023 – Dec 2023",
//     description:
//       "Assisted students with programming assignments, led lab tutorials, and provided one-on-one mentorship."
//   }
];

const ExperiencePage = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div className="page experience-page">
      <h1 className="experience-heading">My Experience</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            companyDescription={exp.companyDescription}
            date={exp.date}
            description={exp.description}
            onClick={() => setSelectedExperience(exp)}
          />
        ))}
      </div>

      {selectedExperience && (
        <ExperiencePopup
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
};


export default ExperiencePage;
