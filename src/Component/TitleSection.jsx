import React from "react";
import "../assets/TitleSection.css";
import NavigationArrows from "./NavigationArrows";
import {Button} from "./Button";

export const TitleSection = ({
  subtitle,
  mainTitle,
  showNavigation = true,
  buttonTitle,
  ...props
}) => {
  return (
    <div className="title-section" {...props}>
      <p className="sub-title">{subtitle}</p>
      <div className="containar-title"></div>
      <div className="section-nav">
        <h1 className="mainTitle">{mainTitle}</h1>
        {showNavigation ? (
          <NavigationArrows />
        ) : buttonTitle ? (
          <Button title={buttonTitle} />
        ) : null}
      </div>
    </div>
  );
};
