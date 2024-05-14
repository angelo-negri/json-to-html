import React from "react";
import { JsonResponse } from "./types";
import Banner from "./components/Banner";
import Button from "./components/Button";

interface Props {
  data: JsonResponse;
}
const App: React.FC<Props> = ({ data }) => {
  const { banner } = data;

  return (
    <Banner properties={banner.properties}>
      {banner.elements.map((element) => {
        if (element.type === "slide") {
          return element.elements.map((slideElement) => {
            switch (slideElement.layerType) {
              case "button":
                return <Button properties={slideElement.properties} />;
              default:
                return null;
            }
          });
        }
      })}
    </Banner>
  );
};

export default App;
