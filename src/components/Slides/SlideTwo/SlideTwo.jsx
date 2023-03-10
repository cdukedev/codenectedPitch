import React from "react";
import "./SlideTwo.scss";
import Box from "@mui/material/Box";
import Card from "../../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import image from "../../../assets/images/test.png";
import { useState } from "react";

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
      <Box
        sx={{
          width: "50%",
          flexGrow: 0.5,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <CardActionArea sx={cards} onClick={() => setProblem("Non-Profits")}>
            <Card
              className="main__card"
              title="Non-Profits"
              description="Local Businesses in need of technology to help them achieve their goals"
              image={image}
              imageTitle="design steps"
            />
          </CardActionArea>
          <CardActionArea sx={cards} onClick={() => setProblem("Students")}>
            <Card
              className="main__card"
              title="Students"
              description="Local Businesses in need of technology to help them achieve their goals"
              image={image}
              imageTitle="design steps"
            />
          </CardActionArea>
          <CardActionArea sx={cards} onClick={() => setProblem("Bootcamps")}>
            <Card
              className="main__card"
              title="Bootcamps"
              description="Local Businesses in need of technology to help them achieve their goals"
              image={image}
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
              image={image}
              imageTitle="design steps"
            />
          </CardActionArea>
        </Grid>
      </Box>

      {problem === "Main" ? (
        <section className="main__right">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vitae
          delectus tempore voluptatem? Doloremque totam a id ut. Assumenda, quos
          at dolorum accusantium aliquam numquam cupiditate fugit veritatis rem
          necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo libero aliquid quis nisi repellat veritatis, labore amet
          aliquam repellendus vel voluptatibus at dolore earum eligendi fugiat
          odio eius officia distinctio!Lorem
        </section>
      ) : problem === "Non-Profits" ? (
        <section className="main__right">Non Profit Problems</section>
      ) : problem === "Students" ? (
        <section className="main__right">Students Problems</section>
      ) : problem === "Bootcamps" ? (
        <section className="main__right">Bootcamps Problems</section>
      ) : problem === "Small-Businesses" ? (
        <section className="main__right">Small Businesses Problems</section>
      ) : (
        <section className="main__right">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vitae
          delectus tempore voluptatem? Doloremque totam a id ut. Assumenda, quos
          at dolorum accusantium aliquam numquam cupiditate fugit veritatis rem
          necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo libero aliquid quis nisi repellat veritatis, labore amet
        </section>
      )}
    </main>
  );
};

export default SlideTwo;
