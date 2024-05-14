import React, { useMemo } from "react";
import { JsonTextProperties, JsonTextSlateConfigChildren } from "../../types";
import { Properties } from "csstype";

interface TextProps {
  properties: JsonTextProperties;
}

const Text: React.FC<TextProps> = ({ properties }) => {
  const { width, height, x, y, config, initialFontSize, scale } = properties;

  const textData = useMemo((): JsonTextSlateConfigChildren | null => {
    if (config.type === "slate") {
      if (config.nodes[0].type === "paragraph") {
        return config.nodes[0].children[0] as JsonTextSlateConfigChildren;
      }
    }
    return null;
  }, [properties]);

  const styles = {
    left: x,
    top: y,
    width: `${width}px`,
    height: `${height}px`,
    position: "absolute" as Properties["position"],
    color: textData?.color,
    fontSize: textData?.fontSize || initialFontSize,
    scale,
    ...textData?.fontSettings,
  };

  return <p style={styles}>{textData?.text}</p>;
};

export default Text;
