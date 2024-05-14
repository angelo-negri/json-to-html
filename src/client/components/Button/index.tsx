import React from "react";
import {
  JsonBackground,
  JsonBackgroundSolid,
  JsonBorder,
  JsonButtonProperties,
} from "../../types";
import { Properties } from "csstype";

interface ButtonProps {
  properties: JsonButtonProperties;
}

const Button: React.FC<ButtonProps> = ({ properties }) => {
  const {
    width,
    height,
    backgroundColor,
    border,
    buttonLabel,
    x,
    y,
    labelStyle,
  } = properties;

  const backgroundStyle = (background: JsonBackground): string => {
    switch (background.type) {
      case "solid":
        return (background as JsonBackgroundSolid).scolor;
      default:
        return "transparent";
    }
  };

  const borderStyle = (border?: JsonBorder) => {
    if (!border) return {};
    const { weight, radius, color } = border;

    return {
      border: `${weight || 1}px solid ${color}`,
      borderRadius: `${radius}px`,
    };
  };

  const styles = {
    left: x,
    top: y,
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
      ? backgroundStyle(backgroundColor)
      : "transparent",
    ...borderStyle(border),
    position: "absolute" as Properties["position"],
    ...labelStyle,
  };

  return <button style={styles}>{buttonLabel}</button>;
};

export default Button;
