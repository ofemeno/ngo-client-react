import React from "react";
import GridLoader from "react-spinners/GridLoader";
export default function Loading() {
  return (
    <div className="loading">
      <GridLoader color="#36d7b7" />
    </div>
  );
}
