import React from "react";
import "./Student.scss";
import image from "../../../assets/images/student-persona.png";
const Student = () => {
  return (
    <section className="student">
      <div className="student__header">
        <img className="student__header-img" src={image} alt="tech students" />
        <div className="student__card">
          <h2 className="student__title">Persona</h2>
          <ul className="student__list-items">
            <li className="student__list-item">Age: 19</li>
            <li className="student__list-item">Education: Junior CS student</li>
            <li className="student__list-item">Hometown: Miami</li>
            <li className="student__list-item">
              Family: Single, lives with parents
            </li>
            <li className="student__list-item">
              Occupation: Student with a part-time job
            </li>
          </ul>
        </div>
      </div>
      <div className="student__body-container">
        <div className="student__card">
          <h2 className="student__title">Goals</h2>
          <ul className="student__list-items">
            <li className="student__list-item">
              Gain experience through projects.
            </li>
            <li className="student__list-item">
              Attending tech-related workshops and gathering knowledge of tech
              through them.
            </li>
            <li className="student__list-item">
              Finding projects/events locally.
            </li>
            <li className="student__list-item">
              Connecting with people with similar areas of interest through
              social media.
            </li>
            <li className="student__list-item">
              Balancing school and work life.
            </li>
          </ul>
        </div>
        <div className="student__card">
          <h2 className="student__title">Frustrations</h2>
          <ul className="student__list-items">
            <li className="student__list-item">
              Not having sufficient experience in tech projects .
            </li>
            <li className="student__list-item">
              I don't know where I can learn more .
            </li>
            <li className="student__list-item">
              “I don't want to look unprepared.”
            </li>
            <li className="student__list-item">
              “Sometimes I don't find what I'm looking for.”
            </li>
            <li className="student__list-item">
              “I have trouble finding projects I like.”
            </li>
            <li className="student__list-item">
              “None of my friends want to work with me.”
            </li>
          </ul>
        </div>
      </div>
      <section className="student__bio">
        <h2 className="student__bio-title">Biography</h2>
        <p className="student__bio-text">
          Erick Rodriguez is a computer science junior who wants to work in
          tech. He takes classes full-time and works in the evening as a server.
          He is interested in improving his coding skills and attends events he
          finds on social media and through friends. He finds it intimidating to
          apply to internships that interest him because he feels he hasn't
          acquired enough experience. He has tried to work on projects but
          doesn't have connections that want to work with him or the knowledge
          to work alone.
        </p>
      </section>
    </section>
  );
};

export default Student;
