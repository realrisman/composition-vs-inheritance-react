import React from "react";
import FancyBorder from "./FancyBorder";

export default function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialo-message">{props.message}</p>
      {props.children}
    </FancyBorder>
  );
}
