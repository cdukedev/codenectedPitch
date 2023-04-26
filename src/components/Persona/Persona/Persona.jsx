import React from "react";
import "./Persona.scss";
import studentImage from "../../../assets/images/personas/student.png";
import nonProfitImage from "../../../assets/images/personas/non-profit.png";
import coorpImage from "../../../assets/images/personas/coorp.png";
import nonProfitData from "../../../data/personas/non-profit.json";
import studentData from "../../../data/personas/students.json";
import coorpData from "../../../data/personas/coorp.json";

const Persona = ({ type }) => {
  //if type is equal to non-profit, then set the data to non-profit data, else if type is equal to student, then set the data to student data, else if type is equal to bootcamp, then set the data to bootcamp data
  const personaData =
    type === "non-profit"
      ? nonProfitData
      : type === "student"
      ? studentData
      : coorpData;
  const image =
    type === "non-profit"
      ? nonProfitImage
      : type === "student"
      ? studentImage
      : coorpImage;

  const {
    name,
    age,
    gender,
    occupation,
    education,
    location,
    demographics,
    psychographics,
    goals_and_needs: goals,
    frustrations_and_pain_points: frustrations,
    technological_proficiency,
  } = personaData;

  const educationDetails = Object.entries(education)
    .map(([key, value]) => `${key}: ${value}`)
    .join(", ");

  return (
    <section className="persona">
      <div className="persona__header">
        <img className="persona__header-img" src={image} alt="persona" />
        <div className="persona__card">
          <h2 className="persona__title">Persona</h2>
          <ul className="persona__list-items">
            <li className="persona__list-item">Name: {name}</li>
            <li className="persona__list-item">Age: {age}</li>
            <li className="persona__list-item">Gender: {gender}</li>
            <li className="persona__list-item">Occupation: {occupation}</li>
            <li className="persona__list-item">
              Education: {educationDetails}
            </li>
            <li className="persona__list-item">Location: {location}</li>
          </ul>
        </div>
      </div>
      <div className="persona__body-container">
        <div className="persona__card">
          <h2 className="persona__title">Goals</h2>
          <ul className="persona__list-items">
            {goals.map((goal, index) => (
              <li key={index} className="persona__list-item">
                {goal}
              </li>
            ))}
          </ul>
        </div>
        <div className="persona__card">
          <h2 className="persona__title">Frustrations</h2>
          <ul className="persona__list-items">
            {frustrations.map((frustration, index) => (
              <li key={index} className="persona__list-item">
                {frustration}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <section className="persona__bio persona__body-container">
        <h2 className="persona__bio-title">Demographics</h2>
        <p className="persona__bio-text">{demographics.description}</p>
      </section>
      <section className="persona__psychographics persona__body-container">
        <h2 className="persona__psychographics-title">Psychographics</h2>
        <p className="persona__psychographics-text">
          {psychographics.description}
        </p>
      </section>
      <section className="persona__tech-proficiency persona__body-container">
        <h2 className="persona__tech-proficiency-title">
          Technological Proficiency
        </h2>

        <p className="persona__tech-proficiency-text">
          {technological_proficiency}
        </p>
      </section>
    </section>
  );
};
export default Persona;
