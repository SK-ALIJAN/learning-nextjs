import { individualMeal } from "@/Api/individualMeal";
import React from "react";
import classes from "./page.module.css";
import Image from "next/image";

const page = async ({ params }) => {
  let [{ title, slug, image, summary, creator }] = await individualMeal(
    params.mealSlug
  );
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          {/* <Image src={image} alt={title} fill /> */}
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>

      <p>{summary}</p>
    </article>
  );
};

export default page;

// {
//   id: 3,
//   title: 'Grilled Salmon',
//   slug: 'grilled-salmon',
//   image: 'https://img.freepik.com/free-photo/top-view-food-frame-with-copy-space_23-2148723447.jpg?size=626&ext=jpg&ga=GA1.1.443805697.1698989126&semt=sph',
//   summary: 'Juicy and flavorful grilled salmon fillet with lemon and herbs.',
//   creator: 'Chef Michael Johnson'
// }
