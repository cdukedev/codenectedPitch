import React from "react";
import "./SlideThree.scss";

const SlideThree = () => {
  return (
    <section className="container">
      <div className="top">
        <p className="top__text">
          <strong>CodeNected</strong> is a platform that bridges the gap between
          non-profit organizations, students, skilled volunteers, and
          corporations, providing solutions to the following challenges:
        </p>
        <ol className="top__text-items">
          <li className="top__text-item">
            Limited resources and technology access for non-profits.
          </li>
          <li className="top__text-item">
            Opportunities for students and volunteers to develop skills and
            contribute to meaningful projects.
          </li>
          <li className="top__text-item">
            Addressing corporations' talent pipeline, upskilling, and CSR
            objectives.
          </li>
        </ol>
      </div>
      <div className="top">
        <p className="top__text">
          At CodeNected, we provide a platform that bridges the gap between
          non-profit organizations, students, skilled volunteers, and
          corporations. We streamline the onboarding process for non-profits,
          identify their specific needs and challenges, and connect them with
          students and skilled volunteers eager to contribute their expertise.
          In partnership with corporations, we offer upskilling opportunities
          for employees, strengthening their talent pipeline, and advancing
          their CSR initiatives. Our platform fosters collaboration, growth, and
          positive change, enabling all stakeholders to benefit and thrive.
        </p>
      </div>
    </section>
  );
};

export default SlideThree;
