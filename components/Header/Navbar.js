import React from "react";
import classes from "./navbar.module.css";
import SVG from "./SVG";
import Image from "next/image";
import logo from "@/assets/logo.jpg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.container}>
      <SVG />
      <div className={classes.wrapper}>
        <Link href={"/"}>
          <Image src={logo} alt="website logo" priority />
        </Link>

        <div className={classes.Links}>
          <Link href="/meals">Browse meals</Link>
          <Link href="/community">Foodie Community</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
