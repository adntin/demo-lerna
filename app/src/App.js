import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getDateTime, getTime } from "@demo/helper";
// import { Button } from "@demo/ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 日期时间: {getDateTime()}</p>
        <p>时间戳：: {getTime()}</p>
        {/* <Button>哈哈</Button> */}
      </header>
    </div>
  );
}

export default App;
