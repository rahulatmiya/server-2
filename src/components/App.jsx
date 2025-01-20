import React from "react";
import Login from "./Login";

var Islogged=false;

function App() {
  return (
    <div className="container">
    { 
     Islogged==true?<h1>Hello</h1>:<Login />
    }
      </div>
  );
}

export default App;
