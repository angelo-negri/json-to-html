import React from "react";
import { JsonResponse } from "./types";
import Banner from "./components/Banner";

interface Props {
  data: JsonResponse;
}
const App: React.FC<Props> = ({ data }) => {
  const { banner } = data;

  return (
    <Banner properties={banner.properties}>
      <></>
    </Banner>
  );
};

export default App;
