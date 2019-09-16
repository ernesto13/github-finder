import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="loading..."
        style={{ width: "90px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
