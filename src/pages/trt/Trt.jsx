import React from "react";
import pdf from "../brands/pdf/dars1.pdf";
import amaly from "../brands/amaliy/amaliy.pdf";

const Trt = () => {
  return (
    <div className="trt">
      <div className="trt__wrapper">
        <iframe src={pdf} frameborder="0"></iframe>
        <iframe src={amaly} frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default Trt;
