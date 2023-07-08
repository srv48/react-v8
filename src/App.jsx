import React from "react";
import ReactDOM from "react-dom/client";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      {/* <Pet name="Tommy" animal="Dog" breed="Cute" />
      <Pet name="Sourav" animal="Human" breed="Normal" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
