import Link from "next/link";
import React, { Suspense } from "react";
import classes from "./page.module.css";
import MealGrid from "@/components/meals/meals-grid";
import { mealsFetch } from "@/Api/mealsApi";
import Loadingout from "./Loading-out";

export const metadata = {
  title: "meals available",
  description: "browse the delicious meals shared by our community",
};

async function FetchMeals() {
  let meals = await mealsFetch();
  return <MealGrid meals={meals} />;
}

const page = async () => {
  return (
    <>
      <header className={classes.headerContainer}>
        <h1 className={classes.title}>
          Delicious meals, created <span>By you</span>
        </h1>

        <p className={classes.para}>
          Choose your favorite recipe and cook it yourself . It is easy{" "}
        </p>
        <p className={classes.shareBtn}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe</Link>
        </p>
      </header>

      <main>
        {/* 
        using Suspence , i can make a loader so that above content should be visible
        but if i am using loading.js , so this would be for entire components , which is not good ux
         */}
        <Suspense fallback={<Loadingout />}>
          <FetchMeals />
        </Suspense>
      </main>
    </>
  );
};

export default page;
