import React from "react";

const App: React.FC = () => (
  <button
    onClick={() => {
      console.log("click");
    }}
  >
    Hello from Client
  </button>
);

export default App;
