"use client";
import React from "react";
import GridLoader from "react-spinners/GridLoader";

const Loading = () => {
  return (
    <div className="flex-center">
      <GridLoader />
    </div>
  );
};

export default Loading;
