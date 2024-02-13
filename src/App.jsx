import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimationProvider from "./components/AnimationProvider/AnimationProvider";

const App = () => {
  return (
    <div className="golos">
      <BrowserRouter>
        <AnimationProvider />
      </BrowserRouter>
    </div>
  );
};

export default App;
