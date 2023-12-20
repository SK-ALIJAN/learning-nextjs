// pages/community.js
import Navbar from "@/components/Header/Navbar";
import React from "react";

const CommunityPage = () => {
  return (
    <>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Welcome to Our Community!</h1>
        <div style={contentStyle}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
            turpis ac leo tincidunt mollis. Quisque accumsan, velit at venenatis
            malesuada, ligula felis hendrerit elit, vel feugiat libero lectus
            vel justo.
          </p>
          <p>
            Sed cursus augue nec est accumsan, sit amet tincidunt ligula
            venenatis. Vivamus interdum, turpis et consectetur tincidunt, justo
            arcu tincidunt ligula, id dignissim purus urna quis lectus.
          </p>
          <p>
            Proin non ligula ut tellus fermentum gravida vel vel nulla. Integer
            aliquet ex a magna luctus, vitae fermentum urna posuere. Aliquam
            erat volutpat.
          </p>
        </div>
      </div>
    </>
  );
};

const containerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "20px",
};

const titleStyle = {
  color: "#800080", // Purple color
};

const contentStyle = {
  color: "#333",
};

export default CommunityPage;
