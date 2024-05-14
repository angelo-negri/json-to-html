import React from "react";
import {
  JsonBackgroundSolid,
  JsonDesignBackground,
  JsonDesignProperties,
} from "../../types";
import { Properties } from "csstype";

interface BannerProps {
  properties: JsonDesignProperties;
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ properties, children }) => {
  const { width, height, backgroundColor } = properties;

  const backgroundStyle = (background: JsonDesignBackground): string => {
    switch (background.type) {
      case "solid":
        return (background as JsonBackgroundSolid).scolor;
      default:
        return "transparent";
    }
  };

  const styles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor
      ? backgroundStyle(backgroundColor)
      : "transparent",
    position: "relative" as Properties["position"],
  };

  return <div style={styles}>{children}</div>;
};

export default Banner;
