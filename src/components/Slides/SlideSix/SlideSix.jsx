import React from "react";
import "./SlideSix.scss";
import Card from "../../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import image from "../../../assets/images/bootcamps.png";

const SlideSix = () => {
  return (
    <section className="container">
      <div className="top">
        <p className="top__text">
          <strong>AI-driven insights:</strong> CodeNected sets itself apart by
          leveraging AI-driven insights to develop projects and services
          tailored specifically for nonprofits. This innovative approach
          streamlines the decision-making process, enabling organizations to
          pinpoint the most effective solutions to their unique challenges
          without the costs and complexities associated with traditional
          consulting. By harnessing the power of AI, CodeNected offers a
          user-friendly, cost-effective alternative to traditional methods,
          empowering nonprofits to focus on their mission while driving greater
          impact and making data-driven decisions that optimize their operations
          and maximize their resources.
        </p>
      </div>
      <div className="top">
        <p className="top__text">
          <strong>Focus on skills development through impact: </strong>
          The non-profit sector in the United States is significant, with over
          1.5 million registered non-profit organizations. In the Miami metro
          area alone, there are 30,435 organizations, employing 396,898 people
          and generating over $34 billion in annual revenue. The volunteer
          matching and non-profit technology industry has been growing steadily
          as organizations increasingly adopt digital solutions to enhance their
          operations and connect with skilled volunteers.
        </p>
      </div>
      <div className="top">
        <p className="top__text">
          <strong>Corporate partnerships:</strong> CodeNected distinguishes
          itself with a unique approach to corporate sponsorships, fostering
          strategic partnerships with businesses that share its mission to
          empower underserved communities through technology. These
          collaborations are tailored to create mutually beneficial
          relationships that align with the sponsor's corporate social
          responsibility (CSR) goals and maximize their impact. By offering
          custom sponsorship packages, detailed impact reports, and
          opportunities for employee engagement in skill-based volunteering
          projects, CodeNected ensures that its sponsors gain valuable exposure,
          deepen their connections with the community, and make a lasting
          difference by supporting transformative technology-driven initiatives.
        </p>
      </div>
      <div className="top">
        <p className="top__text">
          <strong>Tailored Virtual Project Platform:</strong> CodeNected's
          platform stands out due to its focus on tailored volunteering
          projects, which are designed to match tech enthusiasts with
          opportunities that align with their unique skills, interests, and
          goals. This differentiator is further enhanced by seamless integration
          with top job boards for volunteer recruitment and popular
          collaboration tools for project teams. By emphasizing a personalized
          approach and providing streamlined access to relevant opportunities
          and resources, CodeNected's platform is uniquely positioned to
          facilitate meaningful volunteer experiences, drive professional
          growth, and maximize the impact of tech-driven initiatives in
          underserved communities.
        </p>
      </div>
    </section>
  );
};

export default SlideSix;
