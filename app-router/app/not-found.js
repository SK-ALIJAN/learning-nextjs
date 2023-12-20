"use client";
import React from "react";
import styled from "styled-components";

const NotFoundPage = () => {
  return (
    <WRAPPER>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you're looking for does not exist.</p>
    </WRAPPER>
  );
};

export default NotFoundPage;

let WRAPPER = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
  margin-top: 10rem;
`;
