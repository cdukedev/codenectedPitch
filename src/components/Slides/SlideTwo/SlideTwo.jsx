import React from "react";
import Box from "@mui/material/Box";
import Card from "../../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import { Button } from "@mui/material";

import { useState } from "react";
import Student from "../../Persona/Student/Student.jsx";
import NonProfit from "../../Persona/NonProfit/NonProfit.jsx";
import Bootcamp from "../../Persona/Bootcamp/Bootcamp.jsx";

const SlideTwo = () => {
  const [problem, setProblem] = useState("Main");
  console.log(problem);

  const cards = {
    maxWidth: 345,
    margin: "0 auto",
    margin: "1rem 1rem",
    gap: "1rem",
    width: "40%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <main className="main__container">
      {/* if problem is not equal to main, then add the button above the cards */}
      <section className="main__left">
        {problem !== "Main" ? (
          <Button
            sx={{
              margin: ".2rem 1rem",
              backgroundColor: "rgba(255, 255, 255, 0.45)",
              backdropFilter: "blur (14px)",
              color: "white",
            }}
            className="main__button"
            onClick={() => setProblem("Main")}
          >
            Back
          </Button>
        ) : null}
        <Box
          sx={{
            width: "100%",
            flexGrow: 0.5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* if problem is equal to main, then add the button above the cards */}
          <Grid
            container
            justifyContent="center"
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <CardActionArea
              sx={cards}
              onClick={() => setProblem("Non-Profits")}
            >
              <Card
                className="main__card"
                title="Non-Profits"
                description="Local Businesses in need of technology to help them achieve their goals"
                imageTitle="design steps"
              />
            </CardActionArea>
            <CardActionArea sx={cards} onClick={() => setProblem("Students")}>
              <Card
                className="main__card"
                title="Students"
                description="Local Businesses in need of technology to help them achieve their goals"
                imageTitle="design steps"
              />
            </CardActionArea>
            <CardActionArea sx={cards} onClick={() => setProblem("Bootcamps")}>
              <Card
                className="main__card"
                title="Bootcamps"
                description="Local Businesses in need of technology to help them achieve their goals"
                imageTitle="design steps"
              />
            </CardActionArea>
            <CardActionArea
              sx={cards}
              onClick={() => setProblem("Small-Businesses")}
            >
              <Card
                className="main__card"
                title="Small Businesses"
                description="Local Businesses in need of technology to help them achieve their goals"
                imageTitle="design steps"
              />
            </CardActionArea>
          </Grid>
        </Box>
      </section>

      {problem === "Main" ? (
        <section className="main__right-main">
          <p className="main__right-main-text">
            The technology industry is constantly evolving and growing, but not
            everyone has equal access to the resources and opportunities to
            participate in this growth. This disparity affects not only
            individuals but also small businesses and non-profit organizations
            in under-served communities, who struggle to keep up with the rapid
            pace of technological advancements. Meanwhile, students interested
            in pursuing a career in technology face a number of challenges,
            including a lack of experience in real-world tech projects and
            difficulty finding meaningful opportunities to gain experience.
            This, in turn, affects their ability to build a desirable resume and
            to make a positive impact in the world.
          </p>
        </section>
      ) : problem === "Non-Profits" ? (
        <section className="main__right">
          <NonProfit />
        </section>
      ) : problem === "Students" ? (
        <section className="main__right">
          <Student />
        </section>
      ) : problem === "Bootcamps" ? (
        <section className="main__right">
          <Bootcamp />
        </section>
      ) : problem === "Small-Businesses" ? (
        <section className="main__right">
          <p>Small Businesses Problems</p>
        </section>
      ) : (
        <section className="main__right-main">
          <p className="main__right-main-text">
            The technology industry is constantly evolving and growing, but not
            everyone has equal access to the resources and opportunities to
            participate in this growth. This disparity affects not only
            individuals but also small businesses and non-profit organizations
            in under-served communities, who struggle to keep up with the rapid
            pace of technological advancements. Meanwhile, students interested
            in pursuing a career in technology face a number of challenges,
            including a lack of experience in real-world tech projects and
            difficulty finding meaningful opportunities to gain experience.
            This, in turn, affects their ability to build a desirable resume and
            to make a positive impact in the world.
          </p>
        </section>
      )}
    </main>
  );
};

export default SlideTwo;
