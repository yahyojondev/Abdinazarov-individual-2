import React from "react";
import trtOnepdf from "../trtOne/trtpdfOne/trtOne.pdf";
import trtOneamalypdf from "../trtOne/trtpdfOne/amaliy2trt.pdf";

const TrtOne = () => {
  return (
    <div className="trtone">
      <iframe src={trtOnepdf} frameborder="0"></iframe>
      <iframe src={trtOneamalypdf} frameborder="0"></iframe>
    </div>
  );
};

export default TrtOne;
