"use client";

import React, { useEffect, useState } from "react";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import Image from "next/image";
import classes from "./ImageSlider.module.css";

let SlidingImage = [
  { image: image1, alt: "first image" },
  { image: image2, alt: "second image" },
  { image: image3, alt: "third image" },
];

const ImageSlider = () => {
  let [currentSlide, setCurrentSlide] = useState();

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setCurrentSlide((prevIndex) =>
  //       prevIndex < SlidingImage.length - 1 ? prevIndex + 1 : 0
  //     );
  //   }, 1000);
  //  console.log(interval);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className={classes.Container}>
     <Image src={image1} alt="image1"/>
    </div>
  );
};

export default ImageSlider;
