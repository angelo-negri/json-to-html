import React from "react";
import { JsonImageProperties } from "../../types";
import { Properties } from "csstype";

interface ImageProps {
  properties: JsonImageProperties;
}

const Image: React.FC<ImageProps> = ({ properties }) => {
  const { width, height, x, y, rotation, originalName } = properties;

  const styles = {
    left: x,
    top: y,
    width: `${width}px`,
    height: `${height}px`,
    position: "absolute" as Properties["position"],
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <img
      style={styles}
      alt={originalName}
      src={`https://source.unsplash.com/random?${originalName}`}
    />
  );
};

export default Image;
