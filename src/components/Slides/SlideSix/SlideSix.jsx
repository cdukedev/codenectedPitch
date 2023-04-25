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
          <strong>AI-driven insights:</strong> Codenected operates within the
          non-profit technology and volunteer matching industry. The platform
          connects skilled volunteers, including students, with non-profit
          organizations in need of their services. This industry aims to enhance
          the capacity of non-profits by providing them with skilled support,
          reducing their operating costs, and improving the overall efficiency
          of their operations.
        </p>
      </div>
      <div className="top">
        <p className="top__text">
          <strong>Focus on skills development: </strong>
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
          <strong>Corporate partnerships:</strong> Non-profits are increasingly
          embracing digital solutions to improve their operational efficiency
          and engage with stakeholders more effectively. Platforms like
          Codenected, which leverage technology to connect skilled volunteers
          with non-profits, are becoming more popular.
        </p>
      </div>
      <div className="top">
        <p className="top__text">
          <strong>Tailored Virtual Project Platform:</strong> There is a growing
          emphasis on skills development and upskilling for both volunteers and
          non-profit employees. Codenected's potential corporate partnerships
          can address this need by offering upskilling opportunities to
          employees through the platform.
        </p>
      </div>
    </section>
  );
};

export default SlideSix;
