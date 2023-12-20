"use client";
// in error components , Next js want  "use client" directive to it so that after data fetch in server component it should be shown in client

import React from "react";

const error = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Something went wrong !</h1>
      <p>Please comeback after some time </p>
    </div>
  );
};

export default error;
