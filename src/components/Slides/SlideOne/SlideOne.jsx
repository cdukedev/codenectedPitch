import React from "react";
import "./SlideOne.scss";

const SlideOne = () => {
  return (
    <section className="c">
      <h1 className="slide-one__title">Mission Driven</h1>
      <div className="slide-one__text-container">
        <p className="slide-one__text">
          At Codenected, our mission is to provide individuals and communities
          access to resources, mentorship, and collaboration opportunities in
          technology, breaking down barriers and fostering a diverse and
          inclusive platform for tech students and enthusiasts. Our aim is to
          accelerate technology's growth for society's betterment and make it
          easier for everyone to contribute to the tech industry. We connect
          individuals with varying backgrounds, experiences, and skills, giving
          them the tools through our platform to bring their ideas to life.
        </p>
        <p className="slide-one__text">
          With a focus on empowering students in South Florida, our team is on a
          quest to bridge the gap between the wealth of talent in the student
          population and the pressing needs of local organizations. We are
          developing a platform that will uncover the most impactful services
          and projects for these organizations, providing students with
          opportunities to put their skills and ideas to the test and make a
          real impact in their communities. Join us as we strive to create a
          better future through the power of technology and collaboration.
        </p>
      </div>
    </section>
  );
};

export default SlideOne;
