import React from "react";
import "./SlideTwo.scss";
import Card from "../../Card/Card.jsx";
import Grid from "@mui/material/Grid";
import image from "../../../assets/images/test.png";

const SlideTwo = () => {
  return (
    <Grid container spacing={16}>
      <Grid item xs={4}>
        <Card
          title="Non-Profits"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Students"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Bootcamps"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Small Businesses"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Traditional Colleges"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
      <Grid item xs={4}>
        <Card
          title="Coorporations"
          description="Local Businesses in need of technology to help them achieve their goals"
          image={image}
          imageTitle="design steps"
        />
      </Grid>
    </Grid>
    // <section className="slide-two">
    //   <Card title="Non-Profits and Small Businesses" description="Local Businesses in need of technology to help them achieve their goals" image="" imageTitle='' />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    //   <Card />
    // </section>
  );
};

export default SlideTwo;
