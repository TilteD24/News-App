import React from "react";
import "../styles/card.css";

const Card = ({ title, image, keywords }) => {
  console.log(keywords);
  return (
    <>
      <div id="card">
        <img src={image} alt="" id="newsImage" />
        <div id="content">
          <h3 id="title">{title}</h3>
          <p>
            {" "}
            <b>Tags</b> : {keywords.map((tag) => tag + " ")}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
