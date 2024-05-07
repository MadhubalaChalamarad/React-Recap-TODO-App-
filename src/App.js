import React from "react";
import Data from "./components/Data";

function App() {
  return (
    <div className="flex flex-col items-center text-center  mt-10 ">
      <h1 className="font-bold text-4xl ">Simple Todo App</h1>
      <Data />
    </div>
  );
}

export default App;
