import React from "react";
import maruzaone from "../nazariya/present/maruza2naz.pdf";
import amaliyone from "../nazariya/present/amaliy2naz.pdf";

const NazariyaOne = () => {
  return (
    <div className="nazariyaOne">
      <iframe src={maruzaone} frameborder="0"></iframe>
      <iframe src={amaliyone} frameborder="0"></iframe>
    </div>
  );
};

export default NazariyaOne;
