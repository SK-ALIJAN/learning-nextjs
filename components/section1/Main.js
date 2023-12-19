import React from "react";
import classes from "./section1.module.css";
import ImageSlider from "./ImageSlider";
import Link from "next/link";

const Main = () => {
  return (
    <div className={classes.container}>
      <ImageSlider />

      <div className={classes.wrapper}>
        <div className={classes.title}>
          <p>nextlevel food for</p>
          <p>nextlevel foodies</p>
        </div>
        <p>Taste & share food from all over the world</p>

        <div>
          <p>join the Community</p>
          <Link href="/meals">Explore Meals</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
