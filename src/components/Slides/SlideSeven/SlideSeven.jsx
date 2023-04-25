import React from "react";
import "./SlideSeven.scss";

const InfoComponent = () => {
  return (
    <>
      <h1 className="info__title info__section">
        Bridging the Gap: Creating a Win-Win for Corporations and Non-Profits
      </h1>
      <div className="info">
        <div className="info__section">
          <h2 className="info__subtitle">
            Corporate Challenges and Opportunities
          </h2>
          <ul className="info__list">
            <li>
              <strong className="info__strong">
                Demand for skilled tech talent:
              </strong>{" "}
              <br />
              In an increasingly digital world, the demand for skilled tech
              talent continues to grow, making it essential for corporations to
              maintain a strong talent pipeline.
            </li>
            <li>
              <strong className="info__strong">Millennials and CSR:</strong>{" "}
              <br /> By 2025, 60% of the workforce will be millennials, who
              prioritize working for companies with strong CSR commitments.
            </li>
            <li>
              <strong className="info__strong">Upskilling employees:</strong>
              <br />
              Investing in employee upskilling can lead to increased job
              satisfaction, reduced turnover, and improved overall performance,
              which is essential for corporations.
            </li>
            <li>
              <strong className="info__strong">
                Real-world experience for employees:
              </strong>
              <br />
              CodeNected's platform provides corporations with opportunities for
              their employees to work on real-world projects, helping them
              develop new skills and stay up-to-date with the latest industry
              trends.
            </li>
          </ul>
        </div>

        <div className="info__section">
          <h2 className="info__subtitle">
            Non-Profit Challenges and Opportunities
          </h2>
          <ul className="info__list">
            <li>
              <strong className="info__strong">
                Digital transformation in non-profits:
              </strong>
              <br /> Only 12% of nonprofits score high on the Salesforce for
              Nonprofits Digital Maturity Index, indicating a need for greater
              digital transformation in the sector.
            </li>
            <li>
              <strong className="info__strong">
                Technology adoption and capacity building:
              </strong>
              <br /> 74% of nonprofits consider digital transformation to be a
              "need-to-have" or "must-have."
            </li>
            <li>
              <strong className="info__strong">
                Small non-profits revenue:
              </strong>
              <br />
              In the Miami metro area, there are 7,007 non-profits with revenue
              less than $250k, indicating a need for tailored solutions and
              resources to help them grow and become grant-ready.
            </li>
            <li>
              <strong className="info__strong">Volunteer matching:</strong>
              <br />
              Catchafire's platform has saved nonprofits over $222 million in
              expenses and generated over 1.15 million volunteer hours,
              highlighting the potential for similar services that connect
              skilled professionals with non-profits in need.
            </li>
            <li>
              <strong className="info__strong">
                Top requested needs on Catchafire:
              </strong>
              <br />
              Nonprofits' most requested needs include website development,
              organizational strategy, tech systems, marketing strategy, and
              social media management, suggesting that technology solutions and
              skilled volunteers are in high demand.
            </li>
            <li>
              <strong className="info__strong">
                Long-term relationships and impact:
              </strong>
              <br /> Catchafire's data shows that one-hour calls often lead to
              long-term relationships between nonprofits and volunteers,
              including roles as advisors, board members, and donors.
            </li>
          </ul>
        </div>
      </div>
      <p className="info info__summary info__list">
        By addressing these gaps and leveraging the potential synergies between
        the corporate and non-profit sectors, we can create significant benefits
        for both parties, including improved CSR initiatives, better talent
        pipelines, and increased digital transformation in the non-profit
        sector.
      </p>
    </>
  );
};

export default InfoComponent;
