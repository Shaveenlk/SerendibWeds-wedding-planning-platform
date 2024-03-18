import React from "react";
import "./loader.css";
import { Hearts } from "react-loader-spinner";

const Loader = ({loadingdesc}) => {
  return (
    <div className="loader">
      <Hearts
        height="100"
        width="100"
        color="#FF0000"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h3>{loadingdesc}</h3>
    </div>
  );
};

export default Loader;
