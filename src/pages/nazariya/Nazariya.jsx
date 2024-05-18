import React from "react";
import pptx from "../nazariya/present/maruza1naz.pdf";
import amaliy1 from "../nazariya/present/amaliy1naz.pdf";

const Nazariya = () => {
  return (
    <div className="nazariya">
      <iframe src={pptx} frameborder="0"></iframe>
      <iframe src={amaliy1} frameborder="0"></iframe>
    </div>
  );
};

export default Nazariya;
