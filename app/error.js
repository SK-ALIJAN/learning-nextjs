"use client";
// in error components , next want to use "use client" directive to it in client

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
